import { Dialog } from "@mui/material"
import { useEffect, useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { User } from "../../../auth/auth";
import { CancelIcon, WalletCircleFilledIcon, } from "../../../icons/icons"
import SettingsAddBank from "../add-new-bank/add-new-bank";
import SettingsBankDetails from "../bank-details/bank-details";



const SettingsBanks = ({ open, setVisibilityState, user }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>, user: User }) => {

    interface IData {
        bankAccounts?: Array<any>
    }

    const initData: IData = {
        bankAccounts: user.bank_accounts,
    }

    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ settingsBanksDialogVisibility: false });
    };
    const DialogsVisibilityInitState: IDialogs = {
        settingsAddBankDialogVisibility: false,
        settingsBankDetailsDialogVisibility: false,
    }


    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    useEffect(() => {

    }, [open]);

    return (
        <div>
            <Dialog open={open ? open : false} className="animate__animated animate__slideInRight animate__faster" onClose={handleDialogClose} fullScreen>
                <div className="dashbord-right-dialog">
                    <div className="dashbord-right-dialog-content">
                        <div className="dashbord-right-dialog-header">
                            <div className="close-dialog">
                                <button onClick={handleDialogClose}>
                                    <CancelIcon color="#1d38e4"></CancelIcon>
                                </button>
                            </div>
                            <div className="title">Banks</div>
                        </div>
                        <div className="dashbord-right-dialog-inner-content">
                            <div className="form-container">
                                <div className="banks-list">
                                    {
                                        componentData.bankAccounts?.map(element => {
                                            return (
                                                <div className="list" onClick={() => setDialogVisibilityState({ settingsBankDetailsDialogVisibility: true })}>
                                                    <div className="text">
                                                        <div>
                                                            <div className="heading">AKIN OLAYEMI</div>
                                                            <div className="heading-note">
                                                                <span>***8189</span>
                                                                <span> . </span>
                                                                <span>United Bank for Africa</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image">
                                                        <div className="bank-logo" style={{ backgroundImage: "url(" + "/images/uba.svg" + ")" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {
                                        componentData.bankAccounts?.length == 0 &&
                                        <div className="text-center">
                                            <WalletCircleFilledIcon
                                                color='white'
                                                fillColor='#1D38E4' />
                                            <div className="mt-3">No Banks</div>
                                        </div>
                                    }

                                </div>
                                <div className="mt-4">
                                    <button onClick={() => setDialogVisibilityState({ settingsAddBankDialogVisibility: true })} className='btn btn-radius py-3 w-100 btn-primary'>Add New Bank</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >
            <SettingsAddBank open={dialogsVisibilityState.settingsAddBankDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsAddBank>

            <SettingsBankDetails open={dialogsVisibilityState.settingsBankDetailsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsBankDetails>
        </div>
    )
}

export default SettingsBanks