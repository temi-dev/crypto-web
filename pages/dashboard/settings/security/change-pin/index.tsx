import { TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../../../../components/auth/auth-provider";
import BackButton from "../../../../../components/back-button/back-button";
import DashboardHeader from "../../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../../components/dashboard-sidebar/dashboard-sidebar";
import useCustomSnackbar from "../../../../../components/snackbar/use-custom-snackbar";
import { changeAccountPin } from "../../../../../shared/services/dashboard/settings/profile/profile.service";
import { NextApplicationPage } from "../../../../_app";
const Settings: NextApplicationPage = () => {
    const { user } = useAuth();
    const snackbar = useCustomSnackbar();

    interface IChangePinForm {
        currentPin?: string,
        newPin?: string,
    }

    interface IFormData {
        formValue: IChangePinForm,
        formSubmitted: boolean,
        processingRequest: boolean
    }


    const data: IFormData = {
        formValue: {
            currentPin: '',
            newPin: ''
        },
        formSubmitted: false,
        processingRequest: false
    }

    const [state, setState] = useState(data);

    const setFormData = (data: IChangePinForm) => {
        setState({ ...state, formValue: { ...state.formValue, ...data } })
    }

    const submit = async() => {
        setState({ ...state, formSubmitted: true });
        if(state.formValue.currentPin && state.formValue.newPin){
            setState({ ...state, processingRequest: true });
            const request = await changeAccountPin({
                new_pin: state.formValue.newPin,
                pin: state.formValue.currentPin
            })
            if (request.responseCode == 422) {
                snackbar.showError(request.data ? request.data.message : "Error occured");
            } else {
                setState(data)
                snackbar.showSuccess(request.data.message)
            }
        }
    }
    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Account Settings"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-lg-4 settings-left">


                        <DashboardSettingsSidebar></DashboardSettingsSidebar>

                    </div>
                    <div className="col-lg-8">
                        <div className="settings-container">
                            <div className="setting-page-header">Change Pin</div>

                            <div className="row settings-form">

                                <div>
                                    <label className="form-label">Current Pin</label>

                                    <TextField
                                        className={`form-control ${(!state.formValue.currentPin && state.formSubmitted ? 'error' : '')} `}
                                        type='number'
                                        variant="standard"
                                        placeholder="Current Pin"
                                        fullWidth
                                        value={state.formValue.currentPin}
                                        onChange={(e) => {
                                            setFormData({ currentPin: e.target.value })
                                        }}
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                    />
                                    {
                                        ((!state.formValue.currentPin) && state.formSubmitted) && (
                                            <div className='error-message'>Enter your curent pin</div>
                                        )
                                    }
                                </div>

                                <div>
                                    <label className="form-label">New Pin</label>

                                    <TextField
                                        className={`form-control ${(!state.formValue.newPin && state.formSubmitted ? 'error' : '')} `}
                                        variant="standard"
                                        type='number'
                                        placeholder="New Pin"
                                        fullWidth
                                        value={state.formValue.newPin}
                                        onChange={(e) => {
                                            setFormData({ newPin: e.target.value })
                                        }}
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                    />
                                    {
                                        ((!state.formValue.newPin) && state.formSubmitted) && (
                                            <div className='error-message'>Enter your new pin</div>
                                        )
                                    }
                                </div>

                            </div>
                            <div className="form-submit">
                                <BackButton></BackButton>
                                <button disabled={state.processingRequest} onClick={submit} className="btn ms-3 btn-primary btn-radius">Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
Settings.requireAuth = true;
export default Settings