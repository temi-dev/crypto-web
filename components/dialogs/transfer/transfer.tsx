import { Dialog, TextField } from "@mui/material"
import React, { useState } from "react";
import { ArrowLeftIcon, CancelIcon, CheckCircleFilledIcon, NigeriaIcon } from "../../icons/icons";
import { IDialogs } from "../../../shared/interface/global.interface";
import PinInput from "react-pin-input";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
import { transferFiat, verifyAccount } from "../../../shared/services/dashboard/transactions/transaction";
import { Auth } from "../../auth/auth";
import { useAuth } from "../../auth/auth-provider";
const auth = new Auth();

const Transfer = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {
    const { user, setUser } = useAuth();
    const snackbar = useCustomSnackbar();
    interface IFormData {
        recipient?: string,
        amount?: number,
        description?: string,
        step?: number
        pin?: string
        processingRequest?: boolean
        verifiedUser?: any
    }
    const formData: IFormData = {
        step: 1,
    }
    const [form, setForm] = React.useState({ ...formData });

    const handleSetFormData = (data: IFormData) => {
        setForm({ ...form, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ transferDialogVisibility: false });
        setForm(formData)
    };

    const submit = async () => {
        handleSetFormData({ processingRequest: true });
        const data = {
            pin: form.pin,
            amount: form.amount,
            recipient: form.recipient,
            description: form.description
        }
        const request = await transferFiat(data);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            handleSetFormData({ processingRequest: false })
            return
        } else {
            handleDialogClose()
            snackbar.showSuccess(request.data.message)
            setForm(formData);
            const updatedUserInfo = await auth.resolveUser();
            if (updatedUserInfo) setUser(updatedUserInfo);
        }
    }

    const next = async () => {
        if (!form.recipient) {
            return snackbar.showError("Enter your recipient");
        } else if (!form.amount) {
            return snackbar.showError("Enter amount to transfer");
        } else if (!form.description) {
            return snackbar.showError("Enter description");
        } else {
            handleSetFormData({ processingRequest: true });
            const request = await verifyAccount({ username: form.recipient });
            if (request.responseCode == 422) {
                snackbar.showError(request.data ? request.data.message : "Error occured");
                handleSetFormData({ processingRequest: false })
                return
            } else {
                handleSetFormData({ verifiedUser: request.data.data, step: 2, processingRequest: false })
            }
        }

    }

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <Dialog fullWidth maxWidth='xs' open={open ? open : false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast">

                {
                    form.step == 1 && (
                        <div>
                            <div className="dialog-page">
                                <div className="dialog-header">
                                    <div className="title">Transfer</div>
                                    <div className="action-btn">
                                        <button onClick={handleDialogClose}>
                                            <CancelIcon color="#1d38e4"></CancelIcon>
                                        </button>
                                    </div>
                                </div>
                                <div className="content padding">
                                    <div >
                                        <label className="form-label">Recipient</label>
                                        <TextField
                                            className="form-control-2"
                                            variant="standard"
                                            placeholder="Name, @username, or email"
                                            fullWidth
                                            value={form.recipient}
                                            onChange={(e) => {
                                                console.log(form)
                                                handleSetFormData({ recipient: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />

                                    </div>

                                    {/* <div className="recent-contacts my-3">
                                        <div className="headline">Recent Contacts</div>
                                        <div className="my-3">
                                            <ReactSimplyCarousel
                                                activeSlideIndex={activeSlideIndex}
                                                onRequestChange={setActiveSlideIndex}
                                                forwardBtnProps={{
                                                    hidden: true
                                                }}
                                                backwardBtnProps={{
                                                    hidden: true
                                                }}
                                                responsiveProps={[
                                                    {
                                                        itemsToShow: 3,
                                                        itemsToScroll: 3,
                                                        minWidth: 768,
                                                    }, {
                                                        itemsToShow: 5,
                                                        itemsToScroll: 5,
                                                        minWidth: 1200,
                                                    },
                                                ]}
                                                speed={400}
                                                easing="linear"
                                            >
                                                <div className="contact-carousel-item">
                                                    <div className="contact-image-placeholder" style={{ backgroundImage: "url(" + "/images/avatar.png" + ")" }}></div>
                                                    <div className="contact-name text-truncate">Yemmy</div>
                                                </div>

                                                <div className="contact-carousel-item">
                                                    <div className="contact-image-placeholder" style={{ backgroundImage: "url(" + "/images/img.png" + ")" }}></div>
                                                    <div className="contact-name text-truncate">Miliano</div>
                                                </div>

                                                <div className="contact-carousel-item">
                                                    <div className="contact-image-placeholder" style={{ backgroundImage: "url(" + "/images/pic.png" + ")" }}></div>
                                                    <div className="contact-name text-truncate">Ebuka</div>
                                                </div>

                                                <div className="contact-carousel-item">
                                                    <div className="contact-image-placeholder" style={{ backgroundImage: "url(" + "/images/profile.png" + ")" }}></div>
                                                    <div className="contact-name text-truncate">Pedro</div>
                                                </div>

                                                <div className="contact-carousel-item">
                                                    <div className="contact-image-placeholder" style={{ backgroundImage: "url(" + "/images/profile.png" + ")" }}></div>
                                                    <div className="contact-name text-truncate">Owk</div>
                                                </div>

                                                <div className="contact-carousel-item">
                                                    <div className="contact-image-placeholder" style={{ backgroundImage: "url(" + "/images/img.png" + ")" }}></div>
                                                    <div className="contact-name text-truncate">Miliano</div>
                                                </div>

                                            </ReactSimplyCarousel>
                                        </div>
                                    </div> */}

                                    <div className="mt-3">
                                        <label className="form-label">Amount</label>
                                        <TextField
                                            className="amount-field"
                                            variant="standard"
                                            placeholder="Enter an amount"
                                            fullWidth
                                            value={form.amount}
                                            onChange={(e) => { handleSetFormData({ amount: Number(e.target.value) }) }}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <div className="d-flex">
                                                        <NigeriaIcon></NigeriaIcon>  <span className="transfer-currency">NGN</span>
                                                    </div>
                                                ),
                                            }}
                                        />

                                    </div>

                                    <div className="mt-3">
                                        <label className="form-label">Add a Note</label>
                                        <TextField
                                            className="form-control-2"
                                            variant="standard"
                                            placeholder="What’s this for?"
                                            fullWidth
                                            value={form.description}
                                            onChange={(e) => { handleSetFormData({ description: e.target.value }) }}
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />

                                    </div>

                                    <div className="mt-4 mb-4">
                                        <button disabled={form.processingRequest}  onClick={next} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                }
                {
                    form.step == 2 && (
                        <div className="dialog-page p-4">
                            <div className="mb-3 back-nav" onClick={() => handleSetFormData({ step: 1 })}>
                                <ArrowLeftIcon color="black"></ArrowLeftIcon>
                            </div>
                            <div className="heading">Confirm</div>
                            <div className="heading-note">
                                Notice: Ensure that the name of the recipient is corrent as transfer are not reversible
                            </div>
                            <div className="content text-center">
                                <span className="transfer-name-confirmation">
                                    {form.verifiedUser?.fname}  {form.verifiedUser?.lname}
                                </span>
                            </div>
                            <div className="mt-5">
                                <button onClick={() => handleSetFormData({ step: 3 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                            </div>
                        </div>
                    )
                }
                {
                    form.step == 3 && (
                        <div className="dialog-page p-4">
                            <div className="mb-3 back-nav" onClick={() => handleSetFormData({ step: 2 })}>
                                <ArrowLeftIcon color="black"></ArrowLeftIcon>
                            </div>
                            <div className="heading">Enter your pin</div>
                            <div className="content text-center">
                                <PinInput
                                    length={6}
                                    initialValue=""
                                    secret
                                    onChange={(value, index) => {
                                        handleSetFormData({ pin: value })
                                    }}
                                    type="numeric"
                                    inputMode="number"
                                    style={{ padding: '10px' }}
                                    inputStyle={{ borderColor: '#ececec', borderRadius: '10px' }}
                                    inputFocusStyle={{ borderColor: 'blue' }}
                                    onComplete={(value, index) => {
                                        handleSetFormData({ pin: value })
                                    }}
                                    autoSelect={true}
                                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                />
                            </div>
                            <div className="mt-5">
                                <button disabled={!form.pin || form.pin.length != 6 || form.processingRequest} onClick={submit} className='btn btn-radius w-100 btn-primary'>Continue</button>
                            </div>
                        </div>
                    )
                }
                {
                    form.step == 4 && (
                        <div className="dialog-page p-4">
                            <div className="heading">Success</div>
                            <div className="heading-note">Transaction successful</div>
                            <div className="content text-center">
                                <CheckCircleFilledIcon color="white" fillColor="#1D38E4"></CheckCircleFilledIcon>
                            </div>
                            <div className="mb-3">
                                <button onClick={handleDialogClose} className='btn btn-radius w-100 btn-primary'>Okay</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </Dialog >
    )
}

export default Transfer