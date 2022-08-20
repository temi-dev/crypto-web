import { NextPage } from "next";
import DashboardHeader from "../../components/dashboard-header/dashboard-header";
import DashboardPortfolioBalance from "../../components/dashboard-portfolio-balance/dashboard-portfolio-balance";
import DashboardSidebar from "../../components/dashboard-sidebar/dashboard-sidebar";


import {
    BellIcon,
    BitCoinFilledIcon,
    CoinSwapIcon,
    DashCoinFilledIcon,
    EtherumFilledIcon,
    ExchangeIcon,
    PaperIcon,
    TetherCoinFilledIcon
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
import React from "react";
import CoinSwap from "../../components/dialogs/coin-swap/coin-swap";
import MoneyConversion from "../../components/dialogs/convert/convert";
import Transfer from "../../components/dialogs/transfer/transfer";
import { IDialogs } from "../../shared/interface/global.interface";
import PriceAlert from "../../components/dialogs/price-alert/price-alert";

const Dashboard: NextPage = (props) => {

    const rows = [
        {
            id: '12',
            description: "Bitcoin transaction",
            timestamp: "12th Feb, 2022",
            amount: "-$1000",
            status: "Pending"
        },
        {
            id: '13',
            description: "Cash Withdraw",
            timestamp: "12th Feb, 2022",
            amount: "-$1000",
            status: "Success"
        },
        {
            id: '14',
            description: "Bitcoin transaction",
            timestamp: "12th Feb, 2022",
            amount: "-$1000",
            status: "Pending"
        },
        {
            id: '15',
            description: "Cash Withdraw",
            timestamp: "12th Feb, 2022",
            amount: "-$1000",
            status: "Success"
        }
    ];

    const DialogsVisibilityInitState : IDialogs = {
        coinSwapDialogVisibitlity: false,
        conversionDialogVisibilty: false,
        transferDialogVisibility: false,
        priceAlertsDialogVisibility: false,
        portfolioDetailsDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = React.useState({...DialogsVisibilityInitState});

    const openDialog = (data: IDialogs) => {
        setDialogVisibilityState({...dialogsVisibilityState, ...data });
    };

    
    return (
        <div className="dashboard">

            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Overview"></DashboardHeader>

                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-12 col-xl-8 mt-3">
                        <div className="dashoard-overview-banner d-flex">
                            <div className="content">
                                <div className="title">Crypto For Better</div>
                                <div className="note">Experience kochure on mobile app</div>
                                <div className="mt-3">
                                    <img src="/icons/google-play.svg"></img>
                                    <img className="d-inline-block ms-2" src="/icons/apple-store.svg"></img>
                                </div>
                            </div>
                            <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
                                <img className="d-inline-block ms-2" src="/hand-phone.svg"></img>
                            </div>
                        </div>

                        <div className="box-section mt-4 d-none d-lg-block">
                            <DashboardTransactionList data={rows}></DashboardTransactionList>
                        </div>

                    </div>

                    <div className="col-12 col-xl-4 mt-3">
                        <div className="box-section">
                            <div className="head d-flex">
                                <div className="title">Total Balance</div>
                                <div className="d-flex flex-grow-1 justify-content-end"></div>
                            </div>
                            <div className="balance-card mt-3">
                                <div className="align-items-start d-flex">
                                    <div className="d-flex align-items-start">
                                        <img src="/images/balance-btc.svg" height={'80'}></img>
                                    </div>
                                    <div className="d-flex flex-grow-1 align-items-start justify-content-end">
                                        <img src="/logo.svg" width={'84'}></img>
                                    </div>
                                </div>
                                <div className="balance">
                                    <div className="heading">Balance</div>
                                    <div className="amount">₦200,000.00</div>
                                </div>
                            </div>

                            <div className="d-flex mt-3 ctas">
                                <div className="flex-fill cursor-pointer" onClick={() => openDialog({coinSwapDialogVisibitlity: true})}>
                                    <div className="cta">
                                        <CoinSwapIcon color="#936DFF"></CoinSwapIcon>
                                    </div>
                                    <div className="cta-text">Coin Swap</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => openDialog({transferDialogVisibility: true})}>
                                    <div className="cta">
                                        <PaperIcon color="#22C55E"></PaperIcon>
                                    </div>
                                    <div className="cta-text">Transfer</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => openDialog({conversionDialogVisibilty: true})}>
                                    <div className="cta">
                                        <ExchangeIcon color="#FACC15"></ExchangeIcon>
                                    </div>
                                    <div className="cta-text">Convert</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => openDialog({priceAlertsDialogVisibility: true})}>
                                    <div className="cta">
                                        <BellIcon color="#1D38E4"></BellIcon>
                                    </div>
                                    <div className="cta-text">Price Alert</div>
                                </div>
                            </div>
                        </div>

                        <div className="box-section mt-4">
                            <div className="head d-flex">
                                <div className="title">Your Portfolio</div>
                                <div className="d-flex flex-grow-1 justify-content-end"></div>
                            </div>

                            <div className="mt-2">
                                <DashboardPortfolioBalance  coinIcon={<BitCoinFilledIcon color="white" fillColor="#F7931A"></BitCoinFilledIcon>} coinName="BTC" percentageChange={"+5%"} coinBalance={0.222} fiatBalance={"NGN200,000"} ></DashboardPortfolioBalance>

                                <DashboardPortfolioBalance coinIcon={<EtherumFilledIcon color="white" fillColor="#627EEA"></EtherumFilledIcon>} coinName="ETH" percentageChange={"+2%"} coinBalance={1.222} fiatBalance={"NGN1,000,000"} ></DashboardPortfolioBalance>

                                <DashboardPortfolioBalance coinIcon={<DashCoinFilledIcon color="white" fillColor="#008DE4"></DashCoinFilledIcon>} coinName="DASH" percentageChange={"+5%"} coinBalance={50.222} fiatBalance={"NGN250,000"} ></DashboardPortfolioBalance>

                                <DashboardPortfolioBalance coinIcon={<TetherCoinFilledIcon color="white" fillColor="#53AE94"></TetherCoinFilledIcon>} coinName="TETHER" percentageChange={"+5%"} coinBalance={110.222} fiatBalance={"NGN50,000"} ></DashboardPortfolioBalance>
                            </div>

                        </div>

                        <div className="box-section mt-4 d-block d-lg-none">
                            <DashboardTransactionList data={rows}></DashboardTransactionList>
                        </div>
                    </div>
                </div>

                <CoinSwap open={dialogsVisibilityState.coinSwapDialogVisibitlity!} setVisibilityState={setDialogVisibilityState}></CoinSwap>

                <MoneyConversion open={dialogsVisibilityState.conversionDialogVisibilty!} setVisibilityState={setDialogVisibilityState}></MoneyConversion>

                <Transfer open={dialogsVisibilityState.transferDialogVisibility!} setVisibilityState={setDialogVisibilityState}></Transfer>

                <PriceAlert open={dialogsVisibilityState.priceAlertsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></PriceAlert>

                
            </div>

        </div>
    )
}

export default Dashboard