import type { NextPage } from 'next';

export async function getStaticProps() {
    return { props: { blue: "true" } };
}
const VerifyEmail: NextPage = (props) => {
    return (
        <div className='auth-page'>
            <div className='container'>
                <div className='auth-form'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <form>
                        <div className='headline'>Verify you Email</div>
                        <div className='form-content'>
                            <img src='/icons/verify-email.svg' width='80' className="d-block mx-auto"></img>

                            <div className='mt-4'>
                                We sent a verification email to <b>akinolayemi100@gmail.com</b>. Click the link inside to get started!
                            </div>
                            <div className='text-center mt-4'>
                                <button className='btn btn-primary d-inline-block'>Resend Email</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail
