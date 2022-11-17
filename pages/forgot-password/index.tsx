import type { NextPage } from 'next';
import Link from 'next/link';
import { NextApplicationPage } from '../_app';

export async function getStaticProps() {
    return { props: {  } };
}
const ForgotPassword: NextApplicationPage = (props) => {
    return (
        <div className='page blue-bg'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Reset Password</div>
                        <div className='form-content'>
                            <div className='py-2'>
                                <label className='mb-2'>Email address*</label>
                                <input placeholder='Email address' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <button className='btn btn-primary w-100'>Send Reset Link</button>
                            </div>
                            <div className='mt-4'>
                                <span>Remember the password?</span> <Link href='/signin'><a className='d-block d-md-inline-block ms-md-2'>Sign in now</a></Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
ForgotPassword.loggedInRedirect = true;
export default ForgotPassword
