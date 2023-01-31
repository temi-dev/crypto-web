import { IDialogs } from "../../shared/interface/global.interface";
import { User } from "../auth/auth";
import { useEffect, useState } from "react";
import BvnNinUpdate from "../dialogs/settings/bvn-nin-update/bvn-nin-update";
import ProfilePin from "../dialogs/settings/profile-pin/profile-pin";
import useCustomSnackbar from "../snackbar/use-custom-snackbar";
import { useAuth } from "../auth/auth-provider";
import { resendEmailVerification, sendPhoneNumberVerificationCode } from "../../shared/services/dashboard/settings/profile/profile.service";
import VerifyPhoneNumber from "../dialogs/settings/verify-phone-number/verify-phone-number";
import { useAppContext } from "../../shared/contexts/app.context";

const VerificationCta = () => {
    const snackbar = useCustomSnackbar();
    const { user, setUser } = useAuth();

    interface IData {
        email_verified_at?: Date,
        phone_verified_at?: Date,
        nin_verified_at?: Date,
        bvn_verified_at?: Date,
        idc_verified_at?: Date,
        activeVerificationStep?: number,
        sendingVerificationEmail?: boolean,
        sendingPhoneVerificationCode?: boolean
    }

    const data: IData = {
        email_verified_at: user!.email_verified_at,
        phone_verified_at: user!.phone_verified_at,
        nin_verified_at: user!.nin_verified_at,
        bvn_verified_at: user!.bvn_verified_at,
        idc_verified_at: user!.idc_verified_at,
        sendingVerificationEmail: false,
        sendingPhoneVerificationCode: false
    }

    const [componentData, setComponentData] = useState(data);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const DialogsVisibilityInitState: IDialogs = {
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const pinCreated = () => {
        setUser({ ...user!, pin_exists: true })
    }

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
        }
        setData({ sendingPhoneVerificationCode: false })
    }

    const [appState, setAppState] = useAppContext();

    useEffect(() => {
        if (user && !user.email_verified_at) {
            setAppState({ ...appState, incompleteVerification: true })
            return setData({ activeVerificationStep: 1 })
        }
        if (user && !user.pin_exists) {
            setAppState({ ...appState, incompleteVerification: true })
            return setData({ activeVerificationStep: 2 })
        }
        if (user && (!user.nin_verified_at && !user.bvn_verified_at)) {
            setAppState({ ...appState, incompleteVerification: true })
            return setData({ activeVerificationStep: 3 })
        }
        if (user && !user.phone_verified_at) {
            setAppState({ ...appState, incompleteVerification: true })
            return setData({ activeVerificationStep: 4 })
           
        }
    }, [user])


    return (
        <div>
            {
                componentData.activeVerificationStep == 1 &&
                <button disabled={componentData.sendingVerificationEmail} className="white-btn" onClick={resendVerificationEmail}>Re-send Verification Email</button>
            }
            {
                componentData.activeVerificationStep == 2 &&
                <button className="white-btn" onClick={() => setDialogVisibilityState({ profilePinVisibility: true })}>Setup Pin</button>
            }
            {
                componentData.activeVerificationStep == 3 &&
                <button className="white-btn" onClick={() => setDialogVisibilityState({ bvnNinUpdateDialogVisibility: true })}>Verify NIN / BVN</button>
            }
            {
                componentData.activeVerificationStep == 4 &&
                <button className="white-btn" disabled={componentData.sendingPhoneVerificationCode} onClick={verifyPhonenumber}>Verify Phone Number</button>
            }

            <BvnNinUpdate open={dialogsVisibilityState.bvnNinUpdateDialogVisibility!} setVisibilityState={setDialogVisibilityState}></BvnNinUpdate>
            <ProfilePin user={user!} open={dialogsVisibilityState.profilePinVisibility!} setVisibilityState={setDialogVisibilityState} snackbar={snackbar} next={pinCreated}></ProfilePin>
            <VerifyPhoneNumber open={dialogsVisibilityState.verifyPhoneNumberDialogVisibility!} setVisibilityState={setDialogVisibilityState} ></VerifyPhoneNumber>
        </div>
    )
}


export default VerificationCta