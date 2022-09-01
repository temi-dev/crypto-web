import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { CancelIcon, CopyIcon, HometownLogo } from "../../../icons/icons"
import SettingsAddBank from "../add-new-bank/add-new-bank";

const SettingsBankDetails = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IData {
    }

    const initData: IData = {
    }
    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ settingsBankDetailsDialogVisibility: false });
    };

    return (
        <div>
            <Dialog open={open} className="animate__animated animate__slideInRight animate__faster" onClose={handleDialogClose} fullScreen>
                <div className="dashbord-right-dialog">
                    <div className="dashbord-right-dialog-content">
                        <div className="dashbord-right-dialog-header">
                            <div className="close-dialog">
                                <button onClick={handleDialogClose}>
                                    <CancelIcon color="#1d38e4"></CancelIcon>
                                </button>
                            </div>
                            <div className="title">Bank Details</div>
                        </div>
                        <div className="dashbord-right-dialog-inner-content">
                            <div className="form-container">
                                <div className="banks-list">
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">AKIN OLAYEMI</div>
                                                <div className="heading-note">
                                                    <span>1348189</span>
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
                                </div>
                                <div className="mt-3 delete-bank">
                                    <button onClick={handleDialogClose} >Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >
        </div>
    )
}

export default SettingsBankDetails