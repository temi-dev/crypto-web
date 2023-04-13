import { Dialog } from "@mui/material"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../../shared/contexts/app.context";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { getMarketData } from "../../../../shared/services/dashboard/market/market";
import { getPortfolioList } from "../../../../shared/services/dashboard/transactions/transaction";
import { ArrowDownFilledIcon, ArrowRightTopFilledIcon, ArrowSidewaysFilledIcon, BitCoinFilledIcon, CancelIcon, WalletFilledIcon } from "../../../icons/icons"
import useCustomSnackbar from "../../../snackbar/use-custom-snackbar";
import PortfolioBuy from "../buy/buy";
import PortfolioReceive from "../receive/receive";
import PortfolioSell from "../sell/sell";
import PortfolioSend from "../send/send";

interface IComponentData {
    coinDetails?: any
}
const PortfolioDetails = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    const [appState, setAppState] = useAppContext();
    const snackbar = useCustomSnackbar();


    const DialogsVisibilityInitState: IDialogs = {
        portfolioReceiveDialogVisibility: false,
        portfolioSendDialogVisibility: false,
        portfolioSellDialogVisibility: false,
        portfolioBuyDialogVisibility: false
    }
    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });
    const openDialog = (data: IDialogs) => {
        setDialogVisibilityState({ ...dialogsVisibilityState, ...data });
    };

    const data: IComponentData = {}
    const [componentData, setComponentData] = useState(data)
    const handleDialogClose = () => {
        setAppState({
            ...appState,
            dialogStates: {
                portfolioDetailsDialog: {
                    visibitlity: false,
                }
            }
        })
    };
    const getData = async () => {
        const portfolio = await getPortfolioList();
        const marketData = await getMarketData();
        let assets: string[] = [];
        if (portfolio.responseCode == 422) {
            snackbar.showError(portfolio.data ? portfolio.data.message : "Error occured");
            return
        } else {
            let coin = portfolio.data.data.find((x: { coin: string; }) => x.coin.toLowerCase() == appState.dialogStates?.portfolioDetailsDialog?.coin?.toLowerCase())
            if (coin) {
                setComponentData({ coinDetails: coin })
            } else {
                coin = marketData.data.data.find((x: { coin: string; }) => x.coin.toLowerCase() == appState.dialogStates?.portfolioDetailsDialog?.coin?.toLowerCase())
                setComponentData({ coinDetails: coin })
            }
        }
    }


    useEffect(() => {
        setComponentData({ coinDetails: null })
        getData()
    }, [appState?.dialogStates?.portfolioDetailsDialog?.visibitlity!])


    return (
        <div>
            <Dialog open={appState.dialogStates?.portfolioDetailsDialog?.visibitlity! || false} onClose={handleDialogClose} className="animate__animated animate__slideInRight animate__faster" fullScreen>
                <div className="dashbord-right-dialog ">
                    <div className="dashbord-right-dialog-content">
                        <div className="dashbord-right-dialog-header">
                            <div className="close-dialog">
                                <button onClick={handleDialogClose}>
                                    <CancelIcon color="#1d38e4"></CancelIcon>
                                </button>
                            </div>
                            <div className="title">{appState.dialogStates?.portfolioDetailsDialog?.coin} Details</div>
                        </div>
                        <div className="dashbord-right-dialog-inner-content">
                            <div className="portfolio-balance-card">
                                <div className="coin-details">
                                    <div>
                                        <div style={{ backgroundImage: "url(" + "https://api.kochure.com/test/static/assets/" + appState.dialogStates?.portfolioDetailsDialog?.coin + '.png' + ")" }} className="transaction-image-placeholder" >
                                        </div>
                                    </div>
                                    <div className="coin-name">{appState.dialogStates?.portfolioDetailsDialog?.coin}</div>
                                </div>
                                <div className="balance">
                                    {
                                        componentData.coinDetails && (

                                            <div className="naira-fiat">
                                                {
                                                    componentData.coinDetails.bal != '' && (
                                                        <span>0</span>
                                                    )
                                                }
                                                {
                                                    componentData.coinDetails.bal && (
                                                        <span>{componentData.coinDetails.bal}</span>
                                                    )
                                                }

                                            </div>
                                        )
                                    }


                                    <div className="d-flex">
                                        <div className="d-flex flex-grow-1 mt-2">
                                            {
                                                componentData.coinDetails && (
                                                    <div className={`percentage-increase ${componentData.coinDetails._24hrs >= 0 ? 'green' : 'red'}`}>
                                                        {componentData.coinDetails._24hrs}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rate">
                                <div className="coin">{appState.dialogStates?.portfolioDetailsDialog?.coin}</div>
                                <div className="conversion">1 {appState.dialogStates?.portfolioDetailsDialog?.coin} = {appState.dialogStates?.portfolioDetailsDialog?.price} USD</div>
                            </div>

                            <div className="d-flex mt-4 ctas">
                                <div className="flex-fill cursor-pointer" onClick={
                                    () => { 
                                        setAppState({
                                            ...appState,
                                            dialogStates: {
                                                ...appState.dialogStates,
                                                sendReceive: {
                                                    visibitlity: true,
                                                    action: 'receive',
                                                    step: 2,
                                                    coin: appState.dialogStates?.portfolioDetailsDialog?.coin
                                                }
                                            }
                                        })
                                    }
                                } >
                                    <div className="cta">
                                        <button><ArrowDownFilledIcon color="#1d38e4"></ArrowDownFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Receive</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={
                                    () => {
                                        setAppState({
                                            ...appState,
                                            dialogStates: {
                                                ...appState.dialogStates,
                                                sendReceive: {
                                                    visibitlity: true,
                                                    action: 'send',
                                                    step: 2,
                                                    coin: appState.dialogStates?.portfolioDetailsDialog?.coin
                                                }
                                            }
                                        })
                                    }
                                }>
                                    <div className="cta">
                                        <button><ArrowRightTopFilledIcon color="#1d38e4"></ArrowRightTopFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Send</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => {
                                    setAppState({
                                        ...appState,
                                        dialogStates: {
                                            ...appState.dialogStates,
                                            buySellDialog: {
                                                visibitlity: true,
                                                action: 'sell',
                                                step: 2,
                                                coin: appState.dialogStates?.portfolioDetailsDialog?.coin
                                            }
                                        }
                                    })
                                }}>
                                    <div className="cta">
                                        <button><ArrowSidewaysFilledIcon color="#1d38e4"></ArrowSidewaysFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Sell</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => {
                                    setAppState({
                                        ...appState,
                                        dialogStates: {
                                            ...appState.dialogStates,
                                            buySellDialog: {
                                                visibitlity: true,
                                                action: 'buy',
                                                step: 2,
                                                coin: appState.dialogStates?.portfolioDetailsDialog?.coin
                                            }
                                        }
                                    })
                                }}>
                                    <div className="cta">
                                        <button><WalletFilledIcon color="#1d38e4"></WalletFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Buy</div>
                                </div>
                            </div>

                            <div className="dashbord-right-dialog-footer">
                                <Image alt="wallet vault" src="/images/vault-safe.svg" width='250px' height='250px'></Image>
                                {/* <div>
                                    <Image alt="google play" width='140px' height='40px' src="/icons/google-play.svg"></Image>
                                    <Image alt="apple store" width='140px' height='40px' className="d-inline-block ms-2" src="/icons/apple-store.svg"></Image>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </Dialog>
            <PortfolioReceive open={dialogsVisibilityState.portfolioReceiveDialogVisibility!} setVisibilityState={setDialogVisibilityState} coin='btc'></PortfolioReceive>

            <PortfolioSend open={dialogsVisibilityState.portfolioSendDialogVisibility!} setVisibilityState={setDialogVisibilityState} coin='btc'></PortfolioSend>

            <PortfolioSell open={dialogsVisibilityState.portfolioSellDialogVisibility!} setVisibilityState={setDialogVisibilityState} coin='btc'></PortfolioSell>

            <PortfolioBuy open={dialogsVisibilityState.portfolioBuyDialogVisibility!} setVisibilityState={setDialogVisibilityState} coin='btc'></PortfolioBuy>
        </div>
    )
}

export default PortfolioDetails