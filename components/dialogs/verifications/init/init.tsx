import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { useAppContext } from "../../../../shared/contexts/app.context";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { getAppData } from "../../../../shared/services/app/app.service";
import { resendEmailVerification, sendPhoneNumberVerificationCode, submitIdDoc } from "../../../../shared/services/dashboard/settings/profile/profile.service";
import { Auth } from "../../../auth/auth";
import { useAuth } from "../../../auth/auth-provider";
import { CancelIcon } from "../../../icons/icons"
import useCustomSnackbar from "../../../snackbar/use-custom-snackbar";
import BvnNinUpdate from "../../settings/bvn-nin-update/bvn-nin-update";
import ProfilePin from "../../settings/profile-pin/profile-pin";
import VerifyPhoneNumber from "../../settings/verify-phone-number/verify-phone-number";
import Link from "next/link";
const auth = new Auth();

const InitVerification = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {
    const { user, setUser } = useAuth();
    const snackbar = useCustomSnackbar();

    const [appState, setAppState] = useAppContext()

    const DialogsVisibilityInitState: IDialogs = {
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    interface IData {
        email_verified_at?: Date,
        phone_verified_at?: Date,
        nin_verified_at?: Date,
        bvn_verified_at?: Date,
        idc_verified_at?: Date,
        activeVerificationStep?: number,
        sendingVerificationEmail?: boolean,
        sendingPhoneVerificationCode?: boolean,
        step?: number
        activeIdentityTab?: number,
        activeIdentityVerificationTab?: number,
        open?: boolean
        idFrontPicture?: any
        _idFrontPicture?: any
        idBackPicture?: any
        _idBackPicture?: any
        processingRequest?: boolean
        formSubmitted?: boolean
        idNumber?: string
        idType?: string,
        options?: Array<string>
    }

    const data: IData = {
        email_verified_at: user!.email_verified_at,
        phone_verified_at: user!.phone_verified_at,
        nin_verified_at: user!.nin_verified_at,
        bvn_verified_at: user!.bvn_verified_at,
        idc_verified_at: user!.idc_verified_at,
        sendingVerificationEmail: false,
        sendingPhoneVerificationCode: false,
        step: 1,
        activeIdentityTab: (user && user.first_layer_verf_completed && !user.second_layer_verf_completed) ? 1 : 0,
        activeIdentityVerificationTab: 0,
        options: [
            ''
        ]
    }
    const [componentData, setComponentData] = useState(data);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const resendVerificationEmail = async () => {
        const request = await resendEmailVerification();
        setData({ sendingVerificationEmail: true })
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            snackbar.showSuccess(request.data.message)
        }
        setData({ sendingVerificationEmail: false })
    }

    const verifyPhonenumber = async () => {
        setData({ sendingPhoneVerificationCode: true })
        const request = await sendPhoneNumberVerificationCode(user!.phone);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            snackbar.showSuccess(request.data.message)
            setDialogVisibilityState({ verifyPhoneNumberDialogVisibility: true })
            handleDialogClose()
        }
        setData({ sendingPhoneVerificationCode: false })
    }

    const pinCreated = () => {
        setUser({ ...user!, pin_exists: true })
    }

    const close = () => {
        if (componentData.step == 2) {
            setData({ step: 1 })
        } else {
            handleDialogClose()
        }
    }

    const setUpNINBVN = (type: string) => {
        setAppState({
            ...appState,
            dialogStates: {
                ...appState.dialogStates,
                bvnNinUpdateDialog: {
                    visibitlity: true,
                    type
                }
            }
        })
        handleDialogClose()
    }

    const handleDialogClose = () => {
        setVisibilityState({ initVerificationDialogDialogVisibility: false });
        setComponentData(data)
    };

    const relaunchDialog = () => {
        setVisibilityState({ initVerificationDialogDialogVisibility: true });
    }

    const encodeImageFileAsURL = (element: any, type: string) => {
        var file = element.target.files[0];
        var reader = new FileReader();
        reader.onloadend = async function () {
            if (type == 'front') setComponentData({ ...componentData, idFrontPicture: reader.result })
            if (type == 'back') setComponentData({ ...componentData, idBackPicture: reader.result })

        }
        reader.readAsDataURL(file);
    }

    const submitDocs = async () => {
        const data = {
            front_img_string: componentData.idFrontPicture,
            back_img_string: componentData.idBackPicture,
            number: componentData.idNumber,
            type: componentData.idType,
        }
        const appDataRequest = await submitIdDoc(data);
        if (appDataRequest.responseCode == 422) {
            snackbar.showError(appDataRequest.data ? appDataRequest.data.message : "Error occured");
            return
        } else {
            snackbar.showSuccess(appDataRequest.data.message);
            const updatedUserInfo = await auth.resolveUser();
            if (updatedUserInfo) setUser(updatedUserInfo);
        }
    }

    const getData = async () => {
        const appDataRequest = await getAppData();
        if (appDataRequest.responseCode == 422) {
            snackbar.showError(appDataRequest.data ? appDataRequest.data.message : "Error occured");
            return
        } else {
            setData({ options: appDataRequest.data.data.idcard_types })
        }
    }

    useEffect(() => {

        getData()

    }, [appState?.dialogStates?.initVerificationDialogDialogVisibility])

    return (
        <div>
            <Dialog fullWidth maxWidth='xs' open={open ? open : false} onClose={handleDialogClose}>
                <div className="animate__animated animate__fadeIn animate__fast">
                    <div>
                        <div className="dialog-page">
                            <div className="dialog-header">
                                <div className="title">Verification</div>
                                <div className="action-btn">
                                    <button onClick={close}>
                                        <CancelIcon color="#1d38e4"></CancelIcon>
                                    </button>
                                </div>
                            </div>
                            <div className="content padding my-4">

                                {
                                    componentData.step == 2 && (
                                        <div>
                                            <div className="verifications-tab mb-3">
                                                <button onClick={() => setData({ activeIdentityVerificationTab: 0 })} className={componentData.activeIdentityVerificationTab == 0 ? 'active' : ''}>Instant Verification</button>
                                                <button onClick={() => setData({ activeIdentityVerificationTab: 1 })} className={componentData.activeIdentityVerificationTab == 1 ? 'active' : ''}>Non-Instant Verification</button>
                                            </div>

                                            {componentData.activeIdentityVerificationTab == 0 &&
                                                <div>

                                                    {user && !user.pin_exists && (
                                                        <button className="verification-list" onClick={() => setDialogVisibilityState({ profilePinVisibility: true })}>
                                                            <div className="title">Setup pin</div>
                                                            <div className="description">Setup your profile pin</div>
                                                        </button>
                                                    )}

                                                    {user && !user.bvn_verified_at && (
                                                        <button className="verification-list" onClick={() => setUpNINBVN('BVN')}>
                                                            <div className="title">Verify BVN</div>
                                                            <div className="description">Click here to verify your BVN</div>
                                                        </button>
                                                    )}

                                                    {user && user.bvn_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">BVN Verification</div>
                                                            <div className="description">Your BVN is verified</div>
                                                        </button>
                                                    )}

                                                    {user && !user.nin_verified_at && (
                                                        <button className="verification-list" onClick={() => setUpNINBVN('NIN')}>
                                                            <div className="title">Verify NIN</div>
                                                            <div className="description">Click here to verify your NIN</div>
                                                        </button>
                                                    )}

                                                    {user && user.nin_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">NIN Verification</div>
                                                            <div className="description">Your NIN is verified</div>
                                                        </button>
                                                    )}
                                                </div>
                                            }

                                            {user && componentData.activeIdentityVerificationTab == 1 &&
                                                <div>
                                                    {!user.idc_uploaded_at && (
                                                        <div >
                                                            <div className="">
                                                                <label className="form-label">I.D Type</label>
                                                                <Select
                                                                    className={`form-control ${(!componentData.idType && componentData.formSubmitted ? 'error' : '')} `}
                                                                    disableUnderline
                                                                    displayEmpty
                                                                    variant='standard'
                                                                    value={componentData.idType || ''}
                                                                    onChange={(event) => setData({ idType: event.target.value })}>
                                                                    <MenuItem value="" className="ui-select-menu">
                                                                        <em>Select an option</em>
                                                                    </MenuItem>
                                                                    {
                                                                        componentData.options?.map(element => {
                                                                            return (
                                                                                <MenuItem key={element} value={element} className="ui-select-menu">
                                                                                    {element}
                                                                                </MenuItem>
                                                                            )
                                                                        })
                                                                    }
                                                                </Select>
                                                                {
                                                                    (!componentData.idType && componentData.formSubmitted &&
                                                                        <div className='error-message'>Select an option</div>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="mt-3">
                                                                <label className="form-label">I.D Number</label>
                                                                <TextField
                                                                    className={`form-control ${(!componentData.idNumber && componentData.formSubmitted ? 'error' : '')} `}
                                                                    variant="standard"
                                                                    placeholder="I.D Number"
                                                                    fullWidth
                                                                    value={componentData.idNumber || ''}
                                                                    onChange={(e) => setData({ idNumber: e.target.value })}
                                                                    InputProps={{
                                                                        disableUnderline: true,
                                                                    }}
                                                                />
                                                                {
                                                                    (!componentData.idNumber && componentData.formSubmitted &&
                                                                        <div className='error-message'>Enter your I.D number</div>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="d-flex mt-3 doc-files-con">
                                                                <div className="flex-grow-1 text-center">
                                                                    <div className="id-image-placeholder" >
                                                                        <div style={{ backgroundImage: "url(" + componentData.idFrontPicture + ")" }}></div>
                                                                    </div>
                                                                    <label className="avatar-btn" htmlFor="fileInput1">Front picture
                                                                        <input value={componentData._idFrontPicture} className="custom-file-input" id="fileInput1" type="file" accept="image/png,image/jpg,image/jpeg" onChange={(e) => encodeImageFileAsURL(e, 'front')} />
                                                                    </label>
                                                                </div>
                                                                <div className="flex-grow-1 text-center">
                                                                    <div className="id-image-placeholder" >
                                                                        <div style={{ backgroundImage: "url(" + componentData.idBackPicture + ")" }}></div>
                                                                    </div>
                                                                    <label className="avatar-btn" htmlFor="fileInput">Back picture
                                                                        <input value={componentData._idBackPicture} className="custom-file-input" id="fileInput" type="file" accept="image/png,image/jpg,image/jpeg" onChange={(e) => encodeImageFileAsURL(e, 'back')} />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 mb-4">
                                                                <button disabled={
                                                                    componentData.processingRequest || !componentData.idType || !componentData.idNumber || !componentData.idFrontPicture || !componentData.idBackPicture
                                                                } onClick={submitDocs} className='btn btn-radius w-100 btn-primary'>Submit</button>
                                                            </div>
                                                        </div>
                                                    )
                                                    }
                                                    {user.idc_uploaded_at && !user.idc_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Doc Uploaded</div>
                                                            <div className="description">Your upload is under review    .</div>
                                                        </button>
                                                    )}
                                                    {user.idc_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Doc Verified</div>
                                                            <div className="description">Your upload is verified   .</div>
                                                        </button>
                                                    )}
                                                </div>
                                            }
                                        </div>

                                    )
                                }

                                {componentData.step == 1 && (
                                    <div>
                                        {
                                            user && user.first_layer_verf_completed &&
                                            <div className="verifications-tab mb-3">
                                                <button onClick={() => setData({ activeIdentityTab: 0 })} className={componentData.activeIdentityTab == 0 ? 'active' : ''}>First Layer Verification</button>
                                                <button onClick={() => setData({ activeIdentityTab: 1 })} className={componentData.activeIdentityTab == 1 ? 'active' : ''}>Second Layer Verification</button>
                                            </div>
                                        }

                                        {
                                            user && componentData.activeIdentityTab == 0 && (
                                                <div>
                                                    {!user.email_verified_at && (
                                                        <button disabled={componentData.sendingVerificationEmail} className="verification-list" onClick={resendVerificationEmail}>
                                                            <div className="title">Email Verification</div>
                                                            <div className="description">Click here to resend email verification</div>
                                                        </button>
                                                    )}
                                                    {user.email_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Email Verification</div>
                                                            <div className="description">Your email address is verified</div>
                                                        </button>
                                                    )}

                                                    {!user.bvn_verified_at && !user.nin_verified_at && !user.idc_verified_at &&
                                                        <button className="verification-list" onClick={() => setData({ step: 2 })}>
                                                            <div className="title">Identity Verification</div>
                                                            <div className="description">Click here to verify your identity</div>
                                                        </button>
                                                    }

                                                    {(!user.bvn_verified_at || !user.nin_verified_at || !user.idc_verified_at) && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Identity Verification</div>
                                                            <div className="description">Identity is verified</div>
                                                        </button>
                                                    )}

                                                    {!user.dp_verified_at && !user.dp_uploaded_at && user.first_layer_verf_completed && (
                                                        <Link href='/dashboard/settings'>
                                                            <button className="verification-list">
                                                                <div className="title">Selfie Verification</div>
                                                                <div className="description">Click here to upload profile selfie image</div>
                                                            </button>
                                                        </Link>
                                                    )}
                                                    {user.dp_verified_at && user.dp_uploaded_at && user.first_layer_verf_completed &&(
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Selfie Verification</div>
                                                            <div className="description">Your selfie verification is completed</div>
                                                        </button>
                                                    )}
                                                    {!user.dp_verified_at && user.dp_uploaded_at && user.first_layer_verf_completed &&(
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Selfie Verification</div>
                                                            <div className="description">Your selfie verification is beng reviewed</div>
                                                        </button>
                                                    )}
                                                </div>
                                            )
                                        }

                                        {
                                            user && componentData.activeIdentityTab == 1 && (
                                                <div>
                                                    {!user.phone_verified_at && (
                                                        <button disabled={componentData.sendingPhoneVerificationCode} className="verification-list" onClick={verifyPhonenumber}>
                                                            <div className="title">Verify phone number</div>
                                                            <div className="description">Click here to verify your phone number</div>
                                                        </button>
                                                    )}
                                                    {user.phone_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Phone Number Verification</div>
                                                            <div className="description">Your phone number is verified</div>
                                                        </button>
                                                    )}

                                                    {!user.idc_uploaded_at && (
                                                        <div >
                                                            <div className="">
                                                                <label className="form-label">I.D Type</label>
                                                                <Select
                                                                    className={`form-control ${(!componentData.idType && componentData.formSubmitted ? 'error' : '')} `}
                                                                    disableUnderline
                                                                    displayEmpty
                                                                    variant='standard'
                                                                    value={componentData.idType || ''}
                                                                    onChange={(event) => setData({ idType: event.target.value })}>
                                                                    <MenuItem value="" className="ui-select-menu">
                                                                        <em>Select an option</em>
                                                                    </MenuItem>
                                                                    {
                                                                        componentData.options?.map(element => {
                                                                            return (
                                                                                <MenuItem key={element} value={element} className="ui-select-menu">
                                                                                    {element}
                                                                                </MenuItem>
                                                                            )
                                                                        })
                                                                    }
                                                                </Select>
                                                                {
                                                                    (!componentData.idType && componentData.formSubmitted &&
                                                                        <div className='error-message'>Select an option</div>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="mt-3">
                                                                <label className="form-label">I.D Number</label>
                                                                <TextField
                                                                    className={`form-control ${(!componentData.idNumber && componentData.formSubmitted ? 'error' : '')} `}
                                                                    variant="standard"
                                                                    placeholder="I.D Number"
                                                                    fullWidth
                                                                    value={componentData.idNumber || ''}
                                                                    onChange={(e) => setData({ idNumber: e.target.value })}
                                                                    InputProps={{
                                                                        disableUnderline: true,
                                                                    }}
                                                                />
                                                                {
                                                                    (!componentData.idNumber && componentData.formSubmitted &&
                                                                        <div className='error-message'>Enter your I.D number</div>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="d-flex mt-3 doc-files-con">
                                                                <div className="flex-grow-1 text-center">
                                                                    <div className="id-image-placeholder" >
                                                                        <div style={{ backgroundImage: "url(" + componentData.idFrontPicture + ")" }}></div>
                                                                    </div>
                                                                    <label className="avatar-btn" htmlFor="fileInput1">Front picture
                                                                        <input value={componentData._idFrontPicture} className="custom-file-input" id="fileInput1" type="file" accept="image/png,image/jpg,image/jpeg" onChange={(e) => encodeImageFileAsURL(e, 'front')} />
                                                                    </label>
                                                                </div>
                                                                <div className="flex-grow-1 text-center">
                                                                    <div className="id-image-placeholder" >
                                                                        <div style={{ backgroundImage: "url(" + componentData.idBackPicture + ")" }}></div>
                                                                    </div>
                                                                    <label className="avatar-btn" htmlFor="fileInput">Back picture
                                                                        <input value={componentData._idBackPicture} className="custom-file-input" id="fileInput" type="file" accept="image/png,image/jpg,image/jpeg" onChange={(e) => encodeImageFileAsURL(e, 'back')} />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 mb-4">
                                                                <button disabled={
                                                                    componentData.processingRequest || !componentData.idType || !componentData.idNumber || !componentData.idFrontPicture || !componentData.idBackPicture
                                                                } onClick={submitDocs} className='btn btn-radius w-100 btn-primary'>Submit</button>
                                                            </div>
                                                        </div>
                                                    )
                                                    }
                                                    {user.idc_uploaded_at && !user.idc_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Doc Uploaded</div>
                                                            <div className="description">Your upload is under review    .</div>
                                                        </button>
                                                    )}
                                                    {user.idc_verified_at && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Doc Verified</div>
                                                            <div className="description">Your upload is verified   .</div>
                                                        </button>
                                                    )}

                                                    {user.bank_accounts?.length == 0 && (
                                                        <Link href='/dashboard/settingsbanks'>
                                                            <button className="verification-list">
                                                                <div className="title">Bank accounts</div>
                                                                <div className="description">Add bank account</div>
                                                            </button>
                                                        </Link>
                                                    )}
                                                    {user.bank_accounts?.length != 0 && (
                                                        <button disabled className="verification-list done">
                                                            <div className="title">Bank accounts</div>
                                                            <div className="description">Account added</div>
                                                        </button>
                                                    )}

                                                </div>
                                            )
                                        }

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </Dialog>
            <BvnNinUpdate open={appState.dialogStates?.bvnNinUpdateDialog?.visibitlity!} setVisibilityState={setDialogVisibilityState} next={relaunchDialog}></BvnNinUpdate>
            <VerifyPhoneNumber open={dialogsVisibilityState.verifyPhoneNumberDialogVisibility!} setVisibilityState={setDialogVisibilityState} next={relaunchDialog}></VerifyPhoneNumber>
            <ProfilePin user={user!} open={dialogsVisibilityState.profilePinVisibility!} setVisibilityState={setDialogVisibilityState} snackbar={snackbar} next={pinCreated}></ProfilePin>
        </div>
    )
}

export default InitVerification 