import Link from "next/link";
import { useState } from "react";
import BackButton from "../../../../components/back-button/back-button";
import DashboardHeader from "../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../components/dashboard-sidebar/dashboard-sidebar";
import SettingsSupportTickets from "../../../../components/dialogs/settings/support-ticket/support-ticket";
import { ChevronRightIcon } from "../../../../components/icons/icons";
import { IDialogs } from "../../../../shared/interface/global.interface";
import { NextApplicationPage } from "../../../_app";
const Settings: NextApplicationPage = () => {
    const DialogsVisibilityInitState: IDialogs = {
        settingsSupportTicketsDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

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

                                    <Link href='/dashboard/settings/support/contacts'>
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
                                    </Link>
                                    <div className="list" onClick={() => setDialogVisibilityState({
                                        settingsSupportTicketsDialogVisibility: true
                                    })}>
                                        <div className="text">
                                            <div>
                                                <div className="heading">Open Ticket</div>
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
            <SettingsSupportTickets open={dialogsVisibilityState.settingsSupportTicketsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsSupportTickets>
        </div>
    )
}
Settings.requireAuth = true;
export default Settings