import { IDialogs } from "../../shared/interface/global.interface";
import { User } from "../auth/auth";
import { useEffect, useState } from "react";
import BvnNinUpdate from "../dialogs/settings/bvn-nin-update/bvn-nin-update";
import ProfilePin from "../dialogs/settings/profile-pin/profile-pin";
import useCustomSnackbar from "../snackbar/use-custom-snackbar";
import { useAuth } from "../auth/auth-provider";
import { resendEmailVerification } from "../../shared/services/dashboard/settings/profile/profile.service";

const VerificationCta = () => {
    const snackbar = useCustomSnackbar();
    const { user, setUser } = useAuth();

    interface IData {
        email_verified_at?: string,
        phone_verified_at?: string,
        nin_verified_at?: Date,
        bvn_verified_at?: Date,
        idc_verified_at?: string,
        activeVerificationStep?: number,
        sendingVerificationEmail?: boolean
    }

    const data: IData = {
        email_verified_at: user!.email_verified_at,
        phone_verified_at: user!.phone_verified_at,
        nin_verified_at: user!.nin_verified_at,
        bvn_verified_at: user!.bvn_verified_at,
        idc_verified_at: user!.idc_verified_at,
        sendingVerificationEmail: false
    }

    const [componentData, setComponentData] = useState(data);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const DialogsVisibilityInitState: IDialogs = {
    }

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

    useEffect(() => {
        if (user && !user.email_verified_at) return setData({ activeVerificationStep: 1 })
        if (user && !user.pin_exists) return setData({ activeVerificationStep: 2 })
        if (user && (!user.nin_verified_at && !user.bvn_verified_at)) return setData({ activeVerificationStep: 3 })
        if (user && !user.phone_verified_at) return setData({ activeVerificationStep: 4 })
    }, [user])

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

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

            <BvnNinUpdate open={dialogsVisibilityState.bvnNinUpdateDialogVisibility!} setVisibilityState={setDialogVisibilityState}></BvnNinUpdate>
            <ProfilePin user={user!} open={dialogsVisibilityState.profilePinVisibility!} setVisibilityState={setDialogVisibilityState} snackbar={snackbar} next={pinCreated}></ProfilePin>
        </div>
    )
}


export default VerificationCta