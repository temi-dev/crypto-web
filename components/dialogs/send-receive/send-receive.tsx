import { Dialog, Select, MenuItem, TextField, FormGroup, FormControl } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useAppContext } from "../../../shared/contexts/app.context";
import { WalletDepositFilledIcon, WalletDebitFilledIcon, ArrowLeftIcon, BitCoinFilledIcon, EtherumFilledIcon, CheckCircleFilledIcon, WalletSendIcon, WalletReceiveIcon, WalletAddIcon, WalletAddressIcon, CopyIcon } from "../../icons/icons";

const SendReceive = () => {

    const [appState, setAppState] = useAppContext()

    const action = appState.dialogStates!.sendReceive?.action!
    const step = appState.dialogStates!.sendReceive?.step! || 1

    interface IFormData {
        coin?: string,
        step?: number,
        currency?: string
    }

    const formData: IFormData = {
        coin: 'bitcoin',
        step: action ? 2 : 1,
        currency: 'NGN'
    }

    const [buyForm, setBuyForm] = useState({ ...formData });

    const handleSetBuyForm = (data: object) => {
        setBuyForm({ ...buyForm, ...data });
    };

    const handleDialogClose = () => {
        setAppState({ dialogStates: { sendReceive: { visibitlity: false } } });
    };

    const navigate = (step: number) => {
        setAppState({
            dialogStates: {
                sendReceive: {
                    ...appState.dialogStates?.sendReceive,
                    step
                }
            }
        })
    }

    return (
        <Dialog fullWidth maxWidth='xs' open={appState.dialogStates?.sendReceive?.visibitlity! || false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast p-4">
                {
                    step == 1 && (
                        <div className="dailog-action-picker">
                            <div className="send" onClick={() => {
                                setAppState({
                                    dialogStates: {
                                        sendReceive: {
                                            ...appState.dialogStates?.sendReceive,
                                            action: 'send',
                                            step: 2
                                        }
                                    }
                                })
                            }}>
                                <div className="my-2">
                                    <span className="icon-holder">
                                        <WalletSendIcon color='#194BFB'></WalletSendIcon>
                                    </span>
                                </div>
                                <div>Send</div>
                            </div>
                            <div className="receive" onClick={() => {
                                setAppState({
                                    dialogStates: {
                                        sendReceive: {
                                            ...appState.dialogStates?.sendReceive,
                                            action: 'receive',
                                            step: 2
                                        }
                                    }
                                })
                            }}>
                                <div className="my-2">
                                    <span className="icon-holder"><WalletReceiveIcon color='#194BFB'></WalletReceiveIcon></span>
                                </div>
                                <div>Receive</div>
                            </div>
                        </div>
                    )
                }
                {
                    action == 'send' && (
                        <div>
                            {
                                step == 2 && (
                                    <div>
                                        <div className="mb-3 back-nav" onClick={() => navigate(1)}>
                                            <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                        </div>

                                        <div>
                                            <label className="form-label">Select a digital currency to {action}</label>
                                            <Select
                                                className="form-control-select w-100"
                                                disableUnderline
                                                displayEmpty
                                                variant='standard'
                                                value={buyForm.coin}
                                                label="Coin"
                                                onChange={(event) => handleSetBuyForm({ coin: event.target.value })}>
                                                <MenuItem value='bitcoin' className="ui-select-menu">
                                                    <div className="d-flex">
                                                        <div>
                                                            <BitCoinFilledIcon fillColor="#F7931A" color="white"></BitCoinFilledIcon>
                                                        </div>
                                                        <div className="mx-2">
                                                            <span className="">Bitcoin</span>
                                                        </div>
                                                    </div>
                                                </MenuItem>
                                                <MenuItem value='etherum' className="ui-select-menu">
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
                                            <label className="form-label">How much would you like to {action} ?</label>

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

                                        <div className="mt-3">
                                            <label className="form-label">To</label>

                                            <TextField
                                                className="amount-field"
                                                variant="standard"
                                                placeholder="Wallet address or Email addresss"
                                                fullWidth
                                                InputProps={{
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <span className="me-2">
                                                            <WalletAddressIcon color="#94979D"></WalletAddressIcon>
                                                        </span>
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
                                            <button onClick={() => navigate(3)} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                step == 3 && (
                                    <div className="transaction-confirmation">
                                        <div className="mb-3 back-nav" onClick={() => navigate(2)}>
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
                                            <button onClick={() => navigate(4)} className='btn btn-radius w-100 btn-primary'>Confirm</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                step == 4 && (
                                    <div className="dialog-page">
                                        <div className="mb-3 back-nav" onClick={() => navigate(3)}>
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
                                            <TextField
                                                className="form-control-2 pin-field"
                                                InputProps={{
                                                    disableUnderline: true
                                                }}
                                                variant="standard"
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <button onClick={() => navigate(5)} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                step == 5 && (
                                    <div className="dialog-page">
                                        <div className="heading">Success</div>
                                        <div className="heading-note">Transaction successful</div>
                                        <div className="content text-center">
                                            <CheckCircleFilledIcon color="white" fillColor="#1D38E4"></CheckCircleFilledIcon>
                                        </div>
                                        <div className="mb-3">
                                            <button onClick={handleDialogClose} className='btn btn-radius w-100 btn-primary'>Okay</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {
                    action == 'receive' && (
                        <div>
                            {
                                step == 2 && (
                                    <div>
                                        <div className="mb-3 back-nav" onClick={() => navigate(1)}>
                                            <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                        </div>

                                        <div>
                                            <label className="form-label">Select a digital currency to {action}</label>
                                            <Select
                                                className="form-control-select w-100"
                                                disableUnderline
                                                displayEmpty
                                                variant='standard'
                                                value={buyForm.coin}
                                                label="Coin"
                                                onChange={(event) => handleSetBuyForm({ coin: event.target.value })}>
                                                <MenuItem value='bitcoin' className="ui-select-menu">
                                                    <div className="d-flex">
                                                        <div>
                                                            <BitCoinFilledIcon fillColor="#F7931A" color="white"></BitCoinFilledIcon>
                                                        </div>
                                                        <div className="mx-2">
                                                            <span className="">Bitcoin</span>
                                                        </div>
                                                    </div>
                                                </MenuItem>
                                                <MenuItem value='etherum' className="ui-select-menu">
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

                                        <div className="mt-3 receive-wallet-address">
                                            <div className="address-barcode">
                                                <Image alt="barcode" src='/images/address-btc.png' height='240px' width='240px'></Image>
                                            </div>
                                            <div className="wallet-receive-address-clipboard">
                                                <div className="d-flex">
                                                    <div className="title">Wallet address</div>
                                                    <div className="copy">
                                                        <button><CopyIcon color="black"></CopyIcon></button>
                                                    </div>
                                                </div>
                                                <div className="address text-truncate">
                                                    Z9fB9JfMi5ec8R3RA2LIZ9fB9JfMi5ec8R3RA2LI
                                                </div>

                                            </div>
                                        </div>



                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </Dialog>
    )
}

export default SendReceive