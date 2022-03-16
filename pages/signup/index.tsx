import { MenuItem, Select, TextField } from '@mui/material';
import type { NextPage } from 'next'
import Link from 'next/link';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { RemoveRedEye } from '@mui/icons-material';

export async function getStaticProps() {
    return {
        props: { blue: "true" }
    };
}

const Signup: NextPage = (props) => {
    const [value, setValue] = React.useState(null);
    const [step, setStep] = React.useState(1);
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='auth-form'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Create your account</div>
                        <div className='form-content'>
                            {step == 1 &&
                                <>
                                    <div className='mt-3'>
                                        <label className='mb-2'>First name*</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='First name'
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                    <div className='mt-3'>
                                        <label className='mb-2'>Last name*</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='Last name'
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Gender*</label>
                                        <Select disableUnderline
                                            placeholder='Gender' displayEmpty
                                            id="demo-simple-select" className='form-control' variant='standard'
                                        >
                                            <MenuItem>
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
                                                renderInput={(params) => <TextField variant='standard' fullWidth placeholder='Date of birth (DD/MM/YYY)' {...params} />} />
                                        </LocalizationProvider>
                                    </div>
                                    <div className='mt-4'>
                                        <button onClick={() => setStep(2)} className='btn btn-primary'>Next</button>
                                    </div>
                                </>
                            }

                            {step == 2 &&
                                <>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Email address*</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='Email address'
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                    <div className='mt-4'>
                                        <label className='mb-2'>Phone Number*</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='+234'
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
                                        <label className='mb-2'>Confirm Password*</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='Confirm Password'
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
                                        <label className='mb-2'>Got referral code?</label>
                                        <TextField
                                            {...props} variant="standard"
                                            placeholder='Enter referral code (optional)'
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                    <div className='mt-5'>
                                        <h6>Terms & Conditions</h6>
                                        <div className='mt-2'><input type='checkbox'></input> I agree with the terms & conditions</div>
                                    </div>
                                    <div className='mt-4'>
                                        <Link href='/onboarding/set-pin'>
                                            <button className='btn btn-primary'>Sign Up</button>
                                        </Link>

                                    </div>
                                </>
                            }

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
