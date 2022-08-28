import { NextPage } from "next";
import NotificationCard from "../../../components/cards/notification/notification";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import Pagination from '@mui/material/Pagination';

const Notifications: NextPage = () => {
    const data = [
        {
            id: '1',
            title: "BTC Sold",
            description: "Sold 0.07027 BTC for NGN 1,708,624.00	",
            timestamp: "12th Feb, 2022",
            amount: "0.07027 BTC",
            type: 'debit'
        },
        {
            id: '2',
            title: 'BTC received',
            description: 'Sold 0.07027 BTC for NGN 1,708,624.00',
            timestamp: "12th Feb, 2022",
            amount: "0.07724 BTC",
            type: 'credit'
        },
        {
            id: '3',
            title: 'Wallet deposit',
            description: "Deposited NGN 100,000 to your wallet",
            timestamp: "12th Feb, 2022",
            amount: "NGN 100,000",
            type: 'deposit'
        }, {
            id: '4',
            title: "BTC Sold",
            description: "Sold 0.07027 BTC for NGN 1,708,624.00	",
            timestamp: "12th Feb, 2022",
            amount: "0.07027 BTC",
            type: 'debit'
        },
        {
            id: '5',
            title: 'BTC received',
            description: 'Sold 0.07027 BTC for NGN 1,708,624.00',
            timestamp: "12th Feb, 2022",
            amount: "0.07724 BTC",
            type: 'credit'
        },
    ];
    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Notifications"></DashboardHeader>
                <div className=" dashboard-inner-content pb-4">
                    <div className="container">
                        <div className="mobile-dashboard-page-title">
                            Notification History
                        </div>
                        {data.map((item) => (
                            <NotificationCard type={item.type} key={item.id} title={item.title} description={item.description} timestamp={item.timestamp} amount={item.amount}></NotificationCard>
                        ))}
                        <div className="pagination">
                            <Pagination count={5} shape="rounded"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Notifications