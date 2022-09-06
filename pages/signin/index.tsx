import type { NextPage } from 'next'
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { RemoveRedEye } from '@mui/icons-material';

export async function getStaticProps() {
    return {
        props: { blue: "true" }
    };
}
const Signin: NextPage = (props) => {
    return (
        <div className='page'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Sign in to Kochure</div>
                        <div className='form-content'>
                            <div className='mt-3'>
                                <label className='mb-2'>Email address*</label>
                                <TextField
                                    {...props} variant="standard"
                                    className='form-control'
                                    placeholder='Email address'
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Password*</label>
                                <TextField
                                    {...props} variant="standard"
                                    className='form-control'    
                                    placeholder='Password'
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton edge="end" >
                                                    <RemoveRedEye className='grey-icon' />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
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
                                    <a className='d-block d-md-inline-block ms-md-2'>Create an account</a>
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
