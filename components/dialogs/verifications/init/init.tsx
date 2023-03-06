import { Dialog, TextField } from "@mui/material"
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { resendEmailVerification, sendPhoneNumberVerificationCode } from "../../../../shared/services/dashboard/settings/profile/profile.service";
import { useAuth } from "../../../auth/auth-provider";
import { CancelIcon } from "../../../icons/icons"
import useCustomSnackbar from "../../../snackbar/use-custom-snackbar";
import BvnNinUpdate from "../../settings/bvn-nin-update/bvn-nin-update";
import ProfilePin from "../../settings/profile-pin/profile-pin";
import VerifyPhoneNumber from "../../settings/verify-phone-number/verify-phone-number";

const InitVerification = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {
    const { user, setUser } = useAuth();
    const snackbar = useCustomSnackbar();


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
        open?: boolean
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
        activeIdentityTab: 0,
        open
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
    const handleDialogClose = () => {
        setVisibilityState({ initVerificationDialogDialogVisibility: false });
    };

    const relaunchDialog = () => {
        setVisibilityState({ initVerificationDialogDialogVisibility: true });
    }

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
                                    componentData.step == 1 && (
                                        <div>
                                            {user && !user.pin_exists && (
                                                <button className="verification-list" onClick={() => setDialogVisibilityState({ profilePinVisibility: true })}>
                                                    <div className="title">Setup pin</div>
                                                    <div className="description">Setup your profile pin</div>
                                                </button>
                                            )}
                                            {user && !user.email_verified_at && (
                                                <button disabled={componentData.sendingVerificationEmail} className="verification-list" onClick={resendVerificationEmail}>
                                                    <div className="title">Email Verification</div>
                                                    <div className="description">Click here to resend email verification</div>
                                                </button>
                                            )}
                                            {user && user.email_verified_at && (
                                                <button disabled className="verification-list done">
                                                    <div className="title">Email Verification</div>
                                                    <div className="description">Your email address is verified</div>
                                                </button>
                                            )}

                                            {user && !user.phone_verified_at && (
                                                <button disabled={componentData.sendingPhoneVerificationCode} className="verification-list" onClick={verifyPhonenumber}>
                                                    <div className="title">Verify phone number</div>
                                                    <div className="description">Click here to verify your phone number</div>
                                                </button>
                                            )}
                                            {user && user.phone_verified_at && (
                                                <button disabled className="verification-list done">
                                                    <div className="title">Phone Number Verification</div>
                                                    <div className="description">Your phone number is verified</div>
                                                </button>
                                            )}

                                            <button className="verification-list" onClick={() => setData({ step: 2 })}>
                                                <div className="title">Identity Verification</div>
                                                <div className="description">Click here to verify your identity</div>
                                            </button>
                                        </div>
                                    )
                                }

                                {componentData.step == 2 && (
                                    <div>
                                        <div className="verifications-tab mb-3">
                                            <button onClick={() => setData({ activeIdentityTab: 0 })} className={componentData.activeIdentityTab == 0 ? 'active' : ''}>Instant verification</button>
                                            <button onClick={() => setData({ activeIdentityTab: 1 })} className={componentData.activeIdentityTab == 1 ? 'active' : ''}>Non-Instant verification</button>
                                        </div>

                                        {
                                            componentData.activeIdentityTab == 0 && (
                                                <div>
                                                    {user && !user.bvn_verified_at && (
                                                        <button className="verification-list" onClick={() => setDialogVisibilityState({ bvnNinUpdateDialogVisibility: true })}>
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
                                                        <button className="verification-list" onClick={() => setDialogVisibilityState({ bvnNinUpdateDialogVisibility: true })}>
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
                                            )
                                        }
                                        {
                                            componentData.activeIdentityTab == 1 && (
                                                <div>

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
            <BvnNinUpdate open={dialogsVisibilityState.bvnNinUpdateDialogVisibility!} setVisibilityState={setDialogVisibilityState}></BvnNinUpdate>
            <VerifyPhoneNumber open={dialogsVisibilityState.verifyPhoneNumberDialogVisibility!} setVisibilityState={setDialogVisibilityState} next={relaunchDialog}></VerifyPhoneNumber>
            <ProfilePin user={user!} open={dialogsVisibilityState.profilePinVisibility!} setVisibilityState={setDialogVisibilityState} snackbar={snackbar} next={pinCreated}></ProfilePin>
        </div>
    )
}

export default InitVerification 