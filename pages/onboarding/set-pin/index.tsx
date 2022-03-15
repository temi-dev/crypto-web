import type { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
    return { props: { blueBg: true } };
}
const SetPin: NextPage = (props) => {
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='auth-form'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Set your Pin</div>
                        <div className='form-content'>
                            <div className='mt-3'>
                                <label className='mb-2'>PIN*</label>
                                <input placeholder='PIN' type='text' className="form-control"></input>
                            </div>
                            <div className='mt-4'>
                                <label className='mb-2'>PIN Confirmation*</label>
                                <input placeholder='Confirm PIN' type='text' className="form-control"></input>
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
