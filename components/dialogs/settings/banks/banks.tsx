import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { CancelIcon, CopyIcon, HometownLogo } from "../../../icons/icons"
import SettingsAddBank from "../add-new-bank/add-new-bank";
import SettingsBankDetails from "../bank-details/bank-details";

const SettingsBanks = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IData {
    }

    const initData: IData = {
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

                                    <div className="list" onClick={() => setDialogVisibilityState({ settingsBankDetailsDialogVisibility: true })}>
                                        <div className="text">
                                            <div>
                                                <div className="heading">AKIN OLAYEMI</div>
                                                <div className="heading-note">
                                                    <span>***8189</span>
                                                    <span> . </span>
                                                    <span>Hometown</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <div className="bank-logo" style={{ backgroundImage: "url(" + "/images/hometown2.svg" + ")" }}>
                                            </div>
                                        </div>
                                    </div>

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
            
            <SettingsBankDetails  open={dialogsVisibilityState.settingsBankDetailsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsBankDetails>
        </div>
    )
}

export default SettingsBanks