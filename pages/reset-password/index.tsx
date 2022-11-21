import Link from 'next/link';
import React from 'react';
import { CheckCircleFilledIcon } from '../../components/icons/icons';
import { sendResetLink } from '../../shared/services/reset-password/reset-password.service';
import { NextApplicationPage } from '../_app';


const ForgotPassword: NextApplicationPage = (props) => {
    let initState = {
        email: '',
        formSubmitted: false,
        step: 1,
        processingRequest: false
    }
    const [state, setState] = React.useState(initState);

    const submit = async () => {
        setState({ ...state, formSubmitted: true })
        if (state.email) {
            setState({ ...state, processingRequest: true })
            await sendResetLink(state.email)
            setState({ ...state, step: 2 })
        }
    }
    return (
        <div className='page blue-bg'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>

                    {state.step == 1 &&
                        <form>
                            <div className='headline'>Reset Password</div>
                            <div className='form-content'>
                                <div className='py-2'>
                                    <label className='mb-2'>Email address*</label>
                                    <input
                                        placeholder='Email address'
                                        value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })}
                                        type='text'
                                        className={`form-control ${(!state.email && state.formSubmitted ? 'error' : '')} `}></input>
                                    {
                                        (!state.email && state.formSubmitted) && (
                                            <div className='error-message'>Enter your email address</div>
                                        )
                                    }
                                </div>
                                <div className='mt-4'>
                                    <button
                                        disabled={state.processingRequest}
                                        className='btn btn-primary w-100'
                                        type='button'
                                        onClick={() => submit()}>Send Reset Link</button>
                                </div>

                            </div>
                        </form>
                    }
                    {state.step == 2 &&
                        <div className='text-center bg-white password-reset'>
                            <div>
                                <CheckCircleFilledIcon color="white" fillColor="#1D38E4"></CheckCircleFilledIcon>
                            </div>
                            <div className='headline'>Reset Email Sent!</div>
                            <div className='heading-note mt-2 mb-5'>We have successfully sent you a password reset email.</div>
                                
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
ForgotPassword.loggedInRedirect = true;
export default ForgotPassword
