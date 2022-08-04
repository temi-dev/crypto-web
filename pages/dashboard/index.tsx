import { NextPage } from "next";
import Link from "next/link";
import DashboardHeader from "../../components/dashboard-header";
import DashboardPortfolioBalance from "../../components/dashboard-portfolio-balance";
import DashboardSidebar from "../../components/dashboard-sidebar";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {
    BellIcon,
    BitCoinFilledIcon,
    CoinSwapIcon,
    DashCoinFilledIcon,
    EtherumFilledIcon,
    ExchangeIcon,
    PaperIcon,
    TetherCoinFilledIcon
} from "../../components/icons";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartConfiguration, LineController
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
import { Chart } from 'react-chartjs-2'

const Dashboard: NextPage = (props) => {
    const rows = [
        {
            id: 12,
            description: "Bitcoin transaction",
            timestamp: "12th Feb, 2022",
            amount: "-$1000",
            status: "Pending"
        },
        {
            id: 12,
            description: "Cash Withdraw",
            timestamp: "12th Feb, 2022",
            amount: "-$1000",
            status: "Success"
        }
    ];

    const labels = [
        'Jan 10',
        'Jan 11',
        'Jan 12',
        'Jan 13',
        'Jan 14',
    ];
    const ChartData = {
        labels: labels,
        datasets: [{
            label: 'Balance',
            backgroundColor: '#1d38e4',
            borderColor: '#1d38e4',

            data: [0, 10, 5, 20, 22],
        }],
        options: {
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        // forces step size to be 50 units
                        stepSize: 20
                    }
                }
            }
        },
    }

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

                        <div className="box-section mt-4">
                            <div className="head d-flex">
                                <div className="title">Portfolio History</div>
                                <div className="d-flex flex-grow-1 justify-content-end">
                                    <Link href="/dashboard">
                                        <a className="view-all">View all</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-2">
                                <Chart type="line" data={ChartData}></Chart>
                            </div>
                        </div>
                        <div className="box-section mt-4">
                            <div className="head d-flex">
                                <div className="title">Recent Transactions</div>
                                <div className="d-flex flex-grow-1 justify-content-end">
                                    <Link href="/dashboard">
                                        <a className="view-all">View all</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-2">
                                <TableContainer component={Paper}>
                                    <Table>

                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell className="transaction-description" >
                                                        {row.description}
                                                    </TableCell>
                                                    <TableCell>{row.timestamp}</TableCell>
                                                    <TableCell>
                                                        <span className="transaction-amount">{row.amount}</span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span className={`transaction-status ${row.status == 'Success' ? 'success' : 'pending'}`}>
                                                            {row.status}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>

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

                            <div className="d-flex mt-5 ctas">
                                <div className="flex-fill ">
                                    <div className="cta">
                                        <CoinSwapIcon color="#936DFF"></CoinSwapIcon>
                                    </div>
                                    <div className="cta-text">Coin Swap</div>
                                </div>
                                <div className="flex-fill ">
                                    <div className="cta">
                                        <PaperIcon color="#22C55E"></PaperIcon>
                                    </div>
                                    <div className="cta-text">Transfer</div>
                                </div>
                                <div className="flex-fill ">
                                    <div className="cta">
                                        <ExchangeIcon color="#FACC15"></ExchangeIcon>
                                    </div>
                                    <div className="cta-text">Convert</div>
                                </div>
                                <div className="flex-fill ">
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
                                <DashboardPortfolioBalance coinIcon={<BitCoinFilledIcon color="white" fillColor="#F7931A"></BitCoinFilledIcon>} coinName="BTC" percentageChange={"+5%"} coinBalance={0.222} fiatBalance={"NGN200,000"} ></DashboardPortfolioBalance>

                                <DashboardPortfolioBalance coinIcon={<EtherumFilledIcon color="white" fillColor="#627EEA"></EtherumFilledIcon>} coinName="ETH" percentageChange={"+2%"} coinBalance={1.222} fiatBalance={"NGN1,000,000"} ></DashboardPortfolioBalance>

                                <DashboardPortfolioBalance coinIcon={<DashCoinFilledIcon color="white" fillColor="#008DE4"></DashCoinFilledIcon>} coinName="DASH" percentageChange={"+5%"} coinBalance={50.222} fiatBalance={"NGN250,000"} ></DashboardPortfolioBalance>

                                <DashboardPortfolioBalance coinIcon={<TetherCoinFilledIcon color="white" fillColor="#53AE94"></TetherCoinFilledIcon>} coinName="TETHER" percentageChange={"+5%"} coinBalance={110.222} fiatBalance={"NGN50,000"} ></DashboardPortfolioBalance>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard