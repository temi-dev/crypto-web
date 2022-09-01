import { Dialog } from "@mui/material"
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { CancelIcon } from "../../../icons/icons"

const SettingsCards = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

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
                            <div className="title">Cards</div>
                        </div>
                        <div className="dashbord-right-dialog-inner-content">
                            <div className="form-container">
                                <div className="text-center text-danger">
                                <span>Sorry this feature is not available yet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >
        </div>
    )
}

export default SettingsCards