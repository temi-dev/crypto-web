import { BellIcon, CheckFilledIcon, ChevronDownIcon, LogoutOutlineIcon, MenuBarFilledIcon, SettingsIcon, UserOutlineIcon } from "../icons/icons"
import React, { useEffect, useState } from 'react';
import { Button, ListItemIcon, ListItemText } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import BuySell from "../dialogs/buy-sell/buy-sell";
import { IDialogs } from "../../shared/interface/global.interface";
import MobileSideBar from "../dialogs/mobile-side-bar/side-bar";
import { useAppContext } from "../../shared/contexts/app.context";
import SendReceive from "../dialogs/send-receive/send-receive";
import { Auth } from "../auth/auth";
import { useAuth } from "../auth/auth-provider";
import PortfolioDetails from "../dialogs/portfolio/details/details";
const auth = new Auth();

const DashboardHeader = ({ title }: { title: string }) => {
    const { user } = useAuth()
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
        sideBarDialogVisibitlity: false
    }
    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const [appState, setAppState] = useAppContext()

    let d: any
    const [state, setState] = useState(d);

    useEffect(() => {
        if (user) {
            const data = {
                profilePicture: user!.dp_uploaded_at ? `${process.env.apiUrl}/static/profile_pics/${user!.username}/dp.png` : '/images/placeholder-profile.png'
            }

            setState(data)
        }
    }, [user])
    return (
        <div>

            <div className="header d-none px-3 d-lg-flex">
                <div className="title">{title}</div>
                <div className="d-flex flex-grow-1  align-items-center justify-content-end">
                    <button className="btn d-none d-lg-block btn-primary" onClick={() =>
                        setAppState({
                            ...appState,
                            dialogStates: {
                                buySellDialog: { visibitlity: true }
                            }
                        })
                    }>Buy / Sell</button>
                    <button className="btn d-none d-lg-block btn-secondary" onClick={() =>
                        setAppState({
                            ...appState,
                            dialogStates: {
                                sendReceive: { visibitlity: true }
                            }
                        })
                    }>Send / Receive</button>

                    <button onClick={openProfileMenu} className="profile-menu align-items-center d-flex">
                        <div className="profile-image " style={{ backgroundImage: "url(" + state?.profilePicture + ")" }}></div>
                        <div className="profile-name">{user?.fname}</div>
                        <div className="profile-menu-nav ms-2">
                            <ChevronDownIcon color="#718096"></ChevronDownIcon>
                        </div>
                    </button>
                </div>
            </div>

            <div className="header d-block d-lg-none">
                <div className="d-flex">
                    <div className="mobile-menu-bar">
                        <button onClick={() => setDialogVisibilityState({ sideBarDialogVisibitlity: true })}>
                            <MenuBarFilledIcon color="#18181B" fillColor="#EEEEEE"></MenuBarFilledIcon>
                        </button>
                    </div>
                    <div className="d-flex flex-grow-1  align-items-center justify-content-end">
                        <button onClick={openProfileMenu} className="profile-menu align-items-center d-flex">
                            <div className="profile-image " style={{ backgroundImage: "url(" + state?.profilePicture + ")" }}></div>
                        </button>
                    </div>
                </div>
            </div>

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
                    <div className="name">{user?.fname} {user?.lname}</div>
                    <div className="email">{user?.email}</div>
                </div>
                <MenuItem onClick={closeProfileMenu}>
                    <ListItemIcon>
                        <UserOutlineIcon color="#A0AEC0"></UserOutlineIcon>
                    </ListItemIcon>
                    <ListItemText>
                        <Link href='/dashboard/settings'>
                            <span className="menu-item">Your Details</span>
                        </Link>
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={() => auth.signOut()}>
                    <ListItemIcon>
                        <LogoutOutlineIcon color="#A0AEC0"></LogoutOutlineIcon>
                    </ListItemIcon>
                    <ListItemText ><span className="menu-item">Logout</span></ListItemText>
                </MenuItem>
            </Menu>

            <BuySell></BuySell>
            <SendReceive></SendReceive>

            <MobileSideBar open={dialogsVisibilityState.sideBarDialogVisibitlity!} setVisibilityState={setDialogVisibilityState}></MobileSideBar>
            <PortfolioDetails open={dialogsVisibilityState.portfolioDetailsDialog?.visibitlity!} setVisibilityState={setDialogVisibilityState}></PortfolioDetails>

        </div>
    )
}

export default DashboardHeader