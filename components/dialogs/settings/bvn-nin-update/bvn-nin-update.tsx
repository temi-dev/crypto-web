import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface";
import { verifyBvn, verifyNin } from "../../../../shared/services/dashboard/settings/profile/profile.service";
import { useAuth } from "../../../auth/auth-provider";
import { CancelIcon, CheckCircleFilledIcon } from "../../../icons/icons";
import useCustomSnackbar from "../../../snackbar/use-custom-snackbar";
const BvnNinUpdate = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    const { user, setUser } = useAuth();
    const snackbar = useCustomSnackbar();

    interface IData {
        idType?: string,
        idNumber?: string,
        step?: number,
        options?: Array<string>,
        formSubmitted?: boolean,
        processingRequest?: boolean,
    }
    const data: IData = {
        idType: '',
        step: 1,
        options: [
            'BVN',
            'NIN'
        ],
        formSubmitted: false,
        processingRequest: false
    }
    const [state, setState] = React.useState({ ...data });

    const setStateData = (data: IData) => {
        setState({ ...state, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ transferDialogVisibility: false });
    };

    const submit = async () => {
        setStateData({ formSubmitted: true });
        if (state.idType && state.idNumber) {
            if (state.idType == 'BVN') {
                setStateData({ processingRequest: true });
                const request = await verifyBvn(state.idNumber);
                if (request.responseCode == 422) {
                    snackbar.showError(request.data ? request.data.message : "Error occured")
                } else {
                    setUser({ ...user!, bvn_verified_at: new Date() })
                    handleDialogClose()
                    setStateData(data)
                }
                setStateData({ processingRequest: false, formSubmitted: false });
            }
            if (state.idType == 'NIN') {
                setStateData({ processingRequest: true });
                const request = await verifyNin(state.idNumber);
                if (request.responseCode == 422) {
                    snackbar.showError(request.data ? request.data.message : "Error occured")
                } else {
                    setUser({ ...user!, nin_verified_at: new Date() })
                    handleDialogClose()
                    setStateData(data)
                }
                setStateData({ processingRequest: false, formSubmitted: false });
            }
        }
    }

    return (
        <Dialog fullWidth maxWidth='xs' open={open ? open : false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast">

                {
                    state.step == 1 && (
                        <div>
                            <div className="dialog-page">
                                <div className="dialog-header">
                                    <div className="title">Verify BVN / NIN</div>
                                    <div className="action-btn">
                                        <button onClick={handleDialogClose}>
                                            <CancelIcon color="#1d38e4"></CancelIcon>
                                        </button>
                                    </div>
                                </div>
                                <div className="content padding">
                                    <div className="">
                                        <label className="form-label">I.D Type</label>
                                        <Select
                                            className={`form-control ${(!state.idType && state.formSubmitted ? 'error' : '')} `}
                                            disableUnderline
                                            displayEmpty
                                            variant='standard'
                                            value={state.idType || ''}
                                            onChange={(event) => setStateData({ idType: event.target.value })}>
                                            <MenuItem value="" className="ui-select-menu">
                                                <em>Select an option</em>
                                            </MenuItem>
                                            {
                                                state.options?.map(element => {
                                                    return (
                                                        <MenuItem key={element} value={element} className="ui-select-menu">
                                                            {element}
                                                        </MenuItem>
                                                    )
                                                })
                                            }
                                        </Select>
                                        {
                                            (!state.idType && state.formSubmitted &&
                                                <div className='error-message'>Select an option</div>
                                            )
                                        }
                                    </div>
                                    <div className="mt-2">
                                        <label className="form-label">I.D Number</label>
                                        <TextField
                                            className={`form-control ${(!state.idNumber && state.formSubmitted ? 'error' : '')} `}
                                            variant="standard"
                                            placeholder="I.D Number"
                                            fullWidth
                                            value={state.idNumber || ''}
                                            onChange={(e) => setStateData({ idNumber: e.target.value })}
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                        />
                                        {
                                            (!state.idNumber && state.formSubmitted &&
                                                <div className='error-message'>Enter your I.D number</div>
                                            )
                                        }
                                    </div>

                                    <div className="mt-4 mb-4">
                                        <button disabled={state.processingRequest} onClick={submit} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                }
                {
                    state.step == 2 && (
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

export default BvnNinUpdate