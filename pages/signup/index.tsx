import { Checkbox, MenuItem, Select, TextField } from '@mui/material';
import type { NextPage } from 'next'
import Link from 'next/link';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import { createAccount, setupPin } from '../../shared/services/signup/signup.service'

import { useRouter } from 'next/router';
import useCustomSnackbar from '../../components/snackbar/use-custom-snackbar';
import { IPasswordFieldsStates } from '../../shared/interface/global.interface';

import moment from 'moment';
import { NextApplicationPage } from '../_app';

interface ISignupFormValue {
    fname?: string
    lname?: string
    gender?: string
    dob?: string | null
    username?: string
    phone?: string
    country_code?: string
    email?: string
    password?: string
    repeatPassword?: string
    referral_code?: string
    acceptTerms?: boolean
}

interface IPinFormValue {
    pin?: string
    confirmPin?: string
}

const Signup: NextApplicationPage = (props) => {
    const snackbar = useCustomSnackbar();
    const router = useRouter();

    const initData: ISignupFormValue = {
        fname: '',
        lname: '',
        gender: '',
        dob: null,
        username: '',
        email: '',
        phone: '',
        password: '',
        repeatPassword: '',
        acceptTerms: false
    }

    const initPinformData: IPinFormValue = {
        pin: '',
        confirmPin: '',
    }

    const initPasswordFieldsStates: IPasswordFieldsStates = {
        password: 'password',
        repeatPassword: 'password',
        pin: 'password',
        confirmPin: 'password',
    }

    const initState = {
        step: 1,
        formValue: initData,
        step1FormSubitted: false,
        step2FormSubitted: false,
        pinFormSubitted: false,
        processingSignupHttpRequest: false,
        processingPinSetupHttpRequest: false,
        passwordFieldsStates: initPasswordFieldsStates,
        pinFormValue: initPinformData,
    }
    const [state, setState] = React.useState(initState);


    const setData = (data: ISignupFormValue) => {
        setState({ ...state, formValue: { ...state.formValue, ...data } })
    }

    const setPinFormData = (data: IPinFormValue) => {
        setState({ ...state, pinFormValue: { ...state.pinFormValue, ...data } })
    }

    const next = () => {
        setState({ ...state, step1FormSubitted: true })

        if (state.formValue.fname && state.formValue.lname && state.formValue.dob && state.formValue.gender) {
            setState({ ...state, step: 2 })
        }
    }

    const switchPassordFieldState = (data: IPasswordFieldsStates) => {
        setState({ ...state, passwordFieldsStates: { ...state.passwordFieldsStates, ...data } });
    }

    const submit = async () => {
        setState({ ...state, step2FormSubitted: true })
        if (state.formValue.email && state.formValue.phone && state.formValue.password && state.formValue.password == state.formValue.repeatPassword && state.formValue.username && state.formValue.acceptTerms) {
            setState({ ...state, processingSignupHttpRequest: true })
            const response = await createAccount(state.formValue);
            if (response.responseCode == 422) {
                snackbar.showError(
                    response.data.message,
                );
                setState({ ...state, processingSignupHttpRequest: false })
            } else {
                setState({ ...state, step: 3 })
                snackbar.showSuccess(
                    response.data.message
                );
            }

        }
    }

    const submitPinForm = async () => {
        setState({ ...state, pinFormSubitted: false })

        if (state.pinFormValue.pin && state.pinFormValue.confirmPin && state.pinFormValue.pin == state.pinFormValue.confirmPin) {
            setState({ ...state, processingPinSetupHttpRequest: true })
            const response = await setupPin(state.pinFormValue.pin);
            if (response.responseCode == 422) {
                snackbar.showError(
                    response.data.message
                );
                setState({ ...state, processingPinSetupHttpRequest: false })
            } else {
                router.push('/dashboard')
                snackbar.showSuccess(
                    response.data.message
                );
            }
        }
    }

    return (
        <div className='page blue-bg'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        {(state.step == 1 || state.step == 2) &&
                            <div className='headline'>Create your account</div>
                        }
                        {state.step == 3 &&
                            <div className='headline'>Setup Pin</div>
                        }
                        <div className='form-content'>
                            {state.step == 1 &&
                                <div>
                                    <div className='mt-3'>
                                        <label className='mb-2'>First name*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            placeholder='First name'
                                            value={state.formValue.fname}
                                            className={`form-control ${(!state.formValue.fname && state.step1FormSubitted ? 'error' : '')} `}
                                            fullWidth
                                            onChange={(e) => setData({ fname: e.target.value })}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            (!state.formValue.fname && state.step1FormSubitted) && (
                                                <div className='error-message'>First name is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <label className='mb-2'>Last name*</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='Last name'
                                            value={state.formValue.lname}
                                            className={`form-control ${(!state.formValue.lname && state.step1FormSubitted ? 'error' : '')} `}
                                            fullWidth
                                            onChange={(e) => setData({ lname: e.target.value })}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            (!state.formValue.lname && state.step1FormSubitted) && (
                                                <div className='error-message'>Last name is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Gender*</label>
                                        <Select disableUnderline
                                            placeholder='Gender'
                                            displayEmpty
                                            value={state.formValue.gender || ''}
                                            onChange={(e) => setData({ gender: e.target.value })}
                                            className={`form-control ${((!state.formValue.gender || state.formValue.gender == '') && state.step1FormSubitted ? 'error' : '')} `}
                                            variant='standard'
                                        >
                                            <MenuItem value=''>
                                                Select Gender
                                            </MenuItem>
                                            <MenuItem value='Male'>Male</MenuItem>
                                            <MenuItem value='Female'>Female</MenuItem>
                                        </Select>
                                        {
                                            ((!state.formValue.gender) && state.step1FormSubitted) && (
                                                <div className='error-message'>Gender is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Date of Birth*</label>
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                className={`form-control ${(!state.formValue.dob && state.step1FormSubitted ? 'error' : '')} `}
                                                inputFormat="DD/MM/YYYY"
                                                value={state.formValue.dob}
                                                onChange={(value) => setData({ dob: value! })}
                                                renderInput={
                                                    (params) =>
                                                        <TextField
                                                            variant='standard'
                                                            fullWidth
                                                            className={`form-control ${(!state.formValue.dob && state.step1FormSubitted ? 'error' : '')} `}
                                                            placeholder='DD/MM/YYYY'
                                                            {...params} />
                                                } />
                                        </LocalizationProvider>
                                        {
                                            (!state.formValue.dob && state.step1FormSubitted) && (
                                                <div className='error-message'>Date of birth is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <button type='button' onClick={next} className='btn btn-primary'>Next</button>
                                    </div>
                                </div>
                            }

                            {state.step == 2 &&
                                <div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Username*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${(!state.formValue.username && state.step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Username'
                                            fullWidth
                                            value={state.formValue.username}
                                            onChange={(e) => {
                                                setData({ username: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            ((!state.formValue.username) && state.step2FormSubitted) && (
                                                <div className='error-message'>Username is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Email address*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${(!state.formValue.email && state.step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Email address'
                                            fullWidth
                                            value={state.formValue.email}
                                            onChange={(e) => {
                                                setData({ email: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            ((!state.formValue.email) && state.step2FormSubitted) && (
                                                <div className='error-message'>Email address is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Phone Number*</label>
                                        <PhoneInput
                                            className={`form-control ${(!state.formValue.phone && state.step2FormSubitted ? 'error' : '')} `}
                                            placeholder="Enter phone number"
                                            value={state.formValue.phone}
                                            defaultCountry='NG'
                                            onChange={(value?: any) => {
                                                setData({ phone: value })
                                            }}
                                        />
                                        {
                                            ((!state.formValue.phone) && state.step2FormSubitted) && (
                                                <div className='error-message'>Phone number is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Password*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${(!state.formValue.password && state.step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Password'
                                            fullWidth
                                            type={state.passwordFieldsStates.password}
                                            value={state.formValue.password}
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
                                            ((!state.formValue.password) && state.step2FormSubitted) && (
                                                <div className='error-message'>Password is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Confirm Password*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${((!state.formValue.repeatPassword || (state.formValue.repeatPassword != state.formValue.password)) && state.step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Confirm Password'
                                            fullWidth
                                            type={state.passwordFieldsStates.repeatPassword}
                                            value={state.formValue.repeatPassword}
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
                                            ((!state.formValue.repeatPassword) && state.step2FormSubitted) && (
                                                <div className='error-message'>Re-enter your password</div>
                                            )
                                        }
                                        {
                                            ((state.formValue.repeatPassword && state.formValue.repeatPassword != state.formValue.password) && state.step2FormSubitted) && (
                                                <div className='error-message'>Password do not match</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Got referral code?</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className='form-control'
                                            placeholder='Enter referral code (optional)'
                                            fullWidth
                                            value={state.formValue.referral_code}
                                            onChange={(e) => {
                                                setData({ referral_code: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                    <div className='mt-3'>
                                        <div className='mt-2'>
                                            <Checkbox
                                                checked={state.formValue.acceptTerms}
                                                onChange={(e) => {
                                                    setData({ acceptTerms: e.target.checked })
                                                }}
                                                className={`form-input ${((!state.formValue.acceptTerms) && state.step2FormSubitted ? 'error' : '')} `} />
                                            I agree with the terms & conditions
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <button
                                            className='btn btn-primary-outline me-3'
                                            onClick={() => setState({ ...state, step: 1 })}>Back</button>
                                        <button disabled={state.processingSignupHttpRequest} type='button' className='btn btn-primary' onClick={() => submit()}>Sign Up</button>
                                    </div>
                                </div>
                            }

                            {state.step == 3 &&
                                <div className='form-content'>
                                    <div className='mt-3'>
                                        <label className='mb-2'>PIN*</label>
                                        <TextField
                                            className={`form-control ${(!state.pinFormValue.pin && state.pinFormSubitted ? 'error' : '')} `}
                                            variant="standard"
                                            placeholder='Pin'
                                            fullWidth
                                            type={state.passwordFieldsStates.pin}
                                            onChange={(e) => {
                                                setPinFormData({ pin: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {
                                                            state.passwordFieldsStates.pin == 'password' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ pin: 'text' })}>
                                                                    <Visibility className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                        {
                                                            state.passwordFieldsStates.pin == 'text' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ pin: 'password' })}>
                                                                    <VisibilityOff className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {
                                            ((!state.pinFormValue.pin) && state.pinFormSubitted) && (
                                                <div className='error-message'>Enter your pin</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>PIN Confirmation*</label>
                                        <TextField
                                            variant="standard"
                                            placeholder='Confirm Pin'
                                            fullWidth
                                            className={`form-control ${((!state.pinFormValue.confirmPin || (state.pinFormValue.confirmPin != state.pinFormValue.pin)) && state.pinFormSubitted ? 'error' : '')} `}
                                            type={state.passwordFieldsStates.confirmPin}
                                            onChange={(e) => {
                                                setPinFormData({ confirmPin: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {
                                                            state.passwordFieldsStates.confirmPin == 'password' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ confirmPin: 'text' })}>
                                                                    <Visibility className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                        {
                                                            state.passwordFieldsStates.confirmPin == 'text' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ confirmPin: 'password' })}>
                                                                    <VisibilityOff className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        {
                                            ((!state.pinFormValue.confirmPin) && state.pinFormSubitted) && (
                                                <div className='error-message'>Re-enter your pin</div>
                                            )
                                        }
                                        {
                                            ((state.pinFormValue.confirmPin && state.pinFormValue.confirmPin != state.pinFormValue.pin) && state.pinFormSubitted) && (
                                                <div className='error-message'>Pin do not match</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <button
                                            disabled={state.processingPinSetupHttpRequest}
                                            type='button'
                                            className='btn btn-primary'
                                            onClick={() => submitPinForm()}>Create Pin</button>
                                    </div>

                                </div>
                            }

                            {(state.step == 1 || state.step == 2) &&
                                <div className='mt-4'>
                                    <span>Already have an account?</span> <Link href='/'>Sign in now</Link>
                                </div>
                            }

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
Signup.loggedInRedirect = true
export default Signup
