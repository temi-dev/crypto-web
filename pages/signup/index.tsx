import { Checkbox, MenuItem, Select, TextField } from '@mui/material';
import type { NextPage } from 'next'
import Link from 'next/link';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
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



export async function getStaticProps() {
    return {
        props: {  }
    };
}

const Signup: NextPage = (props) => {
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
    const [formValue, setFormValue] = React.useState(initData);
    const [pinFormValue, setPinFormValue] = React.useState(initPinformData);

    const [step, setStep] = React.useState(1);
    const [step1FormSubitted, setStep1FormSubitted] = React.useState(false);
    const [step2FormSubitted, setStep2FormSubitted] = React.useState(false);
    const [pinFormSubitted, setPinFormSubitted] = React.useState(false);
    const [passwordFieldsStates, setPasswordFieldsStates] = React.useState(initPasswordFieldsStates);
    const [processingSignupHttpRequest, setProcessingSignupHttpRequest] = React.useState(false);
    const [processingPinSetupHttpRequest, setProcessingPinSetupHttpRequest] = React.useState(false);

    const setData = (data: ISignupFormValue) => {
        setFormValue({ ...formValue, ...data })
    }

    const setPinFormData = (data: IPinFormValue) => {
        setPinFormValue({ ...pinFormValue, ...data })
    }

    const next = () => {
        setStep1FormSubitted(true);
        if (formValue.fname && formValue.lname && formValue.dob && formValue.gender) {
            setStep(2)
        }
    }

    const switchPassordFieldState = (data: IPasswordFieldsStates) => {
        setPasswordFieldsStates({ ...passwordFieldsStates, ...data })
    }

    const submit = async () => {
        setStep2FormSubitted(true);
        if (formValue.email && formValue.phone && formValue.password && formValue.password == formValue.repeatPassword && formValue.username && formValue.acceptTerms) {
            setProcessingSignupHttpRequest(true)
            const response = await createAccount(formValue);
            if (response.responseCode == 422) {
                snackbar.showError(
                    response.data.message,
                );
                setProcessingSignupHttpRequest(false)
            } else {
                setStep(3)
                snackbar.showSuccess(
                    response.data.message
                );
            }

        }
    }

    const submitPinForm = async () => {
        setPinFormSubitted(true);
        if (pinFormValue.pin && pinFormValue.confirmPin && pinFormValue.pin == pinFormValue.confirmPin) {
            setProcessingPinSetupHttpRequest(true)
            const response = await setupPin(pinFormValue.pin);
            if (response.responseCode == 422) {
                snackbar.showError(
                    response.data.message
                );
                setProcessingPinSetupHttpRequest(false)
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
                        {step == 1 || step == 2 &&
                            <div className='headline'>Create your account</div>
                        }
                        {step == 3 &&
                            <div className='headline'>Setup Pin</div>
                        }
                        <div className='form-content'>
                            {step == 1 &&
                                <div>
                                    <div className='mt-3'>
                                        <label className='mb-2'>First name*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            placeholder='First name'
                                            value={formValue.fname}
                                            className={`form-control ${(!formValue.fname && step1FormSubitted ? 'error' : '')} `}
                                            fullWidth
                                            onChange={(e) => setData({ fname: e.target.value })}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            (!formValue.fname && step1FormSubitted) && (
                                                <div className='error-message'>First name is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-3'>
                                        <label className='mb-2'>Last name*</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='Last name'
                                            value={formValue.lname}
                                            className={`form-control ${(!formValue.lname && step1FormSubitted ? 'error' : '')} `}
                                            fullWidth
                                            onChange={(e) => setData({ lname: e.target.value })}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            (!formValue.lname && step1FormSubitted) && (
                                                <div className='error-message'>Last name is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Gender*</label>
                                        <Select disableUnderline
                                            placeholder='Gender'
                                            displayEmpty
                                            value={formValue.gender || ''}
                                            onChange={(e) => setData({ gender: e.target.value })}
                                            className={`form-control ${((!formValue.gender || formValue.gender == '') && step1FormSubitted ? 'error' : '')} `}
                                            variant='standard'
                                        >
                                            <MenuItem value=''>
                                                Select Gender
                                            </MenuItem>
                                            <MenuItem value='Male'>Male</MenuItem>
                                            <MenuItem value='Female'>Female</MenuItem>
                                        </Select>
                                        {
                                            ((!formValue.gender) && step1FormSubitted) && (
                                                <div className='error-message'>Gender is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Date of Birth*</label>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                value={formValue.dob}
                                                onChange={(value) => setData({ dob: value! })}
                                                renderInput={
                                                    (params) =>
                                                        <TextField
                                                            variant='standard'
                                                            fullWidth
                                                            className={`form-control ${(!formValue.dob && step1FormSubitted ? 'error' : '')} `}
                                                            placeholder='DD/MM/YYY'
                                                            {...params} />
                                                } />
                                        </LocalizationProvider>
                                        {
                                            (!formValue.dob && step1FormSubitted) && (
                                                <div className='error-message'>Date of is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <button type='button' onClick={next} className='btn btn-primary'>Next</button>
                                    </div>
                                </div>
                            }

                            {step == 2 &&
                                <div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Username*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${(!formValue.username && step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Username'
                                            fullWidth
                                            value={formValue.username}
                                            onChange={(e) => {
                                                setData({ username: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            ((!formValue.username) && step2FormSubitted) && (
                                                <div className='error-message'>Username is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Email address*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${(!formValue.email && step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Email address'
                                            fullWidth
                                            value={formValue.email}
                                            onChange={(e) => {
                                                setData({ email: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                        {
                                            ((!formValue.email) && step2FormSubitted) && (
                                                <div className='error-message'>Email address is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Phone Number*</label>
                                        <PhoneInput
                                            className={`form-control ${(!formValue.phone && step2FormSubitted ? 'error' : '')} `}
                                            placeholder="Enter phone number"
                                            value={formValue.phone}
                                            defaultCountry='NG'
                                            onChange={(value?: any) => {
                                                setData({ phone: value })
                                            }}
                                        />
                                        {
                                            ((!formValue.phone) && step2FormSubitted) && (
                                                <div className='error-message'>Phone number is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Password*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${(!formValue.password && step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Password'
                                            fullWidth
                                            type={passwordFieldsStates.password}
                                            value={formValue.password}
                                            onChange={(e) => {
                                                setData({ password: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {
                                                            passwordFieldsStates.password == 'password' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ password: 'text' })}>
                                                                    <Visibility className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                        {
                                                            passwordFieldsStates.password == 'text' && (
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
                                            ((!formValue.password) && step2FormSubitted) && (
                                                <div className='error-message'>Password is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Confirm Password*</label>
                                        <TextField
                                            {...props}
                                            variant="standard"
                                            className={`form-control ${((!formValue.repeatPassword || (formValue.repeatPassword != formValue.password)) && step2FormSubitted ? 'error' : '')} `}
                                            placeholder='Confirm Password'
                                            fullWidth
                                            type={passwordFieldsStates.repeatPassword}
                                            value={formValue.repeatPassword}
                                            onChange={(e) => {
                                                setData({ repeatPassword: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {
                                                            passwordFieldsStates.repeatPassword == 'password' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ repeatPassword: 'text' })}>
                                                                    <Visibility className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                        {
                                                            passwordFieldsStates.repeatPassword == 'text' && (
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
                                            ((!formValue.repeatPassword) && step2FormSubitted) && (
                                                <div className='error-message'>Re-enter your password</div>
                                            )
                                        }
                                        {
                                            ((formValue.repeatPassword && formValue.repeatPassword != formValue.password) && step2FormSubitted) && (
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
                                            value={formValue.referral_code}
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
                                                checked={formValue.acceptTerms}
                                                onChange={(e) => {
                                                    setData({ acceptTerms: e.target.checked })
                                                }}
                                                className={`form-input ${((!formValue.acceptTerms) && step2FormSubitted ? 'error' : '')} `} />
                                            I agree with the terms & conditions
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <button className='btn btn-primary-outline me-3' onClick={() => setStep(1)}>Back</button>
                                        <button disabled={processingSignupHttpRequest} type='button' className='btn btn-primary' onClick={() => submit()}>Sign Up</button>
                                    </div>
                                </div>
                            }

                            {step == 3 &&
                                <div className='form-content'>
                                    <div className='mt-3'>
                                        <label className='mb-2'>PIN*</label>
                                        <TextField
                                            className={`form-control ${(!pinFormValue.pin && pinFormSubitted ? 'error' : '')} `}
                                            variant="standard"
                                            placeholder='Pin'
                                            fullWidth
                                            type={passwordFieldsStates.pin}
                                            onChange={(e) => {
                                                setPinFormData({ pin: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {
                                                            passwordFieldsStates.pin == 'password' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ pin: 'text' })}>
                                                                    <Visibility className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                        {
                                                            passwordFieldsStates.pin == 'text' && (
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
                                            ((!pinFormValue.pin) && pinFormSubitted) && (
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
                                            className={`form-control ${((!pinFormValue.confirmPin || (pinFormValue.confirmPin != pinFormValue.pin)) && pinFormSubitted ? 'error' : '')} `}
                                            type={passwordFieldsStates.confirmPin}
                                            onChange={(e) => {
                                                setPinFormData({ confirmPin: e.target.value })
                                            }}
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {
                                                            passwordFieldsStates.confirmPin == 'password' && (
                                                                <IconButton edge="end" onClick={() => switchPassordFieldState({ confirmPin: 'text' })}>
                                                                    <Visibility className='grey-icon' />
                                                                </IconButton>
                                                            )
                                                        }
                                                        {
                                                            passwordFieldsStates.confirmPin == 'text' && (
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
                                            ((!pinFormValue.confirmPin) && pinFormSubitted) && (
                                                <div className='error-message'>Re-enter your pin</div>
                                            )
                                        }
                                        {
                                            ((pinFormValue.confirmPin && pinFormValue.confirmPin != pinFormValue.pin) && pinFormSubitted) && (
                                                <div className='error-message'>Pin do not match</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <button
                                            disabled={processingPinSetupHttpRequest}
                                            type='button'
                                            className='btn btn-primary'
                                            onClick={() => submitPinForm()}>Create Pin</button>
                                    </div>

                                </div>
                            }

                            {step == 1 || step == 2 &&
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

export default Signup
