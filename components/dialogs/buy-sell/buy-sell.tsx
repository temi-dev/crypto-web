import { Dialog, Select, MenuItem, TextField } from "@mui/material";
import React from "react";
import { WalletDepositFilledIcon, WalletDebitFilledIcon, ArrowLeftIcon, BitCoinFilledIcon, EtherumFilledIcon, CheckCircleFilledIcon } from "../../icons";

const BuySell = ({ open, setVisibilityState }: { open: boolean, setVisibilityState:any }) => {

    interface IFormData {
        coin?: string,
        step: number,
        action?: string,
        currency?: string
    }
    const formData: IFormData = {
        coin: 'bitcoin',
        step: 1,
        currency: 'NGN'
    }
    const [buyForm, setBuyForm] = React.useState({ ...formData });

    const handleSetBuyForm = (data: object) => {
        setBuyForm({ ...buyForm, ...data });
    };


    const handleDialogClose = () => {
        if (buyForm.step == 5) handleSetBuyForm({ step: 1 })
        setVisibilityState(false);
    };

    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
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