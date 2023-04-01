import { useState } from "react";
import { useAppContext } from "../../shared/contexts/app.context";
import { IDialogs } from "../../shared/interface/global.interface";
import PortfolioDetails from "../dialogs/portfolio/details/details";

const DashboardPortfolioBalance = (
    {  coinName, percentageChange, coinBalance,  price }:
        { coinName: string, percentageChange: number, coinBalance: number,  price: string }
) => {
    const [appState, setAppState] = useAppContext();

    return (
        <div>
            <div className="portfolio-list d-flex" onClick={() =>{
                setAppState({
                    ...appState,
                    dialogStates: {
                        portfolioDetailsDialog: {
                            visibitlity: true,
                            coin: coinName,
                            price
                        }
                    }
                })
            }}>
                <div className="d-flex">
                    <div className="me-2">
                      
                    </div>
                    <div>
                        <div className="coin-name">{coinName}</div>
                        <div className={`percentage-change ${percentageChange >= 0 ? 'green' : 'red'}`}>{percentageChange}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end flex-grow-1">
                    <div className="right">
                        <div className="coin-balance text-truncate">{coinBalance}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardPortfolioBalance;