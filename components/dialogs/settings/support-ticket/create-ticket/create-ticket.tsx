import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { IDialogs } from "../../../../../shared/interface/global.interface";
import { CancelIcon } from "../../../../icons/icons";

const SettingsCreateTicket = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IData {
        department?: string
    }

    const initData: IData = {
        department: ''
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
                        <div className="title">Open Ticket</div>
                    </div>
                    <div className="dashbord-right-dialog-inner-content">
                        <div className="form-container">
                        <div >
                                <Select
                                    className="form-control w-100"
                                    disableUnderline
                                    displayEmpty
                                    variant='standard'
                                    value={componentData.department}
                                    onChange={(event) => setData({ department: event.target.value })}>
                                    <MenuItem value="" className="ui-select-menu">
                                        <em>Select department</em>
                                    </MenuItem>
                                    <MenuItem value="demo" className="ui-select-menu">
                                        Technical
                                    </MenuItem>
                                </Select>
                            </div>
                            <div className="mt-3">
                                <TextField
                                    className="form-control"
                                    variant="standard"
                                    placeholder="Subject"
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </div>
                            <div className="mt-3">
                                <TextField
                                    className="form-control"
                                    variant="standard"
                                    placeholder="Type your message"
                                    rows={4}
                                    multiline
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </div>

                            
                            <div className="mt-4">
                                <button onClick={handleDialogClose} className='btn btn-radius py-3 w-100 btn-primary'>Send </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog >
    )
}

export default SettingsCreateTicket