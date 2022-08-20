import { useState } from "react";
import { IDialogs } from "../../shared/interface/global.interface";
import PortfolioDetails from "../dialogs/portfolio/details/details";

const DashboardPortfolioBalance = (
    { coinIcon, coinName, percentageChange, coinBalance, fiatBalance }:
        { coinIcon: any, coinName: string, percentageChange: string, coinBalance: number, fiatBalance: string }
) => {
    const DialogsVisibilityInitState: IDialogs = {
        portfolioDetailsDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const openDialog = (data: IDialogs) => {
        console.log({ ...data })
        setDialogVisibilityState({ ...dialogsVisibilityState, ...data });
    };
    return (
        <div>
            <div className="portfolio-list d-flex" onClick={() => openDialog({ portfolioDetailsDialogVisibility: true })}>
                <div className="d-flex">
                    <div className="me-2">
                        {coinIcon}
                    </div>
                    <div>
                        <div className="coin-name">{coinName}</div>
                        <div className="percentage-change green">{percentageChange}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end flex-grow-1">
                    <div className="right">
                        <div className="coin-balance">{coinBalance}</div>
                        <div className="fiat-balance">{fiatBalance}</div>
                    </div>
                </div>

            </div>
            <PortfolioDetails open={dialogsVisibilityState.portfolioDetailsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></PortfolioDetails>
        </div>
    )
}

export default DashboardPortfolioBalance;