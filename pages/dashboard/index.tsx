import DashboardHeader from "../../components/dashboard-header/dashboard-header";
import DashboardPortfolioBalance from "../../components/dashboard-portfolio-balance/dashboard-portfolio-balance";
import DashboardSidebar from "../../components/dashboard-sidebar/dashboard-sidebar";


import {
    BellIcon,
    CoinSwapIcon,
    PaperIcon,
    WalletMinusIcon,
    WalletPlusIcon,
    WalletReceiveIcon,
    WalletSendIcon
} from "../../components/icons/icons";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController
} from 'chart.js';

ChartJS.register(
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
import DashboardTransactionList from "../../components/dashboard-transaction-list/dashboard-transaction-list";
import React, { useEffect, useState } from "react";
import CoinSwap from "../../components/dialogs/coin-swap/coin-swap";
import Transfer from "../../components/dialogs/transfer/transfer";
import { IDialogs } from "../../shared/interface/global.interface";
import PriceAlert from "../../components/dialogs/price-alert/price-alert";
import { useAppContext } from "../../shared/contexts/app.context";
import { NextApplicationPage } from "../_app";
import VerificationCta from "../../components/verification-cta/verification-cta";
import { useAuth } from "../../components/auth/auth-provider";
import { getPortfolioList, getTransactionsList } from "../../shared/services/dashboard/transactions/transaction";
import useCustomSnackbar from "../../components/snackbar/use-custom-snackbar";

const Dashboard: NextApplicationPage = (props) => {

    interface IComponentData {
        transactions?: Array<any>,
        loadingTransactions?: boolean
    }
    interface IAssetsData {
        assets?: Array<any>,
        loadingAssets?: boolean
    }

    const { user, setUser } = useAuth();
    const snackbar = useCustomSnackbar();

    const initComponentData: IComponentData = {
        transactions: [],
        loadingTransactions: true
    }

    const initAssets: IAssetsData = {
    }

    const DialogsVisibilityInitState: IDialogs = {
        coinSwapDialogVisibitlity: false,
        conversionDialogVisibilty: false,
        transferDialogVisibility: false,
        priceAlertsDialogVisibility: false,
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const openDialog = (data: IDialogs) => {
        setDialogVisibilityState({ ...dialogsVisibilityState, ...data });
    };

    const [appState, setAppState] = useAppContext();
    const [componentData, setComponentData] = useState(initComponentData);
    const [assetsData, setAssets] = useState(initAssets);

    const setData = (data: IComponentData) => {
        setComponentData({ ...componentData, ...data })
    }

    const getTransactions = async () => {
        const request = await getTransactionsList();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            setUser({
                ...user!,
                transactions: request.data.data.slice(0, 5)
            })  
            setData({
                loadingTransactions: false
            })

            getPortfolio();
        }
    }

    const getPortfolio = async () => {
        const request = await getPortfolioList();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            setUser({
                ...user!,
                portfolios: request.data.data.slice(0, 5)
            })  
           
        }
    }

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <div className="dashboard">

            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Dashboard"></DashboardHeader>

                <div className="row m-auto dashboard-inner-content pb-4">

                    <div className="col-12 col-xl-8 ">
                        <div className="mobile-dashboard-page-title">
                            Dashboard
                        </div>
                        <div className="dashoard-overview-banner d-flex">
                            <div className="content">
                                <div className="title">Crypto For Better</div>
                                <div className="note">Experience kochure on mobile app</div>
                                <div className="cta">

                                    <VerificationCta />
                                    {
                                        user && appState && !appState.incompleteVerification &&
                                        <div>
                                            <picture>
                                                <img alt="google play" src="/icons/google-play.svg"></img>
                                            </picture>
                                            <picture>
                                                <img alt="apple store" className="d-inline-block ms-2" src="/icons/apple-store.svg"></img>
                                            </picture>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
                                <img className="d-inline-block ms-2" src="/images/btc.svg"></img>
                            </div>
                        </div>

                        <div className="dashboard-ctas">

                            <div className="flex-fill cursor-pointer" onClick={() => setAppState({
                                ...appState,
                                dialogStates: {
                                    buySellDialog: {
                                        visibitlity: true,
                                        action: 'buy',
                                        step: 2
                                    }
                                }
                            })}>
                                <div className="cta">
                                    <button><WalletPlusIcon color="white"></WalletPlusIcon></button>
                                </div>
                                <div className="cta-text">Buy</div>
                            </div>

                            <div className="flex-fill cursor-pointer" onClick={() => setAppState({
                                ...appState,
                                dialogStates: {
                                    buySellDialog: {
                                        visibitlity: true,
                                        action: 'sell',
                                        step: 2
                                    }
                                }
                            })}>
                                <div className="cta">
                                    <button><WalletMinusIcon color="white"></WalletMinusIcon></button>
                                </div>
                                <div className="cta-text">Sell</div>
                            </div>
                            <div className="flex-fill cursor-pointer"
                                onClick={() =>
                                    setAppState({
                                        ...appState,
                                        dialogStates: {
                                            sendReceive: {
                                                visibitlity: true,
                                                action: 'send',
                                                step: 2
                                            }
                                        }
                                    })
                                }>
                                <div className="cta">
                                    <button><WalletSendIcon color="white"></WalletSendIcon></button>
                                </div>
                                <div className="cta-text">Send</div>
                            </div>

                            <div className="flex-fill cursor-pointer"
                                onClick={() =>
                                    setAppState({
                                        ...appState,
                                        dialogStates: {
                                            sendReceive: {
                                                visibitlity: true,
                                                action: 'receive',
                                                step: 2
                                            }
                                        }
                                    })
                                }>
                                <div className="cta">
                                    <button><WalletReceiveIcon color="white"></WalletReceiveIcon></button>
                                </div>
                                <div className="cta-text">Receive</div>
                            </div>
                        </div>

                        <div className="box-section mt-4 d-none d-lg-block">
                            {
                                user && user.transactions &&
                                <DashboardTransactionList mode="recent" data={user.transactions!}></DashboardTransactionList>
                            }
                        </div>

                    </div>

                    <div className="col-12 col-xl-4 ">
                        <div className="box-section">
                            <div className="head d-flex">
                                <div className="title">Total Balance</div>
                                <div className="d-flex flex-grow-1 justify-content-end"></div>
                            </div>
                            <div className="balance-card mt-3">
                                <div className="align-items-start d-flex">
                                    <div className="d-flex align-items-start">
                                        <picture>
                                            <img alt="balance" src="/images/balance-btc.svg" height={'80'}></img>
                                        </picture>
                                    </div>
                                    <div className="d-flex flex-grow-1 align-items-start justify-content-end">
                                        <picture>
                                            <img alt="logo" src="/logo.svg" width={'84'}></img>
                                        </picture>
                                    </div>
                                </div>
                                <div className="balance">
                                    <div className="heading">Balance</div>
                                    <div className="amount">₦ {user?.available_bal?.toFixed(2)}</div>
                                </div>
                            </div>

                            <div className="d-flex mt-3 ctas">
                                <div className="flex-fill cursor-pointer" onClick={() => openDialog({ coinSwapDialogVisibitlity: true })}>
                                    <div className="cta">
                                        <CoinSwapIcon color="#936DFF"></CoinSwapIcon>
                                    </div>
                                    <div className="cta-text">Coin Swap</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => openDialog({ transferDialogVisibility: true })}>
                                    <div className="cta">
                                        <PaperIcon color="#22C55E"></PaperIcon>
                                    </div>
                                    <div className="cta-text">Transfer</div>
                                </div>

                                <div className="flex-fill cursor-pointer" onClick={() => openDialog({ priceAlertsDialogVisibility: true })}>
                                    <div className="cta">
                                        <BellIcon color="#1D38E4"></BellIcon>
                                    </div>
                                    <div className="cta-text">Price Alert</div>
                                </div>
                            </div>
                        </div>

                        <div className="box-section mt-4 d-block d-lg-none">
                            {
                                user && user.transactions &&
                                <DashboardTransactionList mode="recent" data={user.transactions!}></DashboardTransactionList>
                            }
                        </div>

                        <div className="box-section mt-4">
                            <div className="head d-flex">
                                <div className="title">Your Portfolio</div>
                                <div className="d-flex flex-grow-1 justify-content-end"></div>
                            </div>

                            <div className="mt-2">
                                {
                                    user?.portfolios?.map((element) => {
                                        return (
                                            <DashboardPortfolioBalance key={element.id} coinName={element.coin} percentageChange={element._24hrs} coinBalance={element.bal}  price={element.price}></DashboardPortfolioBalance>
                                        )
                                    })
                                }

                            </div>

                        </div>

                    </div>
                </div>

                <CoinSwap open={dialogsVisibilityState.coinSwapDialogVisibitlity!} setVisibilityState={setDialogVisibilityState}></CoinSwap>


                <Transfer open={dialogsVisibilityState.transferDialogVisibility!} setVisibilityState={setDialogVisibilityState}></Transfer>

                <PriceAlert open={dialogsVisibilityState.priceAlertsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></PriceAlert>

            </div>

        </div>
    )
}
Dashboard.requireAuth = true;

export default Dashboard