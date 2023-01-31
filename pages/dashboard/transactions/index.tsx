import { NextPage } from "next";
import NotificationCard from "../../../components/cards/notification/notification";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import Pagination from '@mui/material/Pagination';
import useCustomSnackbar from "../../../components/snackbar/use-custom-snackbar";
import { useEffect, useState } from "react";
import { getTransactionsList } from "../../../shared/services/dashboard/transactions/transaction";
import DashboardTransactionList from "../../../components/dashboard-transaction-list/dashboard-transaction-list";

const Transactions: NextPage = () => {
    interface IComponentData {
        transactions: Array<any>,
        loadingTransactions?: boolean
    }

    const snackbar = useCustomSnackbar();
    const initComponentData: IComponentData = {
        transactions: [],
        loadingTransactions: true
    }
    const [componentData, setComponentData] = useState(initComponentData);

    const setData = (data: IComponentData) => {
        setComponentData({ ...componentData, ...data })
    }

    const getTransactions = async () => {
        const request = await getTransactionsList();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            setData({
                transactions: request.data.data
            })
        }
    }

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Transactions"></DashboardHeader>
                <div className=" dashboard-inner-content pb-4">
                    <div className="container">
                        <div className="mobile-dashboard-page-title">
                            Transactions
                        </div>
                        <div>
                            <DashboardTransactionList mode="all" data={componentData.transactions}></DashboardTransactionList>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transactions