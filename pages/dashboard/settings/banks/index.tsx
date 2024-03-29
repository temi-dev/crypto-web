import { NextPage } from "next";
import { useState } from "react";
import { useAuth } from "../../../../components/auth/auth-provider";
import BackButton from "../../../../components/back-button/back-button";
import DashboardHeader from "../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../components/dashboard-sidebar/dashboard-sidebar";
import SettingsBanks from "../../../../components/dialogs/settings/banks/banks";
import SettingsCards from "../../../../components/dialogs/settings/cards/cards";
import SettingsMobileMenu from "../../../../components/dialogs/settings/mobile-menu/mobile-menu";
import { ChevronRightIcon } from "../../../../components/icons/icons";
import SettingsMenuCta from "../../../../components/setting-menu-cta/settings-menu-cta";
import { IDialogs } from "../../../../shared/interface/global.interface";
import { NextApplicationPage } from "../../../_app";

const Settings: NextApplicationPage = () => {
    const { user } = useAuth();

    const DialogsVisibilityInitState: IDialogs = {
        settingsBanksDialogVisibility: false,
        settingsCardsDialogVisibility: false,
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
                            <div className="setting-page-header">Banks &#38; Cards</div>

                            <div className="setting-page-content">
                                <div className="settings-list">
                                    <div className="list" onClick={() => setDialogVisibilityState({ settingsBanksDialogVisibility: true })}>
                                        <div className="text">
                                            <div>
                                                <div className="heading">Banks</div>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <ChevronRightIcon color="black"></ChevronRightIcon>
                                        </div>

                                    </div>
                                    <div className="list">
                                        <div className="text">
                                            <div>
                                                <div className="heading">Cards <small>(Coming Soon)</small></div>
                                            </div>
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
            <SettingsBanks open={dialogsVisibilityState.settingsBanksDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsBanks>
            <SettingsCards open={dialogsVisibilityState.settingsCardsDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsCards>
            <SettingsMobileMenu open={dialogsVisibilityState.settingsMobileMenuVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsMobileMenu>
        </div>
    )
}
Settings.requireAuth = true;
export default Settings