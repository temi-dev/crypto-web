import { useState } from "react";
import { IDialogs } from "../../shared/interface/global.interface";
import PortfolioDetails from "../dialogs/portfolio/details/details";

const DashboardPortfolioBalance = (
    {  coinName, percentageChange, coinBalance, fiatBalance }:
        { coinName: string, percentageChange: number, coinBalance: number, fiatBalance: string }
) => {
    const DialogsVisibilityInitState: IDialogs = {
        portfolioDetailsDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const openDialog = (data: IDialogs) => {
        setDialogVisibilityState({ ...dialogsVisibilityState, ...data });
    };
    // onClick={() => openDialog({ portfolioDetailsDialogVisibility: true })}
    return (
        <div>
            <div className="portfolio-list d-flex" >
                <div className="d-flex">
                    <div className="me-2">
                      
                    </div>
                    <div>
                        <div className="coin-name">{coinName}</div>
                        <div className={`percentage-change ${percentageChange > 0 ? 'green' : 'red'}`}>{percentageChange}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end flex-grow-1">
                    <div className="right">
                        <div className="coin-balance text-truncate">{coinBalance}</div>
                    </div>
                </div>

            </div>
            <PortfolioDetails open={dialogsVisibilityState.portfolioDetailsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></PortfolioDetails>
        </div>
    )
}

export default DashboardPortfolioBalance;