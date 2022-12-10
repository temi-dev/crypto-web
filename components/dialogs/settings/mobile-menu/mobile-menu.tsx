import { Dialog } from "@mui/material"
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { User } from "../../../auth/auth";
import DashboardHeader from "../../../dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../dashboard-settings-sidebar/dashboard-settings-sidebar";
import styles from './mobile-menu.module.css';


const SettingsMobileMenu = ({ open, setVisibilityState}: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>}) => {
    
    const handleDialogClose = () => {
        setVisibilityState({ settingsMobileMenuVisibility: false });
    };
    return (
        <div>
            <Dialog open={open ? open : false} className=" settings-mobile-menu" onClose={handleDialogClose} fullScreen>
                <DashboardHeader title="Account Settings"></DashboardHeader>
                <div className={styles.content}>
                    <DashboardSettingsSidebar isMobile={open} setVisibility={setVisibilityState}></DashboardSettingsSidebar>
                </div>
            </Dialog>
        </div>
    )
}

export default SettingsMobileMenu