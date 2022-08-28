import { NextPage } from "next";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import MUIDataTable from "mui-datatables";
import { BitCoinFilledIcon, EtherumFilledIcon, GraphDown, GraphUp } from "../../../components/icons/icons";
import { IDialogs } from "../../../shared/interface/global.interface";
import PortfolioDetails from "../../../components/dialogs/portfolio/details/details";
import { Typography } from "@mui/material";

const Market: NextPage = () => {

    const DialogsVisibilityInitState: IDialogs = {
        portfolioDetailsDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const columns = [
        {
            name: "coinPair",
            label: "Coin Pair",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({
                    style: {
                        whiteSpace: "nowrap",
                        position: "sticky",
                        left: "0",
                        background: "white",
                        zIndex: 100
                    }
                }),
                setCellHeaderProps: () => ({
                    style: {
                        whiteSpace: "nowrap",
                        position: "sticky",
                        left: 0,
                        background: "white",
                        zIndex: 101
                    }
                })
            }
        },
        {
            name: "coin",
            label: "Coin",
            options: {
                filter: true,

            }
        },
        {
            name: "lastPrice",
            label: "Last Price",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({
                    style: {
                        minWidth: "100px"
                    }
                }),
                setCellHeaderProps: () => ({
                    style: {
                        minWidth: "100px"
                    }
                })
            }
        },
        {
            name: "hoursChange",
            label: "24 Hours Change",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                }),
                setCellHeaderProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                })
            }
        },
        {
            name: "high24Hours",
            label: "High 24 Hours",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                }),
                setCellHeaderProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                })
            }
        },
        {
            name: "low24Hours",
            label: "Low 24 Hours",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                }),
                setCellHeaderProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                })
            }
        },
        {
            name: "marketTrend",
            label: "Market Trend",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                }),
                setCellHeaderProps: () => ({
                    style: {
                        minWidth: "150px"
                    }
                })
            }
        }
    ];

    const [responsive, setResponsive] = useState("horizontal");
    const [viewColumnBtn, setViewColumnBtn] = useState(true);
    const [filterBtn, setFilterBtn] = useState(true);

    const options: any = {
        viewColumns: viewColumnBtn,
        filter: filterBtn,
        filterType: "dropdown",
        responsive,
        print: false,
        selectableRows: false,
        searchAlwaysOpen: true,
        searchOpen: true,
        search: true,
        download: false,
        onTableChange: (action: any, state: any) => {
            console.log(action);
            console.dir(state);
        },
        onRowClick: (rowData: any[], rowMeta: { dataIndex: number, rowIndex: number }) => {
            setDialogVisibilityState({ portfolioDetailsDialogVisibility: true })
        }
    };

    const data = [
        {
            coinPair: () => {
                return (
                    <div>
                        <BitCoinFilledIcon color="white" fillColor="#F7931A"></BitCoinFilledIcon>
                        <span className="coin-pair">BTC / <span>USD</span></span>
                    </div>
                )
            },
            coin: 'Bitcoin',
            key: 1,
            lastPrice: '$680.000',
            hoursChange: () => {
                return (
                    <span>+0.37%</span>
                )
            },
            high24Hours: '$680.000',
            low24Hours: '$680.000',
            marketTrend: <GraphUp></GraphUp>

        },
        {
            coinPair: () => {
                return (
                    <div>
                        <EtherumFilledIcon color="white" fillColor="#627EEA"></EtherumFilledIcon>
                        <span className="coin-pair">ETH / <span>USD</span></span>
                    </div>
                )
            },
            coin: 'Etherum',
            key: 2,
            lastPrice: '$80.000',
            hoursChange: () => {
                return (
                    <span>+0.37%</span>
                )
            },
            high24Hours: '$80.000',
            low24Hours: '$80.000',
            marketTrend: <GraphDown></GraphDown>

        }
    ];

    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Market"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="market-table">
                        <div className="martket-data-filter">
                            <button className="active">All</button>
                            <button>Top Gainers</button>
                            <button>Top Losers</button>
                        </div>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                            title={undefined} />
                    </div>
                </div>
                <PortfolioDetails open={dialogsVisibilityState.portfolioDetailsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></PortfolioDetails>
            </div>
        </div>
    )
}

export default Market