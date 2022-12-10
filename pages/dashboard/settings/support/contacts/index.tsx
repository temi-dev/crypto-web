import { useState } from "react";
import { useAuth } from "../../../../../components/auth/auth-provider";
import BackButton from "../../../../../components/back-button/back-button";
import DashboardHeader from "../../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../../components/dashboard-sidebar/dashboard-sidebar";
import SettingsMobileMenu from "../../../../../components/dialogs/settings/mobile-menu/mobile-menu";
import SettingsMenuCta from "../../../../../components/setting-menu-cta/settings-menu-cta";
import { IDialogs } from "../../../../../shared/interface/global.interface";
import { NextApplicationPage } from "../../../../_app";
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
                            <div className="setting-page-header">Get in Touch</div>

                            <div className="setting-page-content">
                                <div className="settings-list big-padding">
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">Email Us</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <a href="mailto:hello@kochure.com">Send mail</a>
                                        </div>
                                    </div>
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">Follow us on Twitter</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <a href="https://www.twitter.com/kochureglobal" rel="noreferrer" target='_blank'>Twitter</a>
                                        </div>

                                    </div>
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">Follow us on Facebook </div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <a href="https://web.facebook.com/KochureGlobal" rel="noreferrer" target='_blank'>Facebook</a>
                                        </div>

                                    </div>
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">Follow us on Instagram</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <a href="https://www.instagram.com/kochureglobal/" rel="noreferrer" target='_blank'>Instagram</a>
                                        </div>

                                    </div>
                                    <div className="list" >
                                        <div className="text">
                                            <div>
                                                <div className="heading">Youtube</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <a href="https://youtube.com/kochure" rel="noreferrer" target='_blank'>Instagram</a>
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
            <SettingsMobileMenu open={dialogsVisibilityState.settingsMobileMenuVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsMobileMenu>
        </div>
    )
}
Settings.requireAuth = true;
export default Settings