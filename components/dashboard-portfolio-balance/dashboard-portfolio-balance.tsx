const DashboardPortfolioBalance = (
    {coinIcon, coinName, percentageChange, coinBalance, fiatBalance }:
        {coinIcon: any, coinName: string, percentageChange: string, coinBalance: number, fiatBalance: string }
) => {
    return (
        <div className="portfolio-list d-flex">
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
    )
}

export default DashboardPortfolioBalance;