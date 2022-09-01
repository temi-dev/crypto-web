import { NextPage } from "next";
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
                            <div className="setting-page-header">Help &#38; Support</div>

                            <div className="setting-page-content">
                                <div className="settings-list">
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">Get in Touch</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <ChevronRightIcon color="black"></ChevronRightIcon>
                                        </div>

                                    </div>
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">Support tickets</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <ChevronRightIcon color="black"></ChevronRightIcon>
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