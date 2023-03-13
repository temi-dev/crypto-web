import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import { BankCircleFilledIcon, CancelIcon, HometownLogo, WalletPeerToPeerIcon } from "../../../components/icons/icons";
import DepositConfirmation from "../../../components/dialogs/deposit-confirmation/deposit-confirmation";
import { IDialogs } from "../../../shared/interface/global.interface";
import { NextApplicationPage } from "../../_app";
import { useAuth } from "../../../components/auth/auth-provider";
import { getBankPeer2PeerDepositChannels, getWalletProviders } from "../../../shared/services/dashboard/wallet/wallet.service";
import useCustomSnackbar from "../../../components/snackbar/use-custom-snackbar";
import WithdrawDialog from "../../../components/dialogs/withdraw/withdraw";

const Wallet: NextApplicationPage = () => {
    const { user } = useAuth();
    const size = useWindowSize();
    const snackbar = useCustomSnackbar();

    interface IData {
        network?: string,
        currency?: string,
        amount?: number | null | string,
        action?: string,
        depositChannel?: string
        showWithdrawChannel?: boolean
        mobileHidden?: boolean,
        bankPeer2PeerDepositUsers?: Array<any>,
        flowStep?: number | null,
        bankPeer2PeerSelectedUser?: any
        peer2peerWallet?: string,
        walletProviders?: Array<any>
    }

    const initData: IData = {
        network: '',
        currency: 'naira',
        action: 'deposit',
        flowStep: null,
        showWithdrawChannel: false,
        mobileHidden: false,
        bankPeer2PeerDepositUsers: []
    }

    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const showChannel = () => {
        if (componentData.amount! <= 0) {
            snackbar.showError("Enter an amount to " + componentData.action);
            return
        }
        if (componentData.action == 'deposit') setData({
            flowStep: 1,
            mobileHidden: size.width < 992 ? true : false
        })
        if (componentData.action == 'withdraw') setData({
            flowStep: 1,
            mobileHidden: size.width < 992 ? true : false
        })
    }

    const DialogsVisibilityInitState: IDialogs = {
        depositConfirmationDialogVisibility: false,
        WithdrawDialogDialogVisibility: false
    }

    const fetchBankPeer2PeerChannels = async () => {
        const request = await getBankPeer2PeerDepositChannels(componentData.action!);
        if (request.responseCode == 422) {
            snackbar.showError(
                request.data.message
            );
        } else {
            setData({
                depositChannel: 'bank',
                flowStep: 2,
                bankPeer2PeerDepositUsers: request.data.data
            })
        }
    }

    const completePeer2PeerDeposit = () => {
        snackbar.showMessage('This transaction will be automatically marked completed once transfer is confirmed by user.')
        setData({
            flowStep: null,
            amount: '',
            mobileHidden: false
        })
    }

    const completeWithdraw = () => {
        snackbar.showMessage('Withdraw successful')
        setData({
            flowStep: null,
            amount: '',
            mobileHidden: false
        })
    }

    const continueWalletSelection = () => {
        if (componentData.action == 'deposit') {
            setDialogVisibilityState({
                depositConfirmationDialogVisibility: true
            })
        } else {
            setDialogVisibilityState({
                WithdrawDialogDialogVisibility: true
            })
        }
    }

    const getWalletsChannels = async () => {
        const request = await getWalletProviders();
        if (request.responseCode == 422) {
            snackbar.showError(
                request.data.message
            );
        } else {
            setData({ walletProviders: request.data.data })
        }
    }

    useEffect(() => {
        getWalletsChannels()
    }, [])

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
                                        <div className={componentData.action == 'deposit' ? 'active' : ''} onClick={() => setData({ action: 'deposit', flowStep: null })}>Add Money</div>
                                        <div className={componentData.action == 'withdraw' ? 'active' : ''} onClick={() => setData({ action: 'withdraw', flowStep: null })}>Withdraw</div>
                                    </div>

                                    <div className="ui-custom-tab-content">

                                        <div className="money-amount-field">
                                            <TextField
                                                className="input mt-3"
                                                variant="standard"
                                                placeholder="0.00"
                                                fullWidth
                                                type='number'
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                                value={componentData.amount || ''}
                                                onChange={(e) =>
                                                    setData({
                                                        amount: e.target.value ? Number(e.target.value) : null
                                                    })}
                                            />
                                        </div>

                                        <div className="wallet-balance">
                                            <span className="wallet-balance-chip">Balance: ₦ {user?.available_bal?.toFixed(2)}</span>
                                        </div>

                                        <div className="mt-5 mb-4">
                                            <button disabled={componentData.flowStep != null || !componentData.amount || componentData.amount <= 0} className='btn btn-radius py-3 w-100 btn-primary' onClick={showChannel}>Confirm</button>
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
                        {componentData.flowStep == 1 && (
                            <div className="ui-option-picker animate__animated animate__pulse" >
                                <div className="close">
                                    <button onClick={() => setData({
                                        flowStep: null,
                                        mobileHidden: false
                                    })}><CancelIcon color="#194BFB"></CancelIcon></button>
                                </div>

                                <div className="heading">{componentData.action} Channel</div>
                                <div className="heading-note">How would you like to {componentData.action}?</div>

                                <div className="content">
                                    <div onClick={() => {
                                        setData({
                                            depositChannel: 'peer',
                                            flowStep: 4
                                        })
                                    }}
                                        className="ui-option">
                                        <div className="icon">
                                            <WalletPeerToPeerIcon></WalletPeerToPeerIcon>
                                        </div>
                                        <div className="title">Wallet Peer to Peer</div>
                                    </div>
                                    {
                                        componentData.action == 'deposit' && (
                                            <div
                                                onClick={() => {
                                                    fetchBankPeer2PeerChannels()
                                                }}
                                                className="ui-option">
                                                <div className="icon">
                                                    <BankCircleFilledIcon></BankCircleFilledIcon>
                                                </div>
                                                <div className="title">Bank Peer</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )}

                        {componentData.flowStep == 2 && (
                            <div className="ui-option-picker animate__animated animate__pulse" >
                                <div className="close">
                                    <button onClick={() => setData({
                                        flowStep: 1,
                                        mobileHidden: false
                                    })}><CancelIcon color="#194BFB"></CancelIcon></button>
                                </div>

                                <div className="heading">Select User</div>
                                <div className="heading-note">Select a user to complete transaction</div>

                                <div className="content">
                                    {
                                        componentData.bankPeer2PeerDepositUsers?.map((user: any) => {
                                            return (
                                                <div key={user.id} className={user.id == componentData.bankPeer2PeerSelectedUser?.id ? "active p2p-user" : "p2p-user"} onClick={() => setData({
                                                    bankPeer2PeerSelectedUser: user
                                                })}>
                                                    @{user.account}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <button type='button' disabled={!componentData.bankPeer2PeerSelectedUser} className='btn btn-primary w-100' onClick={() =>
                                        setData({
                                            flowStep: 3,
                                        })}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {componentData.action == 'deposit' && componentData.flowStep == 3 && (
                            <div className="ui-option-picker animate__animated animate__pulse" >

                                <div className="content">
                                    <div className="deposit-note-header">Awaiting credit on user&apos;s bank account</div>

                                    <div className="deposit-info transaction-details">
                                        <div className="data">
                                            <div className="item">
                                                <div className="title">Amount</div>
                                                <div className="value">{componentData.amount}</div>
                                            </div>
                                            <div className="item">
                                                <div className="title">Bank</div>
                                                <div className="value">{componentData.bankPeer2PeerSelectedUser?.bank_name}</div>
                                            </div>
                                            <div className="item">
                                                <div className="title">Account name</div>
                                                <div className="value">{componentData.bankPeer2PeerSelectedUser?.account_name}</div>
                                            </div>
                                            <div className="item">
                                                <div className="title">Account number</div>
                                                <div className="value">{componentData.bankPeer2PeerSelectedUser?.account_number}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="deposit-note-footer">

                                        This transaction will be automatically marked completed once transfer is confirmed by user.
                                        Where you did not receive agreed amount, kindly contact us via support!.
                                    </p>

                                </div>
                                <div className="my-4">
                                    <button type='button' className='btn btn-primary w-100' onClick={() =>
                                        completePeer2PeerDeposit()
                                    }>
                                        I have completed transfer
                                    </button>
                                </div>
                            </div>
                        )}

                        {componentData.flowStep == 4 && (
                            <div className="ui-option-picker animate__animated animate__pulse" >
                                <div className="close">
                                    <button onClick={() => setData({
                                        flowStep: 1,
                                        mobileHidden: false
                                    })}><CancelIcon color="#194BFB"></CancelIcon></button>
                                </div>

                                <div className="heading">Select  wallet</div>

                                <div className="content">
                                    {
                                        componentData?.walletProviders?.map((element: any) => {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        setData({
                                                            peer2peerWallet: element.tag
                                                        });
                                                        continueWalletSelection()
                                                    }} className="ui-option">
                                                    <div className="icon">
                                                        <div style={{ backgroundImage: "url(" + "https://api.kochure.com/test/static/assets/images/" + element.logo_url  + ")" }} className="transaction-image-placeholder" >
                                                        </div>
                                                    </div>
                                                    <div className="title">{element.name}</div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <DepositConfirmation open={dialogsVisibilityState.depositConfirmationDialogVisibility!} setVisibilityState={setDialogVisibilityState} amount={componentData.amount} wallet={componentData.peer2peerWallet!} complete={completePeer2PeerDeposit}></DepositConfirmation>

                <WithdrawDialog open={dialogsVisibilityState.WithdrawDialogDialogVisibility!} setVisibilityState={setDialogVisibilityState} amount={componentData.amount} wallet={componentData.peer2peerWallet!} complete={completeWithdraw}></WithdrawDialog>
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
Wallet.requireAuth = true;
export default Wallet