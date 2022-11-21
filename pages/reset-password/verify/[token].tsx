import React, { useEffect } from 'react';
import { CheckCircleFilledIcon, ShieldCircleFilledIcon } from '../../../components/icons/icons';
import { NextApplicationPage } from '../../_app';
import { useRouter } from 'next/router'
import { resetPassword, verifyResetToken } from '../../../shared/services/reset-password/reset-password.service';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { IPasswordFieldsStates } from '../../../shared/interface/global.interface';
import useCustomSnackbar from '../../../components/snackbar/use-custom-snackbar';


const VerifyResetPassordPin: NextApplicationPage = () => {
    const router = useRouter();
    const snackbar = useCustomSnackbar();

    const token = router.query.token;
    const formValue = {
        password: '',
        repeatPassword: ''
    }
    const passwordFieldsStates: IPasswordFieldsStates = {
        password: 'password',
        repeatPassword: 'password'
    }

    let initState = {
        formValue,
        verifying: true,
        step: 1,
        verificationFailed: false,
        formSubmitted: false,
        passwordFieldsStates,
        processingHttpRequest: false
    }
    const [state, setState] = React.useState(initState);

    const verifyToken = async () => {
        setState({ ...state, verifying: true })
        if (token) {
            const verification = await verifyResetToken(token.toString());
            if (verification.responseCode == 422) {
                setState({ ...state, verificationFailed: true, verifying: false })
            } else {
                setState({ ...state, verifying: false, step: 2 })

            }
        } else {
            return {
                notFound: true
            }
        }
    }

    const switchPassordFieldState = (data: IPasswordFieldsStates) => {
        setState({ ...state, passwordFieldsStates: { ...state.passwordFieldsStates, ...data } })
    }
    
    const setData = (data: IPasswordFieldsStates) => {
        setState({ ...state, formValue: { ...state.formValue, ...data } })
    }

    const submit = async() =>{
        setState({ ...state, formSubmitted: true })
        if(state.formValue.password && state.formValue.password == state.formValue.repeatPassword  && token){
            setState({ ...state, processingHttpRequest: true }) ;
            const request = await resetPassword(token.toString(), state.formValue.password)
            if(request.responseCode == 422){
                snackbar.showError(request.data.message)
                setState({ ...state, processingHttpRequest: false }) ;
            }else{
                setState({ ...state, step: 3 }) ;
            }
        }
    }

    useEffect(() => {
        verifyToken()
    }, [router.isReady])

    return (
        <div className='page blue-bg'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>

                    <form className=' bg-white password-reset'>
                        {
                            state.step == 1 &&
                            <div className='text-center'>
                                <ShieldCircleFilledIcon color="white" fillColor="#1D38E4" />
                            </div>
                        }
                        {
                            state.step == 3 &&
                            <div className='text-center'>
                                <CheckCircleFilledIcon color="white" fillColor="#1D38E4" />
                            </div>
                        }
                        {
                            state.verifying &&
                            <div className='headline mb-4 text-center'>Verifying identity...</div>
                        }
                        {
                            state.verificationFailed && !state.verifying &&
                            <div className='headline mb-4 text-center'>Verification failed.</div>
                        }
                        {
                            state.step == 3 &&
                            <div className='headline mb-4 text-center'>Password changed!</div>
                        }
                        {state.step == 2 && !state.verifying &&
                            <div>
                                <div className='headline'>Change Password</div>
                                <div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Password*</label>
                                        <TextField
                                            variant="standard"
                                            className={`form-control ${(!state.formValue.password && state.formSubmitted ? 'error' : '')} `}
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
                                            ((!state.formValue.password) && state.formSubmitted) && (
                                                <div className='error-message'>Password is required</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Confirm Password*</label>
                                        <TextField
                                            variant="standard"
                                            className={`form-control ${((!state.formValue.repeatPassword || (state.formValue.repeatPassword != state.formValue.password)) && state.formSubmitted ? 'error' : '')} `}
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
                                            ((!state.formValue.repeatPassword) && state.formSubmitted) && (
                                                <div className='error-message'>Re-enter your password</div>
                                            )
                                        }
                                        {
                                            ((state.formValue.repeatPassword && state.formValue.repeatPassword != state.formValue.password) && state.formSubmitted) && (
                                                <div className='error-message'>Password do not match</div>
                                            )
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <button disabled={state.processingHttpRequest} type='button' className='btn btn-primary' onClick={() => submit()}>Change password</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
VerifyResetPassordPin.loggedInRedirect = true;
export default VerifyResetPassordPin
