import { Dialog, Select, MenuItem, TextField, Autocomplete } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../shared/contexts/app.context";
import { getMarketData } from "../../../shared/services/dashboard/market/market";
import { generateReceiveWalletAddress, getPortfolioList, getReceiveWalletAddresses } from "../../../shared/services/dashboard/transactions/transaction";
import { ArrowLeftIcon, BitCoinFilledIcon, CheckCircleFilledIcon, WalletSendIcon, WalletReceiveIcon, WalletAddressIcon, CopyIcon } from "../../icons/icons";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
import QRCode from "react-qr-code";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SendReceive = () => {

    const [appState, setAppState] = useAppContext()

    const initAction = appState.dialogStates!.sendReceive?.action!
    const step = appState.dialogStates!.sendReceive?.step! || 1

    const snackbar = useCustomSnackbar();

    interface IFormData {
        coin?: string,
        coinShort?: string,
        coins?: Array<any>,
        step?: number,
        currency?: string,
        network?: string
        networks?: Array<any>
        loadingCoins?: boolean,
        loading?: boolean,
        address?: string
        wallets?: Array<any>
    }

    const formData: IFormData = {
        step: initAction ? 2 : 1,
        currency: 'NGN',
        coins: [],
        networks: [],
    }

    const [form, setFormData] = useState({ ...formData });
    const [action, setAction] = useState(initAction);

    const handleSetForm = (data: IFormData) => {
        setFormData({ ...form, ...data });
        if (data.coin) {
            const coin = form.coins?.find(x => x.label == data.coin);
            let networks: any[] = [];
            coin.networks.forEach((element: any) => {
                networks.push({
                    label: element.network
                })
            })
            setFormData({ ...form, networks, coinShort: coin.asset, network: '' });
        }

    };

    const handleDialogClose = () => {
        setAppState({ ...appState, dialogStates: { sendReceive: { visibitlity: false } } });
    };


    const getData = async (action: string) => {
        const request = await getMarketData();

        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            return
        } else {
            let assets: string[] = [];
            let rows: any[] = [];
            handleSetForm({ loadingCoins: true })
            if (action == 'send') {
                const portfolio = await getPortfolioList();
                if (portfolio.responseCode == 422) {
                    snackbar.showError(request.data ? request.data.message : "Error occured");
                    return
                } else {
                    portfolio.data.data.forEach((element: any) => {
                        assets.push(element.coin)
                    })
                    request.data.data.forEach((element: any) => {
                        if (assets.includes(element.coin)) {
                            rows.push({
                                label: element.name,
                                asset: element.coin,
                                networks: element.network
                            })
                        }
                    })
                }
            } else if (action == 'receive') {
                request.data.data.forEach((element: any) => {
                    rows.push({
                        label: element.name,
                        asset: element.coin,
                        networks: element.network
                    })
                })
            }
            handleSetForm({ coins: rows, loadingCoins: false })
        }
    }

    const getWallets = async () => {
        const request = await getReceiveWalletAddresses();

        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            return
        } else {
            handleSetForm({ wallets: request.data.data })
        }
    }

    const navigate = (step: number, action?: string) => {
        setAppState({
            ...appState,
            dialogStates: {
                sendReceive: {
                    ...appState.dialogStates?.sendReceive,
                    step,
                    action
                }
            }
        })

        if (action) {
            setAction(action);
            getData(action);
            getWallets()
        }
    }

    const generateWallet = async () => {
        const wallet = form.wallets?.find(x => x.coin == form.coinShort && x.network == form.network);
        if (wallet) {
            handleSetForm({ address: wallet.address })
        } else {
            handleSetForm({ loading: true })
            const data = {
                coin: form.coinShort,
                network: form.network
            }
            const request = await generateReceiveWalletAddress(data);

            if (request.responseCode == 422) {
                snackbar.showError(request.data ? request.data.message : "Error occured");
                return
            } else {
                handleSetForm({ address: request.data.data.address, loading: false })
                getWallets()
            }
        }
        navigate(3)
    }

    useEffect(() => {
        if (initAction) getData(initAction)
    }, [appState?.dialogStates?.sendReceive?.visibitlity!])

    return (
        <Dialog fullWidth maxWidth='xs' open={appState.dialogStates?.sendReceive?.visibitlity! || false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast p-4">
                {
                    step == 1 && (
                        <div className="dailog-action-picker">
                            <div className="send" onClick={() => {
                                navigate(2, 'send');
                            }}>
                                <div className="my-2">
                                    <span className="icon-holder">
                                        <WalletSendIcon color='#194BFB'></WalletSendIcon>
                                    </span>
                                </div>
                                <div>Send</div>
                            </div>
                            <div className="receive" onClick={() => {
                                navigate(2, 'receive');
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

                                        <div className="">
                                            <label className="form-label">Select a digital currency to {action}</label>
                                            <Autocomplete
                                                disablePortal
                                                className="mt-2 w-100"
                                                options={form.coins || []}
                                                value={form.coin}
                                                onChange={(event: any, newValue: any) => {
                                                    if (newValue) handleSetForm({ coin: newValue.label });
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        value={form.coin}
                                                        label="Coin"
                                                    />}
                                            />
                                        </div>
                                        <div className="">
                                            <label className="form-label">Select network</label>
                                            <Autocomplete
                                                disablePortal
                                                className="mt-2 w-100"
                                                options={form.networks || []}
                                                value={form.network}
                                                onChange={(event: any, newValue: any) => {
                                                    if (newValue) handleSetForm({ network: newValue.label });
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        value={form.network}
                                                        label="Network"
                                                    />}
                                            />
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
                                                            value={form.currency}
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
                                            <Autocomplete
                                                disablePortal
                                                className="mt-2 w-100"
                                                options={form.coins || []}
                                                value={form.coinShort}
                                                onChange={(event: any, newValue: any) => {
                                                    if (newValue) handleSetForm({ coin: newValue.label });
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        value={form.coinShort}
                                                        label="Coin"
                                                    />}
                                            />
                                        </div>

                                        <div className="mt-3">
                                            <label className="form-label">Select network</label>
                                            <Autocomplete
                                                disablePortal
                                                className="mt-2 w-100"
                                                options={form.networks || []}
                                                value={form.network}
                                                onChange={(event: any, newValue: any) => {
                                                    if (newValue) handleSetForm({ network: newValue.label });
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        value={form.network}
                                                        label="Network"
                                                    />}
                                            />
                                        </div>

                                        <div className="my-3">
                                            <button disabled={form.loading || !form.coinShort || !form.network} onClick={() => generateWallet()} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                step == 3 && (
                                    <div>
                                        <div className="mb-3 back-nav" onClick={() => navigate(2)}>
                                            <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                        </div>
                                        <div className="mt-3 receive-wallet-address">
                                            <div className="address-barcode">
                                                <QRCode value={form.address!} className="mb-3" />
                                            </div>
                                            <div className="wallet-receive-address-clipboard">
                                                <div className="d-flex">
                                                    <div className="title">Wallet address</div>
                                                    <div className="copy">
                                                        <CopyToClipboard text={form.address!} onCopy={() =>{
                                                            snackbar.showSuccess('Address copied')
                                                        }}>
                                                            <button><CopyIcon color="black"></CopyIcon></button>
                                                        </CopyToClipboard>

                                                    </div>
                                                </div>
                                                <div className="address text-truncate">
                                                    {form.address}
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