import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface";
import { createNewProfilePin } from "../../../../shared/services/dashboard/settings/profile/profile.service";
import { User } from "../../../auth/auth";
import { CancelIcon, CheckCircleFilledIcon } from "../../../icons/icons";
const ProfilePin = ({ open, setVisibilityState, user, snackbar, next }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>, user: User, snackbar: any, next?: any }) => {

    interface IFormData {
        pin?: string,
        formSubmitted?: boolean,
        submittingForm?: boolean
    }

    const formData: IFormData = {
        pin: '',
        formSubmitted: false,
        submittingForm: false
    }

    const [form, setForm] = React.useState({ ...formData });

    const handleSetFormData = (data: IFormData) => {
        setForm({ ...form, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ profilePinVisibility: false });
    };

    const createPin = async () => {
        handleSetFormData({ formSubmitted: true })
        if (form.pin) {
            handleSetFormData({ submittingForm: true })
            const request = await createNewProfilePin(form.pin);
            if (request.responseCode == 422) {
                snackbar.showError(request.data ? request.data.message : "Error occured")
                handleSetFormData({ submittingForm: false })
            } else {
                if (!next) snackbar.showSuccess(request.data.message)
                if (next) next(form.pin);
                setForm({})
                handleDialogClose()
            }
        }
    }

    const continueWithAction = async () => {
        handleSetFormData({ formSubmitted: true })
        if (form.pin) {
            if (next) next(form.pin)
            setForm({})
            handleDialogClose()
        }
    }

    return (
        <Dialog fullWidth maxWidth='xs' open={open ? open : false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast">

                <div>
                    <div className="dialog-page">
                        <div className="dialog-header">
                            {
                                !user.pin_exists && (
                                    <div className="title">Create Pin</div>
                                )
                            }
                            {
                                user.pin_exists && (
                                    <div className="title">Enter Pin</div>
                                )
                            }
                            <div className="action-btn">
                                <button onClick={handleDialogClose}>
                                    <CancelIcon color="#1d38e4"></CancelIcon>
                                </button>
                            </div>
                        </div>
                        <div className="content padding">
                            <div >
                                <TextField
                                    type='number'
                                    className={`form-control ${(!form.pin && form.formSubmitted ? 'error' : '')} `}
                                    variant="standard"
                                    placeholder="Enter Pin (6 digits)"
                                    fullWidth
                                    value={form.pin || ''}
                                    onChange={(e) => {
                                        handleSetFormData({ pin: e.target.value })
                                    }}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                                {
                                    ((!form.pin) && form.formSubmitted) && (
                                        <div className='error-message'>Enter your pin</div>
                                    )
                                }
                            </div>

                            <div className="mt-4 mb-4">
                                {
                                    !user.pin_exists && (
                                        <button disabled={form.submittingForm} onClick={() => createPin()} className='btn btn-radius w-100 btn-primary'>Create Pin</button>
                                    )
                                }
                                {
                                    user.pin_exists && (
                                        <button onClick={continueWithAction} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div >

            </div>
        </Dialog >
    )
}

export default ProfilePin