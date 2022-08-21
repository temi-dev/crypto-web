import { Dialog, TextField } from "@mui/material"
import React, { useState } from "react";
import { ArrowLeftIcon, CancelIcon, CheckCircleFilledIcon, NigeriaIcon } from "../../icons/icons";
import ReactSimplyCarousel from 'react-simply-carousel';
import { IDialogs } from "../../../shared/interface/global.interface";

const Transfer = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IFormData {
        fromCoin?: string,
        from?: number,
        to?: string,
        toCoin?: string,
        step: number
    }
    const formData: IFormData = {
        fromCoin: 'bitcoin',
        step: 1,
        toCoin: 'etherum'
    }
    const [form, setForm] = React.useState({ ...formData });
    const handleSetFormData = (data: object) => {
        setForm({ ...formData, ...data });
    };
    const handleDialogClose = () => {
        if (form.step == 4) handleSetFormData({ step: 1 })
        setVisibilityState({ transferDialogVisibility: false });
    };
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
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
                                            className="amount-field"
                                            variant="standard"
                                            placeholder="Name, @username, or email"
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />

                                    </div>

                                    <div className="recent-contacts my-3">
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
                                    </div>

                                    <div >
                                        <label className="form-label">Amount</label>
                                        <TextField
                                            className="amount-field"
                                            variant="standard"
                                            placeholder="Enter an amount"
                                            fullWidth
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
                                            className="amount-field"
                                            variant="standard"
                                            placeholder="What’s this for?"
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />

                                    </div>

                                    <div className="mt-4 mb-4">
                                        <button onClick={() => setForm({ step: 2 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
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
                                <span className="transfer-name-confirmation">Obi Pedro</span>
                            </div>
                            <div className="mt-5">
                                <button onClick={() => setForm({ step: 3 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
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
                                <TextField
                                    className="form-control-2 pin-field"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    className="form-control-2 pin-field"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    className="form-control-2 pin-field"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    className="form-control-2 pin-field"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    className="form-control-2 pin-field"
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                    variant="standard"
                                />
                            </div>
                            <div className="mt-5">
                                <button onClick={() => setForm({ step: 4 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
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