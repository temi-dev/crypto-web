import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
    return { props: { blueBg: true } };
}
const Signup: NextPage = (props) => {
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='auth-form'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Create your account</div>
                        <div className='form-content'>
                            <div className='mt-3'>
                                <label className='mb-2'>Your name*</label>
                                <input placeholder='Fullname' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Email address*</label>
                                <input placeholder='Email address' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Confirm Email*</label>
                                <input placeholder='Confirm Email' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Password*</label>
                                <input placeholder='Password' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Confirm Password*</label>
                                <input placeholder='Confirm Password' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Got referral code?</label>
                                <input placeholder='Enter referral code (optional)' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <h6>Terms & Conditions</h6>
                                <div><input type='checkbox'></input> I agree with the terms & conditions</div>
                            </div>
                            <div className='mt-4'>
                                <button className='btn btn-primary'>Create your Account</button>
                            </div>
                            <div className='mt-4'>
                                <span>Already have an account?</span> <Link href='/signin'>Sign in now</Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
