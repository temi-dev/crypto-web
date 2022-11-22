import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface";
import { CancelIcon, CheckCircleFilledIcon } from "../../../icons/icons";
const BvnUpdate = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IFormData {
        bank?: string,
        step?: number,
    }
    const formData: IFormData = {
        bank: 'uba',
        step: 1
    }
    const [form, setForm] = React.useState({ ...formData });
    const handleSetFormData = (data: object) => {
        setForm({ ...formData, ...data });
    };
    const handleDialogClose = () => {
        handleSetFormData({ step: 1 })
        setVisibilityState({ transferDialogVisibility: false });
    };

    return (
        <Dialog fullWidth maxWidth='xs' open={open ? open : false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast">

                {
                    form.step == 1 && (
                        <div>
                            <div className="dialog-page">
                                <div className="dialog-header">
                                    <div className="title">Bvn Update</div>
                                    <div className="action-btn">
                                        <button onClick={handleDialogClose}>
                                            <CancelIcon color="#1d38e4"></CancelIcon>
                                        </button>
                                    </div>
                                </div>
                                <div className="content padding">
                                    <div >
                                        <label className="form-label">BVN Number</label>
                                        <TextField
                                            className="form-control-2"
                                            variant="standard"
                                            placeholder="BVN Number"
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />

                                    </div>

                                    <div className="mt-3">
                                        <label className="form-label">Name on BVN</label>
                                        <TextField
                                            className="form-control-2"
                                            variant="standard"
                                            placeholder="Name"
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />

                                    </div>
                                    <div className="mt-3">
                                    <label className="form-label">Select Bank</label>
                                        <Select
                                            className="form-control-select w-100"
                                            disableUnderline
                                            displayEmpty
                                            variant='standard'
                                            value={form.bank}
                                            onChange={(event) => handleSetFormData({ bank: event.target.value })}>
                                            <MenuItem value="" className="ui-select-menu">
                                                <em>Select bank</em>
                                            </MenuItem>
                                            <MenuItem value="uba" className="ui-select-menu">
                                                Uba
                                            </MenuItem>
                                        </Select>
                                    </div>
                                    <div className="mt-4 mb-4">
                                        <button onClick={() => setForm({ step: 2 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                }
                {
                    form.step == 2 && (
                        <div className="dialog-page bvn-confirmation p-4">
                            <div className="content text-center">
                                <CheckCircleFilledIcon color="white" fillColor="#1D38E4"></CheckCircleFilledIcon>
                            </div>
                            <div className="heading">Your BVN has been successfully updated</div>
                            <div className="mb-3">
                                <button onClick={handleDialogClose} className='btn btn-radius w-100 btn-primary'>Done</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </Dialog >
    )
}

export default BvnUpdate