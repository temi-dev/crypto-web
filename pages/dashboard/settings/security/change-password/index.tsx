import { RemoveRedEye, Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { useAuth } from "../../../../../components/auth/auth-provider";
import BackButton from "../../../../../components/back-button/back-button";
import DashboardHeader from "../../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../../components/dashboard-sidebar/dashboard-sidebar";
import ProfilePin from "../../../../../components/dialogs/settings/profile-pin/profile-pin";
import useCustomSnackbar from "../../../../../components/snackbar/use-custom-snackbar";
import { IDialogs, IPasswordFieldsStates } from "../../../../../shared/interface/global.interface";
import { changeAccountPassword } from "../../../../../shared/services/dashboard/settings/profile/profile.service";
import { NextApplicationPage } from "../../../../_app";
const Settings: NextApplicationPage = () => {
    const { user, setUser } = useAuth();
    const snackbar = useCustomSnackbar();

    interface IChangePasswordForm {
        password?: string,
        repeatPassword?: string
    }

    interface IFormData {
        formValue: IChangePasswordForm,
        passwordFieldsStates: IPasswordFieldsStates,
        formSubmitted: boolean,
        processingRequest: boolean
    }

    const initPasswordFieldsStates: IPasswordFieldsStates = {
        password: 'password',
        repeatPassword: 'password',
    }

    const formData: IFormData = {
        formValue: {
            password: '',
            repeatPassword: '',
        },
        passwordFieldsStates: initPasswordFieldsStates,
        formSubmitted: false,
        processingRequest: false
    }

    const [state, setState] = useState(formData);

    const setData = (data: IChangePasswordForm) => {
        setState({ ...state, formValue: { ...state.formValue, ...data } })
    }

    const switchPassordFieldState = (data: IPasswordFieldsStates) => {
        setState({ ...state, passwordFieldsStates: { ...state.passwordFieldsStates, ...data } });
    }

    const DialogsVisibilityInitState: IDialogs = {
        profilePinVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const changePassword = async (pin: number) => {
        setState({ ...state, processingRequest: true })
        const request = await changeAccountPassword({ pin, password: state.formValue.password })
        if (request.responseCode == 422) {
            setState({ ...state, processingRequest: false })
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            setState(formData)
            setUser({...user!, pin_exists: false })
            snackbar.showSuccess(request.data.message)
        }
    }

    const openPin = () => {
        setState({ ...state, formSubmitted: true });
        if (state.formValue.password && state.formValue.repeatPassword && state.formValue.password == state.formValue.repeatPassword) {
            setDialogVisibilityState({ profilePinVisibility: true })
        }
    }
    return (
        <div className="dashboard">
            <DashboardSidebar ></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Account Settings"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-lg-4 settings-left">
                        <DashboardSettingsSidebar></DashboardSettingsSidebar>
                    </div>
                    <div className="col-lg-8">
                        <div className="settings-container">
                            <div className="setting-page-header">Change Password</div>

                            <div className="row settings-form">

                                <div className='mt-4'>
                                    <label className="form-label">New Password*</label>
                                    <TextField
                                        variant="standard"
                                        className={`form-control ${(!state.formValue.password && state.formSubmitted ? 'error' : '')} `}
                                        placeholder='Password'
                                        fullWidth
                                        name="password"
                                        type={state.passwordFieldsStates.password}
                                        value={state.formValue.password || ''}
                                        onChange={(e) => {
                                            setData({ password: e.target.value })
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {
                                                        state.passwordFieldsStates.password == 'password' && (
                                                            <IconButton edge="end" onClick={() => switchPassordFieldState({ password: 'text' })}>
                                                                <Visibility className='grey-icon' />
                                                            </IconButton>
                                                        )
                                                    }
                                                    {
                                                        state.passwordFieldsStates.password == 'text' && (
                                                            <IconButton edge="end" onClick={() => switchPassordFieldState({ password: 'password' })}>
                                                                <VisibilityOff className='grey-icon' />
                                                            </IconButton>
                                                        )
                                                    }
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {
                                        ((!state.formValue.password) && state.formSubmitted) && (
                                            <div className='error-message'>Enter your new password</div>
                                        )
                                    }
                                </div>
                                <div className='mt-4'>
                                    <label className="form-label">Confirm New Password*</label>
                                    <TextField
                                        variant="standard"
                                        name="confirmPassword"
                                        className={`form-control ${((!state.formValue.repeatPassword || (state.formValue.repeatPassword != state.formValue.password)) && state.formSubmitted ? 'error' : '')} `}
                                        placeholder='Confirm Password'
                                        fullWidth
                                        type={state.passwordFieldsStates.repeatPassword}
                                        value={state.formValue.repeatPassword || ''}
                                        onChange={(e) => {
                                            setData({ repeatPassword: e.target.value })
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {
                                                        state.passwordFieldsStates.repeatPassword == 'password' && (
                                                            <IconButton edge="end" onClick={() => switchPassordFieldState({ repeatPassword: 'text' })}>
                                                                <Visibility className='grey-icon' />
                                                            </IconButton>
                                                        )
                                                    }
                                                    {
                                                        state.passwordFieldsStates.repeatPassword == 'text' && (
                                                            <IconButton edge="end" onClick={() => switchPassordFieldState({ repeatPassword: 'password' })}>
                                                                <VisibilityOff className='grey-icon' />
                                                            </IconButton>
                                                        )
                                                    }
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                    {
                                        ((!state.formValue.repeatPassword) && state.formSubmitted) && (
                                            <div className='error-message'>Re-enter your new password</div>
                                        )
                                    }
                                    {
                                        ((state.formValue.repeatPassword && state.formValue.repeatPassword != state.formValue.password) && state.formSubmitted) && (
                                            <div className='error-message'>Password do not match</div>
                                        )
                                    }
                                </div>

                            </div>
                            <div className="form-submit">
                                <BackButton></BackButton>
                                <button disabled={state.processingRequest} onClick={openPin} className="btn ms-3 btn-primary btn-radius" >Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <ProfilePin user={user!} open={dialogsVisibilityState.profilePinVisibility!} setVisibilityState={setDialogVisibilityState} snackbar={snackbar} next={changePassword}></ProfilePin>
        </div>
    )
}
Settings.requireAuth = true
export default Settings