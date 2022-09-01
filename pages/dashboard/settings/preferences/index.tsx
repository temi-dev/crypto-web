import { NextPage } from "next";
import Link from "next/link";
import BackButton from "../../../../components/back-button/back-button";
import DashboardHeader from "../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../components/dashboard-sidebar/dashboard-sidebar";
import { ChevronRightIcon } from "../../../../components/icons/icons";
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
                            <div className="setting-page-header">Preferences</div>

                            <div className="setting-page-content">
                                <div className="settings-list">
                                    <Link href='/dashboard/settings/preferences/currency'>
                                        <div className="list">
                                            <div className="text">
                                                <div>
                                                    <div className="heading">Currency Preference</div>
                                                    <div className="heading-note">NGN</div>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <ChevronRightIcon color="black"></ChevronRightIcon>
                                            </div>

                                        </div>
                                    </Link>
                                    <Link href='/dashboard/settings/preferences/pin'>
                                        <div className="list">
                                            <div className="text">
                                                <div>
                                                    <div className="heading">Transaction Security</div>
                                                    <div className="heading-note">Pin</div>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <ChevronRightIcon color="black"></ChevronRightIcon>
                                            </div>

                                        </div>
                                    </Link>
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