import React, { useEffect } from 'react';
import { NextApplicationPage } from '../../_app';
import { useRouter } from 'next/router';
import { verifyEmailAddress } from '../../../shared/services/signup/signup.service';


const VerifyEmailAddress: NextApplicationPage = () => {
    const router = useRouter();

    const token = router.query.token;

    let initState = {
        verifying: true,
        step: 1,
        verificationFailed: false,
        verified: true
    }
    const [state, setState] = React.useState(initState);

    const verifyToken = async () => {
        setState({ ...state, verifying: true })
        if (token) {
            const verification = await verifyEmailAddress(token.toString());
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


    useEffect(() => {
        verifyToken()
    }, [router.isReady])

    return (
        <div className='page blue-bg'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>

                    <form className=' bg-white password-reset'>

                        <div className='text-center mb-3'>
                            <img src='/icons/verify-email.svg' width='80' className="d-block mx-auto"></img>

                        </div>

                        {
                            state.verifying &&
                            <div className='headline mb-4 text-center'>Verifying email...</div>
                        }
                        {
                            state.verificationFailed && !state.verifying &&
                            <div className='headline mb-4 text-center'>Verification failed.</div>
                        }
                        {
                            state.step == 2 &&
                            <div className='headline mb-4 text-center'>Email Verified!</div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}
export default VerifyEmailAddress
