import type { NextPage } from 'next'
import Link from 'next/link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { RemoveRedEye, CreditCard } from '@mui/icons-material';
import { TextField } from '@mui/material';

export async function getStaticProps() {
    return { props: { blue: "true" } };
}
const AddbankCard: NextPage = (props) => {
    return (
        <div className='page'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Add your bank card</div>
                        <div className='form-content'>
                            <div className='mt-3'>
                                <label className='mb-2'>Name on card*</label>
                                <TextField
                                    {...props} variant="standard"
                                    placeholder='Name on card'
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>Card number*</label>
                                <TextField
                                    {...props} variant="standard"
                                    placeholder='XXXX XXXX XXXX XXXX'
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <CreditCard className='grey-icon' />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <div className='row mt-4'>
                                <div className='col-6'>
                                    <label className='mb-2'>Expiration*</label>
                                    <TextField
                                        {...props} variant="standard"
                                        placeholder='MM/YY'
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                    />
                                </div>
                                <div className='col-6'>
                                <label className='mb-2'>CVV*</label>
                                <TextField
                                    {...props} variant="standard"
                                    placeholder='123'
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true
                                    }}
                                />
                                </div>
                            </div>
                            <div className='mt-5'>
                                    <button className='btn btn-primary'>Add Card</button>
                                    <a className='d-inline-block ms-3'>Skip</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddbankCard
