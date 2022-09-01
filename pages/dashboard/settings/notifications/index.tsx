import { Switch } from "@mui/material";
import { NextPage } from "next";
import BackButton from "../../../../components/back-button/back-button";
import DashboardHeader from "../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../components/dashboard-sidebar/dashboard-sidebar";
const Settings: NextPage = () => {
    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Account Settings"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-lg-4 settings-left">
                        <div className="mobile-dashboard-page-title">
                            Account Settings
                        </div>

                        <DashboardSettingsSidebar></DashboardSettingsSidebar>

                    </div>
                    <div className="col-lg-8">
                        <div className="container">
                            <div className="setting-page-header">Notifications</div>

                            <div className="setting-page-content">
                                <div className="settings-list">

                                    <div className="list">
                                        <div className="text">
                                            <div>
                                                <div className="heading">Alerts</div>
                                                <div className="heading-note">Manage alerts sent when you change account information, or when you have discounts or special offers.</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <Switch defaultChecked />
                                        </div>
                                    </div>
                                    <div className="list">
                                        <div className="text">
                                            <div>
                                                <div className="heading">Successfull Payments </div>
                                                <div className="heading-note">Receive a notifications for every successfull payments.</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <Switch defaultChecked />
                                        </div>
                                    </div>
                                    <div className="list">
                                        <div className="text">
                                            <div>
                                                <div className="heading">Application Fees </div>
                                                <div className="heading-note">Receive a notifications each time you collect a fee form a Account.</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <Switch />
                                        </div>
                                    </div>
                                    <div className="list">
                                        <div className="text">
                                            <div>
                                                <div className="heading">Payment Reviews</div>
                                                <div className="heading-note">Receive a notifications if a payment is marked as elevated risk .</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <Switch />
                                        </div>
                                    </div>
                                    <div className="list">
                                        <div className="text">
                                            <div>
                                                <div className="heading">Bank Accounts</div>
                                                <div className="heading-note">Receive a notifications for important changes to your bank accounts or for micro-deposit verifications related events.</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <Switch />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-submit">
                                    <BackButton></BackButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings