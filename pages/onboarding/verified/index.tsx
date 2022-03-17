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
                        <div className='headline'>You're verified!</div>
                        <div className='headnote mt-4'>You have successfully registered on the Kochure . Please verify your identity to using Kochure.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verified
