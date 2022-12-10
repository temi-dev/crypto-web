import type { NextPage } from 'next'
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { RemoveRedEye, Visibility, VisibilityOff } from '@mui/icons-material';
import { NextApplicationPage } from './_app';
import React from 'react';
import { signin, verifyAuthOtp } from '../shared/services/siginin/signin.service';
import useCustomSnackbar from '../components/snackbar/use-custom-snackbar';
import { useRouter } from 'next/router';

interface ISigninFormValue {
    email?: string,
    username?: string,
    password?: string
}

interface IPasswordFieldsStates {
    password?: string,
}

interface IOtpFormValue {
    otp?: string,
    _2fa?: string
}

export async function getServerSideProps() {
    return {
        props: {}
    };
}
const Signin: NextApplicationPage = (props) => {
    const snackbar = useCustomSnackbar();
    const router = useRouter();
    const initData: ISigninFormValue = {
        username: '',
        password: ''
    }

    const initPasswordFieldsStates: IPasswordFieldsStates = {
        password: 'password',
    }

    const initOtpformData: IOtpFormValue = {
        otp: '',
        _2fa: '',
    }

    let initState = {
        step: 1,
        formValue: initData,
        step1FormSubitted: false,
        passwordFieldsStates: initPasswordFieldsStates,
        otpFormValue: initOtpformData,
        otpFormSubitted: false,
        processingOtpVerificationRequest: false,
        processingLoginRequest: false,
    }
    const [state, setState] = React.useState(initState)

    const setData = (data: ISigninFormValue) => {
        setState({ ...state, formValue: { ...state.formValue, ...data } })
    }
    
    const switchPassordFieldState = (data: IPasswordFieldsStates) => {
        setState({ ...state, passwordFieldsStates: { ...state.passwordFieldsStates, ...data } })
    }

    const setOtpFormData = (data: IOtpFormValue) => {
        setState({ ...state, otpFormValue: { ...state.otpFormValue, ...data } })
    }

    const submit = async () => {
        setState({ ...state, step1FormSubitted: true })
        if (state.formValue.username && state.formValue.password) {
            setState({ ...state, processingLoginRequest: true })
            const response = await signin(state.formValue);
            if (response.responseCode == 422) {
                snackbar.showError(response.data? response.data.message : "Error occured")
                setState({ ...state, processingLoginRequest: false })
            } else {
                setState({ ...state, step: 2, formValue: { ...state.formValue, email: response.data.data } })
            }
        }
    }

    const submitOtpForm = async () => {
        setState({ ...state, otpFormSubitted: true })
        if (state.otpFormValue.otp) {
            setState({ ...state, processingOtpVerificationRequest: true })
            const request = await verifyAuthOtp(state.formValue.email!, state.otpFormValue.otp);
            if (request.responseCode == 422) {
                snackbar.showError(request.data.message)
                setState({ ...state, processingOtpVerificationRequest: false })
            } else {
                router.push('/dashboard')
            }
        }
    }

    return (
        <div className='page blue-bg'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Sign in to Kochure</div>
                        <div className='form-content'>

                            {state.step == 1 &&
                                <div>
                                    <div className='mt-3'>
                                        <label className='mb-2'>Email or Username*</label>
                                        <TextField
                                            variant="standard"
                                            className={`form-control ${(!state.formValue.username && state.step1FormSubitted ? 'error' : '')} `}
                                            placeholder='Email or Username'
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
                                            ((!state.formValue.username) && state.step1FormSubitted) && (
                                                <div className='error-message'>Username is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Password*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${(!state.formValue.password && state.step1FormSubitted ? 'error' : '')} `}
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
                                            ((!state.formValue.password) && state.step1FormSubitted) && (
                                                <div className='error-message'>Password is required</div>
                                            )
                                        }
                                    </div>

                                    <div className='mt-4'>
                                        <button type='button' disabled={state.processingLoginRequest} className='btn btn-primary' onClick={() => submit()}>Login</button>
                                        <Link href='/reset-password' >
                                            <a className='grey d-inline-block mx-3'>Forgot Password?</a>
                                        </Link>
                                    </div>
                                    <div className='mt-4'>
                                        <span>Dont have an account?</span>
                                        <Link href='/signup'>
                                            <a className=' ms-md-2'> Create an account</a>
                                        </Link>
                                    </div>
                                </div>
                            }

                            {state.step == 2 &&
                                <div className='form-content'>
                                    <div className='mt-3'>
                                        <label className='mb-2'>OTP*</label>
                                        <TextField
                                            className={`form-control ${(!state.otpFormValue.otp && state.otpFormSubitted ? 'error' : '')} `}
                                            variant="standard"
                                            placeholder='Enter OTP'
                                            fullWidth
                                            type='text'
                                            onChange={(e) => {
                                                setOtpFormData({ otp: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            ((!state.otpFormValue.otp) && state.otpFormSubitted) && (
                                                <div className='error-message'>Enter the OTP sent to your email address</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <button
                                            disabled={state.processingOtpVerificationRequest}
                                            type='button'
                                            className='btn btn-primary'
                                            onClick={() => submitOtpForm()}>Submit</button>
                                    </div>

                                </div>
                            }

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
Signin.loggedInRedirect = true;
export default Signin
