import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { CancelIcon, CopyIcon, HometownLogo } from "../../../icons/icons"

const SettingsAddBank = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IData {
        bank?: string
    }

    const initData: IData = {
        bank: ''
    }

    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ settingsAddBankDialogVisibility: false });
    };
    return (
        <Dialog open={open} className="animate__animated animate__slideInRight animate__faster" onClose={handleDialogClose} fullScreen>
            <div className="dashbord-right-dialog">
                <div className="dashbord-right-dialog-content">
                    <div className="dashbord-right-dialog-header">
                        <div className="close-dialog">
                            <button onClick={handleDialogClose}>
                                <CancelIcon color="#1d38e4"></CancelIcon>
                            </button>
                        </div>
                        <div className="title">Add Bank</div>
                    </div>
                    <div className="dashbord-right-dialog-inner-content">
                        <div className="form-container">
                            <div >
                                <TextField
                                    className="form-control"
                                    variant="standard"
                                    placeholder="Account number"
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </div>

                            <div className="mt-3">
                                <Select
                                    className="form-control w-100"
                                    disableUnderline
                                    displayEmpty
                                    variant='standard'
                                    value={componentData.bank}
                                    onChange={(event) => setData({ bank: event.target.value })}>
                                    <MenuItem value="" className="ui-select-menu">
                                        <em>Select bank</em>
                                    </MenuItem>
                                    <MenuItem value="demo" className="ui-select-menu">
                                        Uba
                                    </MenuItem>
                                </Select>
                            </div>
                            <div className="mt-5">
                                <button onClick={handleDialogClose} className='btn btn-radius py-3 w-100 btn-primary'>Add </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog >
    )
}

export default SettingsAddBank