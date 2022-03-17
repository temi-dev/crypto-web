import type { NextPage } from 'next'
import Link from 'next/link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { RemoveRedEye } from '@mui/icons-material';
import { TextField } from '@mui/material';

export async function getStaticProps() {
    return { props: { blue: "true" } };
}
const SetPin: NextPage = (props) => {
    return (
        <div className='page'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Set your Pin</div>
                        <div className='form-content'>
                            <div className='mt-3'>
                                <label className='mb-2'>PIN*</label>
                                <TextField
                                    {...props} variant="standard"
                                    placeholder='Pin'
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
                                <label className='mb-2'>PIN Confirmation*</label>
                                <TextField
                                    {...props} variant="standard"
                                    placeholder='Confirm Pin'
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
                            <div className='mt-5'>
                                <Link href='/onboarding/verify-email'>
                                    <button className='btn btn-primary w-100'>Continue</button>
                                </Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SetPin
