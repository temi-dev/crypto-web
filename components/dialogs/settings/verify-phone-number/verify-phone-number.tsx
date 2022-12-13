import { Dialog, TextField } from "@mui/material"
import React from "react";
import { IDialogs } from "../../../../shared/interface/global.interface";
import { confirmPhoneNumberVerificationCode } from "../../../../shared/services/dashboard/settings/profile/profile.service";
import { useAuth } from "../../../auth/auth-provider";
import { CancelIcon } from "../../../icons/icons";
import useCustomSnackbar from "../../../snackbar/use-custom-snackbar";
const VerifyPhoneNumber = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>}) => {

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

    const snackbar = useCustomSnackbar();
    const {user} = useAuth()
    const [form, setForm] = React.useState({ ...formData });

    const handleSetFormData = (data: IFormData) => {
        setForm({ ...form, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ verifyPhoneNumberDialogVisibility: false });
    };



    const continueWithAction = async () => {
        handleSetFormData({ formSubmitted: true })
        if (form.pin) {
            handleSetFormData({ submittingForm: true })
            const request = await confirmPhoneNumberVerificationCode(form.pin, user!.phone);
            if (request.responseCode == 422) {
                snackbar.showError(request.data ? request.data.message : "Error occured")
                handleSetFormData({ submittingForm: false })
            } else {
                snackbar.showSuccess(request.data.message)
                setForm({})
                handleDialogClose()
            }
        }
    }

    return (
        <Dialog fullWidth maxWidth='xs' open={open ? open : false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast">

                <div>
                    <div className="dialog-page">
                        <div className="dialog-header">
                            <div className="title">Enter Verification Code</div>

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
                                    placeholder="Enter code"
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
                                        <div className='error-message'>Enter the verification code sent to your phone</div>
                                    )
                                }
                            </div>

                            <div className="mt-4 mb-4">
                                <button disabled={form.submittingForm} onClick={continueWithAction} className='btn btn-radius w-100 btn-primary'>Continue</button>

                            </div>
                        </div>
                    </div>
                </div >

            </div>
        </Dialog >
    )
}

export default VerifyPhoneNumber