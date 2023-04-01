import { Autocomplete, createFilterOptions, Dialog, TextField } from "@mui/material"
import React, { useEffect, useState } from "react";
import PinInput from "react-pin-input";
import { IDialogs } from "../../../shared/interface/global.interface";
import { getPortfolioList, getSwapTransactionBreakdown, getTransactionsList, swapCoin } from "../../../shared/services/dashboard/transactions/transaction";
import { useAuth } from "../../auth/auth-provider";
import { ArrowLeftIcon, CancelIcon, CheckCircleFilledIcon, CoinSwapIcon } from "../../icons/icons";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";

const CoinSwap = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    const { user, setUser } = useAuth();
    
    interface IFormData {
        fromCoin?: string,
        from?: number,
        to?: string,
        toCoin?: string | null,
        step?: number,
        assets?: any[]
        toAssets?: any[]
        amount?: number
        pin?: string
        processingRequest?: boolean
        fromAsset?: any
        toAsset?: any
        gettingBreakdown?: boolean
        breakdown?: any,
    }
    const formData: IFormData = {
        step: 1,
        assets: [],
        toAssets: []
    }
    const snackbar = useCustomSnackbar();
    const [form, setForm] = useState({ ...formData });

    const handleSetFormData = (data: IFormData) => {
        if (data.fromCoin) {
            const toAssets = form.assets!.filter((element) => element.label != data.fromCoin);
            const fromAsset = form.assets!.find((element) => element.label == data.fromCoin);
            setForm({ ...form, toAssets, fromAsset, toCoin: null, ...data });
        } else {
            if (data.toCoin) {
                const toAsset = form.assets!.find((element) => element.label == data.toCoin);
                setForm({ ...form, toAsset })
            }
            setForm(form => ({ ...form, ...data }));
        }
    };

    const handleDialogClose = () => {
        setForm(formData);
        setVisibilityState({ coinSwapDialogVisibitlity: false });
    };

    const getData = async () => {
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
            handleSetFormData({ assets })
        }
    }

    const submit = async () => {
        handleSetFormData({ processingRequest: true })
        const asset = form.assets!.find((x) => x.label == form.fromCoin).asset
        const swap_asset = form.assets!.find((x) => x.label == form.toCoin).asset
        const data = {
            pin: form.pin,
            amount: form.amount,
            asset,
            swap_asset
        }
        const request = await swapCoin(data);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            handleSetFormData({ processingRequest: false })
            return
        } else {
            getTransactions()
            handleDialogClose()
            snackbar.showSuccess(request.data.message)
        }
    }

    const setMaxAmount = () => {
        handleSetFormData({ amount: form.fromAsset?.bal })
    }

    const navigate = (step: number) => {
        handleSetFormData({ step })
    }

    const getBreakdown = async () => {
        handleSetFormData({ gettingBreakdown: true });

        const data = {
            type: 'swap',
            amount: form.amount,
            asset: form.fromAsset?.asset,
            swap_asset: form.toAsset?.asset
        }
        const request = await getSwapTransactionBreakdown(data);
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            handleSetFormData({ breakdown: request.data.data, gettingBreakdown: false })
            navigate(2)
        }
    }

    const filterOptions = createFilterOptions({
        stringify: (option) => JSON.stringify(option),
    });

    const getTransactions = async () => {
        const request = await getTransactionsList();
        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
        } else {
            setUser({
                ...user!,
                transactions: request.data.data.slice(0, 5)
            })
        }
    }


    useEffect(() => {
        if (open) getData()
    }, [open])

    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast">
                {
                    form.step == 1 && (
                        <div>
                            <div className="dialog-page">
                                <div className="dialog-header">
                                    <div className="title">Coin Swap</div>
                                    <div className="action-btn">
                                        <button onClick={handleDialogClose}>
                                            <CancelIcon color="#1d38e4"></CancelIcon>
                                        </button>
                                    </div>
                                </div>
                                <div className="content padding">
                                    <div >
                                        <label className="form-label">From</label>
                                        <Autocomplete
                                            disablePortal
                                            className="mt-2 w-100"
                                            options={form.assets!}
                                            value={form.fromCoin}
                                            filterOptions={filterOptions}
                                            onChange={(event: any, newValue: any) => {
                                                if (newValue) handleSetFormData({ fromCoin: newValue.label });
                                            }}
                                            renderInput={(params) => <TextField
                                                {...params}
                                                value={form.fromCoin}
                                                label="Coin"
                                            />}
                                        />
                                    </div>

                                    <div className="text-center mt-3 mb-2">
                                        <div className="swap-coin-circle-icon">
                                            <CoinSwapIcon color="#936DFF"></CoinSwapIcon>
                                        </div>
                                    </div>

                                    <div >
                                        <label className="form-label">To</label>
                                        <Autocomplete
                                            disablePortal
                                            className="mt-2 w-100"
                                            options={form.toAssets!}
                                            value={form.toCoin || ''}
                                            filterOptions={filterOptions}
                                            onChange={(event: any, newValue: any) => {
                                                if (newValue) handleSetFormData({ toCoin: newValue.label });
                                            }}
                                            renderInput={(params) => <TextField
                                                {...params}
                                                value={form.toCoin}
                                                label="Coin"
                                            />}
                                        />

                                    </div>

                                    {
                                        form.fromCoin &&
                                        <div className="form-coin-wallet-balance">
                                            <div className="balance-header">{form.fromAsset?.label} balance</div>
                                            <div className="content">
                                                <div className="fiat-balance">
                                                    <div>
                                                        <div className="naira-balance">{form.fromAsset?.bal}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                    <div className="mt-3">
                                        <TextField
                                            className="amount-field"
                                            variant="standard"
                                            placeholder={`Enter amount`}
                                            fullWidth
                                            value={form.amount || 0}
                                            type='number'
                                            InputProps={{
                                                disableUnderline: true,
                                                endAdornment: (
                                                    <button onClick={setMaxAmount} disabled={!form.fromCoin} className="max-amount-btn">
                                                        max
                                                    </button>
                                                ),
                                            }}

                                            onChange={(e) => {
                                                handleSetFormData({ amount: Number(e.target.value) })
                                            }}
                                        />
                                    </div>

                                    <div className="mt-4 mb-4">
                                        <button disabled={!form.fromCoin || !form.toCoin || !form.amount} onClick={getBreakdown} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    form.step == 2 && (
                        <div className="transaction-confirmation dialog-page">
                            <div className="d-flex align-items-center p-3">
                                <div className=" back-nav" onClick={() => navigate(1)}>
                                    <ArrowLeftIcon color="black"></ArrowLeftIcon>
                                </div>
                                <div className="heading mx-3 justify-content-center d-flex">Confirmation</div>
                            </div>
                            <div className="content padding">
                                <div className="text-center">
                                </div>
                                <div className="transaction-details">
                                    <div className="transaction-details-heading">Transaction Details</div>
                                    <div className="data">
                                        <div className="item">
                                            <div className="title">
                                                From
                                            </div>
                                            <div className="value">
                                                {form.fromCoin}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                To
                                            </div>
                                            <div className="value">
                                                {form.toCoin}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Swap
                                            </div>
                                            <div className="value">
                                                {form.breakdown.totalAssetUnits}  {form.fromAsset?.asset}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Get
                                            </div>
                                            <div className="value">
                                                {form.breakdown.swapAssetUnits} {form.toAsset?.asset}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="my-4">
                                    <button onClick={() => navigate(3)} className='btn btn-radius w-100 btn-primary'>Confirm</button>
                                </div>
                            </div>

                        </div>
                    )
                }
                {
                    form.step == 3 && (
                        <div className="dialog-page p-4">
                            <div className="mb-3 back-nav" onClick={() => handleSetFormData({ step: 1 })}>
                                <ArrowLeftIcon color="black"></ArrowLeftIcon>
                            </div>
                            <div className="heading">Enter your pin</div>
                            <div className="content text-center">
                                <PinInput
                                    length={6}
                                    initialValue=""
                                    secret
                                    onChange={(value, index) => {
                                        handleSetFormData({ pin: value })
                                    }}
                                    type="numeric"
                                    inputMode="number"
                                    style={{ padding: '10px' }}
                                    inputStyle={{ borderColor: '#ececec', borderRadius: '10px' }}
                                    inputFocusStyle={{ borderColor: 'blue' }}
                                    onComplete={(value, index) => {
                                        handleSetFormData({ pin: value })
                                    }}
                                    autoSelect={true}
                                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                />
                            </div>
                            <div className="mt-5">
                                <button disabled={!form.pin || form.processingRequest} onClick={submit} className='btn btn-radius w-100 btn-primary'>Continue</button>
                            </div>
                        </div>
                    )
                }
                {
                    form.step == 4 && (
                        <div className="dialog-page p-4">
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

export default CoinSwap