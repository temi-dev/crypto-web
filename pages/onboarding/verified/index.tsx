import type { NextPage } from 'next';

export async function getStaticProps() {
    return { props: { blue: "true" } };
}
const Verified: NextPage = (props) => {
    return (
        <div className='page'>
            <div className='container'>
                <div className='page-content'>
                    <img className='logo' src={'/logo.svg'} width='195px' height='45px'></img>
                    <div className='text-center user-verfied'>
                        <div className='headline'>You&apos;re verified!</div>
                        <div className='headnote mt-4'>You have successfully registered on the Kochure . Please verify your identity to using Kochure.</div>
                        <div className='my-4'>
                            <button className='btn burst-in'>Burst In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verified
