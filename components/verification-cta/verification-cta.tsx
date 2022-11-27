import { IDialogs } from "../../shared/interface/global.interface";
import { User } from "../auth/auth";
import { useEffect, useState } from "react";
import BvnUpdate from "../dialogs/settings/bvn-update/bvn-update";

const VerificationCta = ({ user }: { user: User }) => {

    interface IData {
        email_verified_at?: string,
        phone_verified_at?: string,
        nin_verified_at?: string,
        bvn_verified_at?: string,
        idc_verified_at?: string,
        activeVerificationStep?: number,
    }

    const data: IData = {
        email_verified_at: user.email_verified_at,
        phone_verified_at: user.phone_verified_at,
        nin_verified_at: user.nin_verified_at,
        bvn_verified_at: user.bvn_verified_at,
        idc_verified_at: user.idc_verified_at,
    }

    const [componentData, setComponentData] = useState(data);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const DialogsVisibilityInitState: IDialogs = {
        settingsBvnUpdateDialogVisibility: false
    }

    useEffect(() => {
        if (!user.email_verified_at) return setData({ activeVerificationStep: 1 })
        if (!user.phone_verified_at) return setData({ activeVerificationStep: 2 })
    }, [user])

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    return (
        <div>
            {
                componentData.activeVerificationStep == 1 &&
                <button className="white-btn">Verify Email</button>
            }
            {
                componentData.activeVerificationStep == 2 &&
                <button className="white-btn" onClick={() => setDialogVisibilityState({ settingsBvnUpdateDialogVisibility: true })}>Complete Profile</button>
            }
            <BvnUpdate open={dialogsVisibilityState.settingsBvnUpdateDialogVisibility!} setVisibilityState={setDialogVisibilityState}></BvnUpdate>
        </div>
    )
}


export default VerificationCta