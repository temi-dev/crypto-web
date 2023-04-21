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
import InitVerification from "../dialogs/verifications/init/init";

const VerificationCta = ({ screen }: { screen: string }) => {
    const { user, setUser } = useAuth();

    const [appState, setAppState] = useAppContext();

    const DialogsVisibilityInitState: IDialogs = {
    }

    useEffect(() => {
        if(user && !user.email_verified_at && screen == 'dashboard'){
            setAppState({ ...appState, incompleteVerification: false })   
        }else if (user && (!user.account_verified || !user.pin_exists || !user.first_layer_verf_completed || !user.second_layer_verf_completed)) {
            setAppState({ ...appState, incompleteVerification: true })
        }
    }, [user])

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    return (
        <div>
            <button className="verify-profile" onClick={() => setDialogVisibilityState({ initVerificationDialogDialogVisibility: true })}>
                {
                    !user?.email_verified_at &&
                    <span>Verify your profile</span>
                }
                {
                    user?.email_verified_at  &&
                    <span>Upgrade Limit</span>
                }
            </button>

            <InitVerification open={dialogsVisibilityState.initVerificationDialogDialogVisibility!} setVisibilityState={setDialogVisibilityState}></InitVerification>
        </div>
    )
}


export default VerificationCta