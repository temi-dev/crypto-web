
import DashboardHeader from "../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../components/dashboard-sidebar/dashboard-sidebar";
import { ChevronRightIcon } from "../../../../components/icons/icons";
import Link from "next/link";
import BackButton from "../../../../components/back-button/back-button";
import { useAuth } from "../../../../components/auth/auth-provider";
import { useState } from "react";
import SettingsMobileMenu from "../../../../components/dialogs/settings/mobile-menu/mobile-menu";
import SettingsMenuCta from "../../../../components/setting-menu-cta/settings-menu-cta";
import { IDialogs } from "../../../../shared/interface/global.interface";
import { NextApplicationPage } from "../../../_app";

const Settings: NextApplicationPage = () => {
    const { user } = useAuth();
    const DialogsVisibilityInitState: IDialogs = {
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const openMobileMenu = () =>{
        setDialogVisibilityState({ ...dialogsVisibilityState, settingsMobileMenuVisibility: true })
    }
    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Account Settings"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-lg-4 settings-left">
                      
                        <DashboardSettingsSidebar></DashboardSettingsSidebar>

                    </div>
                    <div className="col-lg-8">
                        <div className="settings-container">
                        <SettingsMenuCta cta={openMobileMenu}></SettingsMenuCta>
                            <div className="setting-page-header">Security</div>

                            <div className="setting-page-content">
                                <div className="settings-list">
                                    <Link href='/dashboard/settings/security/change-password'>
                                        <div className="list">
                                            <div className="text">
                                                <div>
                                                    <div className="heading">Change Password</div>
                                                    <div className="heading-note">Change your previous password to a new one</div>
                                                </div>
                                            </div>
                                            <div className="action">
                                                <ChevronRightIcon color="black"></ChevronRightIcon>
                                            </div>

                                        </div>
                                    </Link>
                                    <Link href='/dashboard/settings/security/change-pin'>
                                        <div className="list">
                                            <div className="text">
                                                <div>
                                                    <div className="heading">Change Pin</div>
                                                    <div className="heading-note">Change your transaction pin</div>
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
            <SettingsMobileMenu open={dialogsVisibilityState.settingsMobileMenuVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsMobileMenu>
        </div>
    )
}
Settings.requireAuth = true
export default Settings