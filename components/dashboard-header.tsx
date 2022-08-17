import { ActivityFilledIcon, ArrowLeftIcon, BellIcon, BitCoinFilledIcon, CheckCircleFilledIcon, CheckFilledIcon, ChevronDownIcon, DownloadFilledIcon, EtherumFilledIcon, LogoutOutlineIcon, SettingsIcon, UserOutlineIcon, WalletDebitFilledIcon, WalletDepositFilledIcon } from "./icons"
import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, FormControl, InputLabel, ListItemIcon, ListItemText, Select, SelectChangeEvent, Tab, Tabs, TextField } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


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




    const theme = useTheme();


    interface IBuyFormData {
        coin?: string,
        step: number,
        action?: string,
        currency?: string
    }
    const buyFormdata: IBuyFormData = {
        coin: 'bitcoin',
        step: 1,
        currency: 'NGN'
    }
    const [buyForm, setBuyForm] = React.useState({ ...buyFormdata });

    const handleSetBuyForm = (data: object) => {
        setBuyForm({ ...buyForm, ...data });

    };

    const [buySellDialogVisibilityState, setBuySellDialogVisibilityState] = React.useState(false);

    const handleBuySellDialogOpen = () => {
        setBuySellDialogVisibilityState(true);
    };

    const handleBuySellDialogClose = () => {
        if (buyForm.step == 5) handleSetBuyForm({ step: 1 })
        setBuySellDialogVisibilityState(false);
    };

    return (
        <div className="header px-3 d-flex">
            <div className="title">{title}</div>
            <div className="d-flex flex-grow-1  align-items-center justify-content-end">
                <button className="btn d-none d-lg-block btn-primary" onClick={handleBuySellDialogOpen}>Buy / Sell</button>
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
                            <Link href={'/dashboard/notifications'}>See all Notifications</Link>
                        </div>
                        <div>
                            <Link href={'/dashboard/settings'}>
                                <div>
                                    <SettingsIcon color="#A0AEC0"></SettingsIcon>
                                </div>
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

            <Dialog fullWidth maxWidth='xs' open={buySellDialogVisibilityState} onClose={handleBuySellDialogClose}>
                <div className="p-4">
                    {
                        buyForm.step == 1 && (
                            <div className="buy-sell-action-picker">
                                <div className="buy" onClick={() => {
                                    handleSetBuyForm({ step: 2, action: 'buy' })
                                }}>
                                    <div className="my-2">
                                        <WalletDepositFilledIcon fillColor='#FAFAFA' color='#194BFB'></WalletDepositFilledIcon>
                                    </div>
                                    <div>Buy</div>
                                </div>
                                <div className="sell" onClick={() => {
                                    handleSetBuyForm({ step: 2, action: 'sell' })
                                }}>
                                    <div className="my-2">
                                        <WalletDebitFilledIcon fillColor='#FAFAFA' color='#194BFB'></WalletDebitFilledIcon>
                                    </div>
                                    <div>Sell</div>
                                </div>
                            </div>
                        )
                    }
                    {
                        buyForm.step == 2 && (
                            <div>
                                <div className="mb-3 back-nav" onClick={() => handleSetBuyForm({ step: 1 })}>
                                    <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                </div>

                                <div>
                                    <label className="form-label">Select a digital currency to {buyForm.action}</label>
                                    <Select
                                        className="form-control-select w-100"
                                        disableUnderline
                                        displayEmpty
                                        variant='standard'
                                        value={buyForm.coin}
                                        label="Coin"
                                        onChange={(event) => handleSetBuyForm({ coin: event.target.value })}>
                                        <MenuItem value='bitcoin' className="currency-menu-item">
                                            <div className="d-flex">
                                                <div>
                                                    <BitCoinFilledIcon fillColor="#F7931A" color="white"></BitCoinFilledIcon>
                                                </div>
                                                <div className="mx-2">
                                                    <span className="">Bitcoin</span>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem value='etherum' className="currency-menu-item">
                                            <div className="d-flex">
                                                <div>
                                                    <EtherumFilledIcon color="white" fillColor="#627EEA"></EtherumFilledIcon>
                                                </div>
                                                <div className="mx-2">
                                                    <span className="">Etherum</span>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </Select>
                                </div>

                                <div className="mt-3">
                                    <label className="form-label">How much would you like to {buyForm.action} ?</label>
                                    <TextField
                                        className="amount-field"
                                        variant="standard"
                                        placeholder="Enter amount"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            startAdornment: (
                                                <Select
                                                    disableUnderline
                                                    displayEmpty
                                                    variant='standard'
                                                    value={buyForm.currency}
                                                    className="currency-selector"
                                                    label="Currency">
                                                    <MenuItem value='NGN'>
                                                        <span>NGN</span>
                                                    </MenuItem>
                                                    <MenuItem value='USD'>
                                                        <span>USD</span>
                                                    </MenuItem>
                                                </Select>
                                            ),
                                        }}
                                    />

                                </div>

                                <div className="form-coin-wallet-balance">
                                    <div className="balance-header">Total Balance</div>
                                    <div className="content">
                                        <div className="fiat-balance">
                                            <div>
                                                <div className="naira-balance">₦200,000.00</div>
                                                <div className="usd-balance">USD 500</div>
                                            </div>
                                        </div>
                                        <div className="coin-balance">
                                            <span>0.01074701</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 mb-3">
                                    <button onClick={() => handleSetBuyForm({ step: 3 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                </div>
                            </div>
                        )
                    }
                    {
                        buyForm.step == 3 && (
                            <div className="buy-sell-confirmation">
                                <div className="mb-3 back-nav" onClick={() => handleSetBuyForm({ step: 2 })}>
                                    <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                </div>
                                <div className="heading">Confirmation</div>
                                <div className="content">
                                    <div className="text-center">
                                        <BitCoinFilledIcon fillColor="#FF930F" color="white"></BitCoinFilledIcon>
                                    </div>
                                    <div className="transaction-details">
                                        <div className="transaction-details-heading">Transaction Details</div>
                                        <div className="data">
                                            <div className="item">
                                                <div className="title">
                                                    Date
                                                </div>
                                                <div className="value">
                                                    20 August, 2021
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="title">
                                                    Time
                                                </div>
                                                <div className="value">
                                                    06:40PM
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="title">
                                                    Amount
                                                </div>
                                                <div className="value">
                                                    NGN500,000.00
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="title">
                                                    Fee
                                                </div>
                                                <div className="value">
                                                    NGN 5.00
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="title">
                                                    You Get
                                                </div>
                                                <div className="value">
                                                    0.0001
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button onClick={() => handleSetBuyForm({ step: 4 })} className='btn btn-radius w-100 btn-primary'>Confirm</button>
                                </div>
                            </div>
                        )
                    }
                    {
                        buyForm.step == 4 && (
                            <div className="dialog-page">
                                <div className="mb-3 back-nav" onClick={() => handleSetBuyForm({ step: 3 })}>
                                    <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                </div>
                                <div className="heading">Enter your pin</div>
                                <div className="content text-center">
                                    <TextField
                                        className="form-control-2 pin-field"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        className="form-control-2 pin-field"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        className="form-control-2 pin-field"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        className="form-control-2 pin-field"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        variant="standard"
                                    />
                                    <TextField
                                        className="form-control-2 pin-field"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        variant="standard"
                                    />
                                </div>
                                <div className="mt-5">
                                    <button onClick={() => handleSetBuyForm({ step: 5 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                </div>
                            </div>
                        )
                    }
                    {
                        buyForm.step == 5 && (
                            <div className="dialog-page">
                                <div className="heading">Success</div>
                                <div className="heading-note">Transaction successful</div>
                                <div className="content text-center">
                                    <CheckCircleFilledIcon color="white" fillColor="#1D38E4"></CheckCircleFilledIcon>
                                </div>
                                <div className="mb-3">
                                    <button onClick={handleBuySellDialogClose} className='btn btn-radius w-100 btn-primary'>Okay</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </Dialog>
        </div>
    )
}

export default DashboardHeader