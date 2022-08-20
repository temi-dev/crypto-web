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
            name: "Coin Pair",
            options: {
                filter: false,
                customBodyRender: (value: any, tableMeta: any, updateValue: any) => {
                    return <Typography key={tableMeta.index}>{value}</Typography>
                  }
            }
        },
        "Coin",
        "Last Price",
        {
            name: "24 Hours Change",
            options: {
                filter: false,
            }
        },
        "High 24 Hours",
        "Low 24 Hours",
        {
            name: "Market Trend",
            options: {
                filter: false,
            }
        }
    ];

    const [responsive, setResponsive] = useState("vertical");
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
        [
            <div>
                <BitCoinFilledIcon color="white" fillColor="#F7931A"></BitCoinFilledIcon>
                <span className="coin-pair">BTC / <span>USD</span></span>
            </div>,
            "Bitcoin",
            '$580.000',
            <span>+0.37%</span>,
            '$680.000',
            '$680.000',
            <GraphUp></GraphUp>
        ],
        [
            <div>
                <EtherumFilledIcon color="white" fillColor="#627EEA"></EtherumFilledIcon>
                <span className="coin-pair">ETH / <span>USD</span></span>
            </div>,
            "Etherum",
            '$580.000',
            <span>+0.37%</span>,
            '$680.000',
            '$680.000',
            <GraphDown></GraphDown>

        ]
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