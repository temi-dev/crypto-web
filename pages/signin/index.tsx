import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';
import TextField from '@mui/material/TextField';

export async function getStaticProps() {
    return { props: { blueBg: true } };
}
const Signin: NextPage = (props) => {
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='auth-form'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Sign in to Kochure</div>
                        <div className='form-content'>
                            <div className='mt-3'>
                                <label className='mb-2'>Email address*</label>
                                <input placeholder='Email address' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Password*</label>
                                <input placeholder='Password' type='text' className="form-control"></input>
                            </div>

                            <div className='mt-4'>
                                <button className='btn btn-primary'>Login Now</button>
                                <Link href='/forgot-password' >
                                    <a className='grey d-inline-block mx-3'>Forgot Password</a>
                                </Link>
                            </div>
                            <div className='mt-4'>
                                <span>Dont have an account?</span>
                                <Link href='/signup'>
                                    <a className='d-inline-block ms-2'>Create an account</a>
                                </Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
