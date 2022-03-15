import { MenuItem, Select, TextField, TextFieldProps } from '@mui/material';
import type { NextPage } from 'next'
import Link from 'next/link';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import React from 'react';

export async function getStaticProps() {
    return {
        props: { blueBg: true }
    };
}

const Signup: NextPage = (props) => {
    const [value, setValue] = React.useState(null);
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='auth-form'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Create your account</div>
                        <div className='form-content'>
                            <div className='mt-3'>
                                <label className='mb-2'>First name*</label>
                                <input placeholder='First name' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-3'>
                                <label className='mb-2'>Last name*</label>
                                <input placeholder='First name' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Gender*</label>
                                <Select disableUnderline
                                    placeholder='Gender' displayEmpty
                                    id="demo-simple-select" className='form-control' variant='standard'
                                >
                                    <MenuItem >
                                        Select Gender
                                    </MenuItem>
                                    <MenuItem value='Male'>Male</MenuItem>
                                    <MenuItem value='Female'>Female</MenuItem>
                                </Select>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Date of Birth*</label>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker InputProps={{
                                        disableUnderline: true,
                                    }}
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) =>
                                            <TextField variant='standard' className='form-control' fullWidth placeholder='Date of birth (DD/MM/YYY)' {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                            {/* <div className='mt-4'>
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
                            </div> */}
                            <div className='mt-4'>
                                <button className='btn btn-primary'>Next</button>
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
