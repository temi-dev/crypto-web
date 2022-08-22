import { Dialog } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { ArrowDownFilledIcon, ArrowRightTopFilledIcon, ArrowSidewaysFilledIcon, BitCoinFilledIcon, CancelIcon, WalletFilledIcon } from "../../../icons/icons"
import PortfolioBuy from "../buy/buy";
import PortfolioReceive from "../receive/receive";
import PortfolioSell from "../sell/sell";
import PortfolioSend from "../send/send";

const PortfolioDetails = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    const handleDialogClose = () => {
        setVisibilityState({ portfolioDetailsDialogVisibility: false });
    };
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
    return (
        <div>
            <Dialog open={open} onClose={handleDialogClose} className="animate__animated animate__slideInRight animate__faster" fullScreen>
                <div className="portfolio-dialog ">
                    <div className="portfolio-dialog-content">
                        <div className="portfolio-dialog-header">
                            <div className="close-dialog">
                                <button onClick={handleDialogClose}>
                                    <CancelIcon color="#1d38e4"></CancelIcon>
                                </button>
                            </div>
                            <div className="title">BTC Details</div>
                        </div>
                        <div className="portfolio-dialog-inner-content">
                            <div className="portfolio-balance-card">
                                <div className="coin-details">
                                    <div>
                                        <BitCoinFilledIcon color="white" fillColor="#F7931A"></BitCoinFilledIcon>
                                    </div>
                                    <div className="coin-name">Bitcoin</div>
                                </div>
                                <div className="balance">
                                    <div className="naira-fiat">800,000 NGN</div>
                                    <div className="d-flex">
                                        <div className="usd-fiat">1,926.46 USD</div>
                                        <div className="d-flex flex-grow-1 justify-content-end">
                                            <span className="percentage-increase green">+0.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rate">
                                <div className="coin">Bitcoin (BTC)</div>
                                <div className="conversion">1 BTC = 7,958,400.39 NGN</div>
                            </div>

                            <div className="d-flex mt-4 ctas">
                                <div className="flex-fill cursor-pointer" onClick={() => setDialogVisibilityState({ portfolioReceiveDialogVisibility: true })} >
                                    <div className="cta">
                                        <button><ArrowDownFilledIcon color="#1d38e4"></ArrowDownFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Receive</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => setDialogVisibilityState({ portfolioSendDialogVisibility: true })}>
                                    <div className="cta">
                                        <button><ArrowRightTopFilledIcon color="#1d38e4"></ArrowRightTopFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Send</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => setDialogVisibilityState({ portfolioSellDialogVisibility: true })}>
                                    <div className="cta">
                                        <button><ArrowSidewaysFilledIcon color="#1d38e4"></ArrowSidewaysFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Sell</div>
                                </div>
                                <div className="flex-fill cursor-pointer" onClick={() => setDialogVisibilityState({ portfolioBuyDialogVisibility: true })}>
                                    <div className="cta">
                                        <button><WalletFilledIcon color="#1d38e4"></WalletFilledIcon></button>
                                    </div>
                                    <div className="cta-text">Buy</div>
                                </div>
                            </div>

                            <div className="portfolio-dialog-footer">
                                <Image alt="wallet vault" src="/images/vault-safe.svg" width='250px' height='250px'></Image>
                                <div>
                                    <Image alt="google play" width='140px' height='40px' src="/icons/google-play.svg"></Image>
                                    <Image alt="apple store" width='140px' height='40px' className="d-inline-block ms-2" src="/icons/apple-store.svg"></Image>
                                </div>
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