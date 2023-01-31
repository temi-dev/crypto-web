import { Dialog, Select, MenuItem, TextField, FormGroup, FormControl, Autocomplete } from "@mui/material";
import React, { useState, useEffect } from "react";
import PinInput from "react-pin-input";
import { useAppContext } from "../../../shared/contexts/app.context";
import { getMarketData } from "../../../shared/services/dashboard/market/market";
import { completeBuySellTransaction, getPortfolioList, getTransactionBreakdown } from "../../../shared/services/dashboard/transactions/transaction";
import { Auth } from "../../auth/auth";
import { useAuth } from "../../auth/auth-provider";
import { WalletDepositFilledIcon, WalletDebitFilledIcon, ArrowLeftIcon, BitCoinFilledIcon, EtherumFilledIcon, CheckCircleFilledIcon } from "../../icons/icons";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
const auth = new Auth();

const BuySell = () => {

    const { user, setUser } = useAuth();
    const snackbar = useCustomSnackbar();

    const [appState, setAppState] = useAppContext()

    const initAction = appState.dialogStates!.buySellDialog?.action!
    const step = appState.dialogStates!.buySellDialog?.step! || 1

    interface IFormData {
        coins?: any,
        breakdown?: any,
        coin?: string,
        step?: number,
        currency?: string,
        amount?: number,
        pin?: string,
        gettingBreakdown?: boolean
        completingTransaction?: boolean
        action?: string,
        loadingCoins?: boolean
    }

    const formData: IFormData = {
        step: initAction ? 2 : 1,
        currency: 'NGN',
        coins: []
    }

    const [form, setForm] = useState({ ...formData });
    const [action, setAction] = useState(initAction);

    const handleSetForm = (data: IFormData) => {
        setForm({ ...form, ...data });
        return
    };

    const handleDialogClose = () => {
        setAppState({
            ...appState,
            dialogStates: {
                ...appState.dialogStates,
                buySellDialog: { visibitlity: false }
            }
        });
        setForm(formData)
    };

    const navigate = (step: number) => {
        setAppState({
            ...appState,
            dialogStates: {
                buySellDialog: {
                    ...appState.dialogStates?.buySellDialog,
                    step,
                    action
                }
            }
        })
    }

    const getData = async (action: string) => {
        const request = await getMarketData();
        setAction(action)

        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            return
        } else {
            let assets: string[] = [];
            let rows: any[] = [];
            setForm({ loadingCoins: true })
            if (action == 'sell') {
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
                                asset: element.coin
                            })
                        }
                    })
                }
            } else if (action == 'buy') {
                request.data.data.forEach((element: any) => {
                    rows.push({
                        label: element.name,
                        asset: element.coin
                    })
                })
            }
            handleSetForm({ coins: rows, loadingCoins: false })
        }
    }

    const getBreakdown = async () => {

        if (!form.coin) {
            return snackbar.showError(`Select a coin you want to ${action}`)
        }
        if (!form.amount) {
            return snackbar.showError(`Enter the amount you want to ${action}`)
        }
        if (user && user.available_bal && form.amount > user.available_bal && action == 'buy') {
            return snackbar.showError(`Amount is higher than available balance.`)
        }
        if (user && user.available_bal && action == 'buy' && form.amount < 200 && form.currency == 'NGN') {
            return snackbar.showError(`Minimum amount you can buy is NGN200.`)
        }
        if (user && user.available_bal && action == 'sell' && form.amount < 300 && form.currency == 'NGN') {
            return snackbar.showError(`Minimum amount you can sell is NGN300.`)
        }
        const assetInfo = form.coins.find((x: any) => x.label.toLowerCase() == form.coin?.toLowerCase())
        const data = {
            amount_in: form.currency,
            type: action,
            amount: form.amount,
            asset: assetInfo.asset
        }
        handleSetForm({ gettingBreakdown: true })
        const request = await getTransactionBreakdown(data);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            handleSetForm({ breakdown: request.data.data, gettingBreakdown: false })
            navigate(3)
        }
    }

    const completeTransaction = async () => {
        if (!form.pin) {
            return snackbar.showError(`Enter your pin`)
        }
        const assetInfo = form.coins.find((x: any) => x.label.toLowerCase() == form.coin?.toLowerCase())
        const data = {
            amount_in: form.currency,
            amount: form.amount,
            asset: assetInfo.asset,
            pin: form.pin
        }
        handleSetForm({ completingTransaction: true })
        const request = await completeBuySellTransaction(data, action);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            handleSetForm({ completingTransaction: false })
        } else {
            const updatedUserInfo = await auth.resolveUser();
            if (updatedUserInfo) setUser(updatedUserInfo);

            snackbar.showSuccess(request.data.message)
            navigate(5)
            handleSetForm({ completingTransaction: false })
        }
    }

    useEffect(() => {
        if (initAction) getData(initAction)
    }, [appState?.dialogStates?.buySellDialog?.visibitlity!])

    return (
        <Dialog fullWidth maxWidth='xs' open={appState.dialogStates?.buySellDialog?.visibitlity! || false} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast p-4">
                {
                    step == 1 && (
                        <div className="dailog-action-picker">
                            <div className="buy" onClick={() => {
                                navigate(2);
                                getData('buy')
                            }}>
                                <div className="my-2">
                                    <WalletDepositFilledIcon fillColor='#FAFAFA' color='#194BFB'></WalletDepositFilledIcon>
                                </div>
                                <div>Buy</div>
                            </div>
                            <div className="sell" onClick={() => {
                                navigate(2);
                                getData('sell')
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
                                    options={form.coins}
                                    value={form.coin}
                                    onChange={(event: any, newValue: any) => {
                                        if (newValue) handleSetForm({ coin: newValue.label });
                                    }}
                                    renderInput={(params) => <TextField
                                        {...params}
                                        value={form.coin}
                                        label="Coin"
                                    />}
                                />
                            </div>

                            <div className="mt-3">
                                <label className="form-label">How much would you like to {action} ?</label>

                                <TextField
                                    className="amount-field"
                                    variant="standard"
                                    placeholder={`Enter amount`}
                                    fullWidth
                                    value={form.amount || ''}
                                    type="number"
                                    onChange={
                                        (e) => {
                                            handleSetForm({ amount: Number(e.target.value) })
                                        }
                                    }
                                    InputProps={{
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
                                            <div className="naira-balance">₦ {user?.available_bal}</div>
                                            <div className="usd-balance">USD 500</div>
                                        </div>
                                    </div>
                                    <div className="coin-balance">
                                        {/* <span>0.01074701</span> */}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 mb-3">
                                <button onClick={getBreakdown} disabled={form.gettingBreakdown} className='btn btn-radius w-100 btn-primary'>Continue</button>
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
                                </div>
                                <div className="transaction-details">
                                    <div className="transaction-details-heading">Transaction Details</div>
                                    <div className="data">
                                        <div className="item">
                                            <div className="title">
                                                Asset
                                            </div>
                                            <div className="value">
                                                {form.coin}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Amount
                                            </div>
                                            <div className="value">
                                                NGN{form.amount}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Fee
                                            </div>
                                            <div className="value">
                                                {form.breakdown.feePercent}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                You Get
                                            </div>
                                            <div className="value">
                                                {form.breakdown.assetUnits}
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
                            <div className="mb-3 back-nav" onClick={() => {
                                navigate(3);
                                handleSetForm({ pin: '' })
                            }}>
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
                            <div className="mt-4">
                                <button onClick={completeTransaction} disabled={form.completingTransaction} className='btn btn-radius w-100 btn-primary'>Continue</button>
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
        </Dialog>
    )
}

export default BuySell