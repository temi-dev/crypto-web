import { TextField } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import AmountInputField from "../../../components/amount-field/amount-field";
import { BankCircleFilledIcon, CancelIcon, HometownLogo, RavenLogo, WalletPeerToPeerIcon } from "../../../components/icons/icons";
import DepositConfirmation from "../../../components/dialogs/deposit-confirmation/deposit-confirmation";
import { IDialogs } from "../../../shared/interface/global.interface";

const Wallet: NextPage = () => {
    const size = useWindowSize();

    interface IData {
        network?: string,
        currency?: string,
        amount?: number,
        action?: string,
        depositChannel?: string
        showDepositChannel?: boolean,
        showWithdrawChannel?: boolean
        mobileHidden?: boolean
    }

    const initData: IData = {
        network: '',
        currency: 'naira',
        action: 'deposit',
        amount: 0.00,
        depositChannel: 'peer',
        showDepositChannel: false,
        showWithdrawChannel: false,
        mobileHidden: false
    }

    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const showChannel = () => {
        
        if (componentData.action == 'deposit') setData({ showDepositChannel: true, mobileHidden: size.width < 992 ? true : false })
        if (componentData.action == 'withdraw') setData({ showWithdrawChannel: true, mobileHidden: size.width < 992 ? true : false })
      
    }

    const DialogsVisibilityInitState: IDialogs = {
        depositConfirmationDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Wallet"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-lg-7">
                        <div className="mobile-dashboard-page-title">
                            Wallet
                        </div>
                        {
                            !componentData.mobileHidden && (
                                <div className="ui-custom-tab">
                                    <div className="ui-custom-tab-header">
                                        <div className={componentData.action == 'deposit' ? 'active' : ''} onClick={() => setData({ action: 'deposit' })}>Add Money</div>
                                        <div className={componentData.action == 'withdraw' ? 'active' : ''} onClick={() => setData({ action: 'withdraw' })}>Withdraw</div>
                                    </div>

                                    <div className="ui-custom-tab-content">

                                        <div className="add-money-currency-picker">
                                            <div>
                                                <button onClick={() => setData({ currency: 'naira' })} className={componentData.currency == 'naira' ? 'active' : ''}>₦</button>
                                            </div>
                                            <div>
                                                <button onClick={() => setData({ currency: 'usd' })} className={componentData.currency == 'usd' ? 'active' : ''}>$</button>
                                            </div>
                                        </div>
                                        <div className="money-amount-field">
                                            <TextField
                                                className="input mt-3"
                                                variant="standard"
                                                placeholder="0.00"
                                                fullWidth
                                                type='text'
                                                InputProps={{
                                                    disableUnderline: true,
                                                    // startAdornment: (
                                                    //     <div className="d-flex currency">
                                                    //         {
                                                    //             componentData.currency == 'usd' && (
                                                    //                 <span>$</span>
                                                    //             )
                                                    //         }
                                                    //         {
                                                    //             componentData.currency == 'naira' && (
                                                    //                 <span>₦</span>
                                                    //             )
                                                    //         }
                                                    //     </div>
                                                    // )
                                                }}
                                            />

                                        </div>
                                        <div className="mt-5 mb-4">
                                            <button className='btn btn-radius py-3 w-100 btn-primary' onClick={showChannel}>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <div className="dashoard-overview-banner d-none transparent mt-5 d-lg-flex">
                            <div className="content">
                                <div className="title pe-3">Experience Kochure Mobile</div>
                                <div className="mt-3">
                                    <picture>
                                        <img alt="google play" src="/icons/google-play.svg"></img>
                                    </picture>
                                    <picture>
                                        <img alt="apple store" className="d-inline-block ms-2" src="/icons/apple-store.svg"></img>
                                    </picture>
                                </div>
                            </div>
                            <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
                                <img className="d-inline-block ms-2" src="/images/app-slant.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 py-4 py-xl-0">
                        {componentData.action == 'deposit' && componentData.showDepositChannel && (
                            <div className="ui-option-picker animate__animated animate__pulse" >
                                <div className="close">
                                    <button onClick={() => setData({ showDepositChannel: false, mobileHidden: false })}><CancelIcon color="#194BFB"></CancelIcon></button>
                                </div>

                                <div className="heading">Deposit Channel</div>
                                <div className="heading-note">How would you like to deposit?</div>

                                <div className="content">
                                    <div onClick={() => {
                                        setData({ depositChannel: 'peer' })
                                        setDialogVisibilityState({ depositConfirmationDialogVisibility: true })
                                    }} className={componentData.depositChannel == 'peer' ? ' ui-option active' : 'ui-option'}>
                                        <div className="icon">
                                            <WalletPeerToPeerIcon></WalletPeerToPeerIcon>
                                        </div>
                                        <div className="title">Wallet Peer to Peer</div>
                                    </div>
                                    <div onClick={() => {
                                        setData({ depositChannel: 'bank' })
                                        setDialogVisibilityState({ depositConfirmationDialogVisibility: true })
                                    }} className={componentData.depositChannel == 'bank' ? ' ui-option active' : 'ui-option'}>
                                        <div className="icon">
                                            <BankCircleFilledIcon></BankCircleFilledIcon>
                                        </div>
                                        <div className="title">Bank Peer</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {componentData.action == 'withdraw' && componentData.showWithdrawChannel && (
                            <div className="ui-option-picker animate__animated animate__pulse" >
                                <div className="close">
                                    <button onClick={() => setData({ showWithdrawChannel: false, mobileHidden: false })}><CancelIcon color="#194BFB"></CancelIcon></button>
                                </div>

                                <div className="heading">Select  wallet</div>

                                <div className="content">
                                    <div onClick={() => setData({ depositChannel: 'peer' })} className={componentData.depositChannel == 'peer' ? ' ui-option active' : 'ui-option'}>
                                        <div className="icon">
                                            <HometownLogo></HometownLogo>
                                        </div>
                                        <div className="title">Home Town</div>
                                    </div>
                                    <div onClick={() => setData({ depositChannel: 'bank' })} className={componentData.depositChannel == 'bank' ? ' ui-option active' : 'ui-option'}>
                                        <div className="icon">
                                            <RavenLogo></RavenLogo>
                                        </div>
                                        <div className="title">Raven</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <DepositConfirmation open={dialogsVisibilityState.depositConfirmationDialogVisibility!} setVisibilityState={setDialogVisibilityState}></DepositConfirmation>
            </div>
        </div >
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}

export default Wallet