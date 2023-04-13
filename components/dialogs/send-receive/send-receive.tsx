import { Dialog, TextField, Autocomplete, createFilterOptions, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../shared/contexts/app.context";
import { getMarketData } from "../../../shared/services/dashboard/market/market";
import { generateReceiveWalletAddress, getPortfolioList, getReceiveWalletAddresses, getTransactionBreakdown, sendTransaction, requestTransactionToken, getTransactionsList } from "../../../shared/services/dashboard/transactions/transaction";
import { ArrowLeftIcon, CheckCircleFilledIcon, WalletSendIcon, WalletReceiveIcon, WalletAddressIcon, CopyIcon } from "../../icons/icons";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
import QRCode from "react-qr-code";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PinInput from "react-pin-input";
import { useAuth } from "../../auth/auth-provider";
import NumberField from "../../number-field/number-field";

const SendReceive = () => {

    const { user, setUser } = useAuth();

    const [appState, setAppState] = useAppContext()

    const initAction = appState.dialogStates!.sendReceive?.action!
    const step = appState.dialogStates!.sendReceive?.step! || 1

    const snackbar = useCustomSnackbar();

    interface IFormData {
        coin?: any,
        coinShort?: string,
        coins?: Array<any>,
        step?: number,
        currency?: string,
        network?: any
        networks?: Array<any>
        loadingCoins?: boolean,
        loading?: boolean,
        address?: string
        wallets?: Array<any>
        assets?: Array<any>
        coinAsset?: any
        amount?: number | null
        breakdown?: any
        pin?: string
        token?: string
        memo?: string
        action?: string
        preSelected?: any,
    }

    const formData: IFormData = {
        step: initAction ? 2 : 1,
        currency: 'NGN',
        coins: [],
        networks: [],
    }
    const initAssets: any[] = [];

    const [form, setFormData] = useState({ ...formData });
    const [action, setAction] = useState(initAction);
    const [assets, setAssets] = useState(initAssets);

    const initWallets: any[] = []
    const [wallets, setWallets] = useState(initWallets);

    let initCoin: any;
    const [coin, setCoin] = useState(initCoin);

    const handleSetForm = (data: IFormData) => {
        setFormData({ ...form, ...data });

        if (data.coin) {
            const asset = assets!.find((element: { label: string | undefined; }) => element.label == data.coin.label);
            let networks: any[] = [];

            data.coin.networks.forEach((element: any) => {
                networks.push({
                    label: element.name,
                    network: element.network
                })
            })
            setCoin(data.coin)
            setFormData({ ...form, networks, coinShort: data.coin.asset, network: '', coinAsset: asset });
        }

        if (data.network) {
            const network = form.networks?.find(x => x.label == data.network);
            setFormData({ ...form, network: network.network })
        }

    };

    const handleDialogClose = () => {
        setAppState({
            ...appState, dialogStates: {
                ...appState.dialogStates,
                sendReceive: { visibitlity: false }
            }
        });
        setFormData(formData)
        setCoin(null);
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
            presetCoin(rows)
        }
    }

    const presetCoin = (coins: Array<any>) => {
        const coin = appState?.dialogStates?.sendReceive?.coin;
        if (coin) {
            const coinDetails = coins?.find(x => (x.asset.toLowerCase() == coin!.toLowerCase()));

            let networks: any[] = [];

            coinDetails.networks.forEach((element: any) => {
                networks.push({
                    label: element.name,
                    network: element.network
                })
            })
            setCoin(coinDetails)
            const asset = assets!.find((element: { asset: string | undefined; }) => element.asset == coin);
            setFormData({ ...form, networks, coin: coinDetails, coins, coinAsset: asset, coinShort: coinDetails.asset });
        }
    }

    const getWallets = async () => {
        const request = await getReceiveWalletAddresses();

        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            return
        } else {
            setWallets(request.data.data)
        }
    }

    const getPortfolio = async () => {
        const request = await getPortfolioList();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            return
        } else {
            let assets: object[] = [];
            request.data.data.forEach((element: any) => {
                assets.push({
                    label: element.name,
                    asset: element.coin,
                    bal: element.bal
                })
            })
            setAssets(assets)
        }
    }

    const navigate = (step: number, action?: string) => {
        if (step == 1) handleSetForm(({ coin: '', coinShort: '', network: '', coinAsset: null, address: '', amount: null }))
        setAppState({
            ...appState,
            dialogStates: {
                ...appState.dialogStates,
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
            getWallets();
            getPortfolio();
        }
    }

    const generateWallet = async () => {

        const wallet = wallets?.find(x => x.coin == form.coinShort && x.network == form.network);
        if (wallet) {
            handleSetForm({ address: wallet.address, memo: wallet.memo })
        } else {
            handleSetForm({ loading: true })
            const data = {
                coin: form.coinShort,
                network: form.network
            }
            const request = await generateReceiveWalletAddress(data);

            if (request.responseCode == 422) {
                snackbar.showError(request.data ? request.data.message : "Error occured");
                handleSetForm({ loading: false })
                return
            } else {
                handleSetForm({ address: request.data.data.address, loading: false, memo: request.data.data.memo })
                getWallets()
            }
        }
        navigate(3)
    }

    const getBreakdown = async () => {
        handleSetForm({ loading: true });

        const data = {
            network: form.network,
            amount: form.amount,
            asset: form.coinShort,
            type: 'withdraw'
        }
        const request = await getTransactionBreakdown(data);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");

            handleSetForm({ loading: false })
        } else {
            handleSetForm({ breakdown: request.data.data, loading: false })
            navigate(3)
        }
    }

    const requestToken = async () => {
        handleSetForm({ loading: true });

        const data = {
            address: form.address,
            pin: form.pin,
            amount: form.amount,
            asset: form.coinShort,
            network: form.network
        }
        const request = await requestTransactionToken(data);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            handleSetForm({ loading: false });
        } else {
            navigate(5)
            handleSetForm({ loading: false });
        }
    }

    const send = async () => {
        const data = {
            address: form.address,
            pin: form.pin,
            amount: form.amount,
            asset: form.coinShort,
            network: form.network,
            otp: form.token
        }

        const request = await sendTransaction(data);
        if (request.responseCode == 422) {
            navigate(3)
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            navigate(6)
            handleSetForm({ loading: false });
            getTransactions()
        }
    }

    const getTransactions = async () => {
        let request = await getTransactionsList();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            setUser({
                ...user!,
                transactions: request.data.data.slice(0, 5)
            })
        }

        request = await getPortfolioList();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            setUser({
                ...user!,
                portfolios: request.data.data.slice(0, 5)
            })

        }
    }

    const filterOptions = createFilterOptions({
        stringify: (option) => JSON.stringify(option)
    });

    const setMaxAmount = () => {
        handleSetForm({ amount: form.coinAsset?.bal, currency: coin.asset })
    }

    useEffect(() => {
        if (initAction) {
            getPortfolio()
            setAction(initAction)
            getData(initAction)
        }
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

                                        <div>
                                            <label className="form-label">Select a digital currency to {action}</label>
                                            {form.preSelected?.label}
                                            <Autocomplete
                                                disablePortal
                                                className="mt-1 w-100"
                                                filterOptions={filterOptions}
                                                options={form.coins || []}
                                                value={coin}
                                                onChange={(event: any, value: any) => {
                                                    if (value) handleSetForm({ coin: value });
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        label="Coin"
                                                    />}
                                            />
                                        </div>

                                        <div className="mt-3">
                                            <label className="form-label">Select network</label>
                                            <Autocomplete
                                                disablePortal
                                                className="mt-1 w-100"
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
                                                type='number'
                                                value={form.amount}
                                                onChange={(event) => {
                                                    handleSetForm({ amount: Number(event.target.value) });
                                                }}
                                                InputProps={{
                                                    inputComponent: NumberField,
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <Select
                                                            disableUnderline
                                                            displayEmpty
                                                            variant='standard'
                                                            onChange={
                                                                (e) => {
                                                                    handleSetForm({ currency: e.target.value })
                                                                }
                                                            }
                                                            value={form.currency}
                                                            className="currency-selector"
                                                            label="Currency">
                                                            <MenuItem value='NGN'>
                                                                <span>NGN</span>
                                                            </MenuItem>
                                                            <MenuItem value='USD'>
                                                                <span>USD</span>
                                                            </MenuItem>
                                                            {
                                                                coin &&
                                                                <MenuItem value={coin.asset}>
                                                                    <span>{coin.asset}</span>
                                                                </MenuItem>
                                                            }
                                                        </Select>
                                                    ),
                                                    endAdornment: (
                                                        <button onClick={setMaxAmount} disabled={!form.coinShort} className="max-amount-btn">
                                                            max
                                                        </button>
                                                    ),
                                                }}
                                            />

                                        </div>

                                        <div className="mt-3">
                                            <label className="form-label">To</label>

                                            <TextField
                                                className="amount-field"
                                                variant="standard"
                                                placeholder="Wallet address"
                                                fullWidth
                                                value={form.address}
                                                onChange={(event) => {
                                                    handleSetForm({ address: event.target.value });
                                                }}
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

                                        {
                                            form.coinAsset &&
                                            <div className="form-coin-wallet-balance">
                                                <div className="balance-header">{form.coinAsset?.label} balance</div>
                                                <div className="content">
                                                    <div className="fiat-balance">
                                                        <div>
                                                            <div className="naira-balance">{form.coinAsset?.bal}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                        <div className="mt-5 mb-3">
                                            <button disabled={!form.coinShort || !form.network || !form.amount || !form.address || form.loading} onClick={getBreakdown} className='btn btn-radius w-100 btn-primary'>Continue</button>
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

                                            <div className="transaction-details">
                                                <div className="transaction-details-heading">Transaction Details</div>
                                                <div className="data">
                                                    <div className="item">
                                                        <div className="title">
                                                            Coin
                                                        </div>
                                                        <div className="value">
                                                            {form.coinShort}
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="title">
                                                            Network
                                                        </div>
                                                        <div className="value">
                                                            {form.network}
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="title">
                                                            Receive  Amount
                                                        </div>
                                                        <div className="value">
                                                            {form.breakdown.assetUnits}
                                                        </div>

                                                    </div>
                                                    <div className="item">
                                                        <div className="title">
                                                            Amount Spent
                                                        </div>
                                                        <div className="value">
                                                            {form.amount} NGN
                                                        </div>

                                                    </div>
                                                    <div className="item">
                                                        <div className="title">
                                                            Fee
                                                        </div>
                                                        <div className="value">
                                                            {form.breakdown.withdrawFee}
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
                                            <PinInput
                                                length={6}
                                                initialValue=""
                                                secret
                                                onChange={(value, index) => { }}
                                                type="numeric"
                                                inputMode="number"
                                                style={{ padding: '10px' }}
                                                inputStyle={{ borderColor: '#ececec', borderRadius: '10px' }}
                                                inputFocusStyle={{ borderColor: 'blue' }}
                                                onComplete={(value, index) => {
                                                    handleSetForm({ pin: value })
                                                }}
                                                autoSelect={true}
                                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <button disabled={!form.pin || form.loading} onClick={requestToken} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                step == 5 && (
                                    <div className="dialog-page">
                                        <div className="mb-3 back-nav" onClick={() => navigate(3)}>
                                            <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                        </div>
                                        <div className="heading">Enter your token</div>
                                        <div className="content text-center">
                                            <PinInput
                                                length={6}
                                                initialValue=""
                                                secret
                                                onChange={(value, index) => { }}
                                                type="numeric"
                                                inputMode="number"
                                                style={{ padding: '10px' }}
                                                inputStyle={{ borderColor: '#ececec', borderRadius: '10px' }}
                                                inputFocusStyle={{ borderColor: 'blue' }}
                                                onComplete={(value, index) => {
                                                    handleSetForm({ token: value })
                                                }}
                                                autoSelect={true}
                                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                            />
                                        </div>
                                        <div className="mt-5">
                                            <button disabled={!form.token || form.loading} onClick={send} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                step == 6 && (
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
                                               
                                                filterOptions={filterOptions}
                                                value={coin}
                                                onChange={(event: any, value: any) => {
                                                    if (value) handleSetForm({ coin: value });
                                                }}
                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
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
                                                filterOptions={filterOptions}
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
                                                        <CopyToClipboard text={form.address!} onCopy={() => {
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
                                            {
                                                form.memo && (
                                                    <div className="wallet-receive-address-clipboard">
                                                        <div className="d-flex">
                                                            <div className="title">Memo</div>
                                                            <div className="copy">
                                                                <CopyToClipboard text={form.memo!} onCopy={() => {
                                                                    snackbar.showSuccess('Memo copied')
                                                                }}>
                                                                    <button><CopyIcon color="black"></CopyIcon></button>
                                                                </CopyToClipboard>

                                                            </div>
                                                        </div>
                                                        <div className="address text-truncate">
                                                            {form.memo}
                                                        </div>
                                                    </div>
                                                )
                                            }
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