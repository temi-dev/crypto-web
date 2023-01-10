import { NextPage } from "next";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { BitCoinFilledIcon, EtherumFilledIcon, GraphDown, GraphUp } from "../../../components/icons/icons";
import { IDialogs } from "../../../shared/interface/global.interface";
import PortfolioDetails from "../../../components/dialogs/portfolio/details/details";
import { Typography } from "@mui/material";
import { NextApplicationPage } from "../../_app";
import { getMarketData } from "../../../shared/services/dashboard/market/market";
import useCustomSnackbar from "../../../components/snackbar/use-custom-snackbar";

const Market: NextApplicationPage = () => {

    interface IMarketRowData {
        coinPair: () => JSX.Element;
        coin: string;
        key: string;
        lastPrice: number;
        hoursChange: () => JSX.Element;
        marketTrend: () => JSX.Element
    }

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
        },
        onRowClick: (rowData: any[], rowMeta: { dataIndex: number, rowIndex: number }) => {
            setDialogVisibilityState({ portfolioDetailsDialogVisibility: true })
        }
    };

    const data: any = [
    ];

    const [state, setState] = useState({ data })

    const snackbar = useCustomSnackbar();

    const getData = async () => {
        const request = await getMarketData();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            let rows: IMarketRowData[] = []
            request.data.data.forEach((element: any) => {
                rows.push({
                    coinPair: () => {
                        return (
                            <div>
                                {/* <BitCoinFilledIcon color="white" fillColor="#F7931A"></BitCoinFilledIcon> */}
                                <span className="coin-pair">{element.coin} / <span>USD</span></span>
                            </div>
                        )
                    },
                    coin: element.name,
                    key: element.coin,
                    lastPrice: element.price,
                    hoursChange: () => {
                        return (
                            <div>
                                {
                                    element._24hrs >= 0 &&
                                    (
                                        <span className="market-green">{element._24hrs}</span>
                                    )
                                }
                                {
                                    element._24hrs < 0 &&
                                    (
                                        <span className="market-red">{element._24hrs}</span>
                                    )
                                }
                            </div>

                        )
                    },
                    marketTrend: () => {
                        return (
                            <div>
                                {
                                    element._24hrs >= 0 &&
                                    (
                                        <GraphUp></GraphUp>
                                    )
                                }
                                {
                                    element._24hrs < 0 &&
                                    (
                                        <GraphDown></GraphDown>
                                    )
                                }
                            </div>
                        )
                    }
                })
            })
            setState({ data: rows })
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Market"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="container">
                        <div className="mobile-dashboard-page-title">
                            Market
                        </div>
                        <div className="market-table">
                            <div className="martket-data-filter">
                                <button className="active">All</button>
                            </div>
                            <MUIDataTable
                                data={state.data}
                                columns={columns}
                                options={options}
                                title={undefined} />
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioDetails open={dialogsVisibilityState.portfolioDetailsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></PortfolioDetails>
        </div>
    )
}

Market.requireAuth = true
export default Market