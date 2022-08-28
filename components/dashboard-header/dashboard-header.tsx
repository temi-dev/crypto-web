import { BellIcon, CheckFilledIcon, ChevronDownIcon, LogoutOutlineIcon, MenuBarFilledIcon, SettingsIcon, UserOutlineIcon } from "../icons/icons"
import React, { useState } from 'react';
import { Button, ListItemIcon, ListItemText } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import BuySell from "../dialogs/buy-sell/buy-sell";
import { IDialogs } from "../../shared/interface/global.interface";
import MobileSideBar from "../dialogs/side-bar/side-bar";


const DashboardHeader = ({ title }: { title: string }) => {

    const [profileMenu, setProfileMenu] = React.useState<null | HTMLElement>(null);
    const profileMenuState = Boolean(profileMenu);

    const openProfileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setProfileMenu(event.currentTarget);
    };

    const closeProfileMenu = () => {
        setProfileMenu(null);
    };

    const [notificationsMenu, setNotificationsMenu] = React.useState<null | HTMLElement>(null);
    const notificationsMenuState = Boolean(notificationsMenu);

    const openNotificationsMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setNotificationsMenu(event.currentTarget);
    };

    const closeNotificationsMenu = () => {
        setNotificationsMenu(null);
    };

    const DialogsVisibilityInitState: IDialogs = {
        buySellDialogVisibitlity: false,
        sideBarDialogVisibitlity: false
    }
    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    return (
        <div>

            <div className="header d-none px-3 d-lg-flex">
                <div className="title">{title}</div>
                <div className="d-flex flex-grow-1  align-items-center justify-content-end">
                    <button className="btn d-none d-lg-block btn-primary" onClick={() => setDialogVisibilityState({ buySellDialogVisibitlity: true })}>Buy / Sell</button>
                    <button className="btn d-none d-lg-block btn-secondary">Send / Receive</button>
                    <button className="notification-btn" onClick={openNotificationsMenu}>
                        <BellIcon color="black"></BellIcon>
                    </button>
                    <button onClick={openProfileMenu} className="profile-menu align-items-center d-flex">
                        <div className="profile-image " style={{ backgroundImage: "url(" + "/images/profile.png" + ")" }}></div>
                        <div className="profile-name">Oluwayemi</div>
                        <div className="profile-menu-nav ms-2">
                            <ChevronDownIcon color="#718096"></ChevronDownIcon>
                        </div>
                    </button>
                </div>
            </div>

            <div className="header d-block d-lg-none">
                <div className="d-flex">
                    <div className="mobile-menu-bar">
                        <button onClick={() => setDialogVisibilityState({ sideBarDialogVisibitlity: true }) }>
                            <MenuBarFilledIcon color="#18181B" fillColor="#EEEEEE"></MenuBarFilledIcon>
                        </button>
                    </div>
                    <div className="d-flex flex-grow-1  align-items-center justify-content-end">
                        <button className="notification-btn" onClick={openNotificationsMenu}>
                            <BellIcon color="black"></BellIcon>
                        </button>
                        <button onClick={openProfileMenu} className="profile-menu align-items-center d-flex">
                            <div className="profile-image " style={{ backgroundImage: "url(" + "/images/profile.png" + ")" }}></div>
                        </button>
                    </div>
                </div>
            </div>

            <Menu
                id="notifications-menu"
                anchorEl={notificationsMenu}
                open={notificationsMenuState}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={closeNotificationsMenu}>
                <div>
                    <div className="heading d-flex">
                        <div className="text">Notifications</div>
                        <div className="d-flex flex-grow-1 justify-content-end">
                            <Button>
                                <CheckFilledIcon color="#194BFB"></CheckFilledIcon>
                                <span className="d-inline-block mx-2">Mark as Read</span>
                            </Button>
                        </div>

                    </div>
                    <div id="content">
                        <div className="section-headline">
                            Today
                        </div>
                        <div className="notification">
                            <div>
                                <div className="notification-image" style={{ backgroundImage: "url(" + "/images/profile.png" + ")" }}></div>
                            </div>
                            <div className="notification-content">
                                <div className="notification-heading">Bolade Temmy</div>
                                <div className="notification-note">
                                    Sent <span className="amount" >$500.00</span> to your wallet
                                </div>
                                <div className="notification-timestamp">2 mins ago</div>
                            </div>
                        </div>
                    </div>
                    <div id='footer'>
                        <div>
                            <Link href='/dashboard/notifications'>See all Notifications</Link>
                        </div>
                        <div>
                            <Link href='/dashboard/settings' passHref>
                                <SettingsIcon color="#A0AEC0"></SettingsIcon>
                            </Link>
                        </div>
                    </div>
                </div>
            </Menu>

            <Menu
                id="profile-menu"
                anchorEl={profileMenu}
                open={profileMenuState}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={closeProfileMenu}>
                <div className="profile-menu-name">
                    <div className="name">Oluwayemi Akin</div>
                    <div className="email">akinolayemi100@gmail.com</div>
                </div>
                <MenuItem onClick={closeProfileMenu}>
                    <ListItemIcon>
                        <UserOutlineIcon color="#A0AEC0"></UserOutlineIcon>
                    </ListItemIcon>
                    <ListItemText><span className="menu-item">Your Details</span></ListItemText>
                </MenuItem>
                <MenuItem onClick={closeProfileMenu}>
                    <ListItemIcon>
                        <SettingsIcon color="#A0AEC0"></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText><span className="menu-item">Account Settings</span></ListItemText>
                </MenuItem>
                <MenuItem onClick={closeProfileMenu}>
                    <ListItemIcon>
                        <LogoutOutlineIcon color="#A0AEC0"></LogoutOutlineIcon>
                    </ListItemIcon>
                    <ListItemText><span className="menu-item">Logout</span></ListItemText>
                </MenuItem>
            </Menu>

            <BuySell open={dialogsVisibilityState.buySellDialogVisibitlity!} setVisibilityState={setDialogVisibilityState} ></BuySell>

            <MobileSideBar open={dialogsVisibilityState.sideBarDialogVisibitlity!} setVisibilityState={setDialogVisibilityState}></MobileSideBar>
        </div>
    )
}

export default DashboardHeader