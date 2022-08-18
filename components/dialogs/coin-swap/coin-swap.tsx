import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import React from "react";
import { ArrowLeftIcon, BitCoinFilledIcon, CancelIcon, CheckCircleFilledIcon, CoinSwapIcon, EtherumFilledIcon } from "../../icons";

const CoinSwap = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: any }) => {

    interface IFormData {
        fromCoin?: string,
        from?: number,
        to?: string,
        toCoin?: string,
        step: number
    }
    const formData: IFormData = {
        fromCoin: 'bitcoin',
        step: 1,
        toCoin: 'etherum'
    }
    const [form, setForm] = React.useState({ ...formData });
    const handleSetFormData = (data: object) => {
        setForm({ ...formData, ...data });
    };
    const handleDialogClose = () => {
        if (form.step == 3) handleSetFormData({ step: 1 })
        setVisibilityState(false);
    };
    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
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
                                    <TextField
                                        className="amount-field"
                                        variant="standard"
                                        placeholder="0.00"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <Select
                                                    disableUnderline
                                                    displayEmpty
                                                    variant='standard'
                                                    value={form.fromCoin}
                                                    className="currency-selector"
                                                    label="Currency">
                                                    <MenuItem value='bitcoin' className="ui-select-menu">
                                                        <div className="flex-select-menu-item">
                                                            <div>
                                                                <BitCoinFilledIcon fillColor="#F7931A" color="white"></BitCoinFilledIcon>
                                                            </div>
                                                            <div className="text">
                                                                <span className="">BTC</span>
                                                            </div>
                                                        </div>
                                                    </MenuItem>
                                                    <MenuItem value='etherum' className="ui-select-menu">
                                                        <div className="flex-select-menu-item">
                                                            <div>
                                                                <EtherumFilledIcon color="white" fillColor="#627EEA"></EtherumFilledIcon>
                                                            </div>
                                                            <div className="text">
                                                                <span className="">ETH</span>
                                                            </div>
                                                        </div>
                                                    </MenuItem>
                                                </Select>
                                            ),
                                        }}
                                    />

                                </div>

                                <div className="text-center mt-3 mb-2">
                                    <div className="swap-coin-circle-icon">
                                        <CoinSwapIcon color="#936DFF"></CoinSwapIcon>
                                    </div>
                                </div>

                                <div >
                                    <label className="form-label">To</label>
                                    <TextField
                                        className="amount-field"
                                        variant="standard"
                                        placeholder="0.00"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <Select
                                                    disableUnderline
                                                    displayEmpty
                                                    variant='standard'
                                                    value={form.fromCoin}
                                                    className="currency-selector"
                                                    label="Currency">
                                                    <MenuItem value='bitcoin' className="ui-select-menu">
                                                        <div className="flex-select-menu-item">
                                                            <div>
                                                                <BitCoinFilledIcon fillColor="#F7931A" color="white"></BitCoinFilledIcon>
                                                            </div>
                                                            <div className=" text">
                                                                <span className="">BTC</span>
                                                            </div>
                                                        </div>
                                                    </MenuItem>
                                                    <MenuItem value='etherum' className="ui-select-menu">
                                                        <div className="flex-select-menu-item">
                                                            <div>
                                                                <EtherumFilledIcon color="white" fillColor="#627EEA"></EtherumFilledIcon>
                                                            </div>
                                                            <div className="text">
                                                                <span className="">ETH</span>
                                                            </div>
                                                        </div>
                                                    </MenuItem>
                                                </Select>
                                            ),
                                        }}
                                    />

                                </div>

                                <div className="transaction-fee">
                                    <span>Fee: 0.03</span>
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

                                <div className="mt-4 mb-4">
                                    <button onClick={() => setForm({ step: 2 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                form.step == 2 && (
                    <div className="dialog-page p-4">
                        <div className="mb-3 back-nav" onClick={() => handleSetFormData({ step: 1 })}>
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
                            <button onClick={() => setForm({ step: 3 })} className='btn btn-radius w-100 btn-primary'>Continue</button>
                        </div>
                    </div>
                )
            }
            {
                form.step == 3 && (
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

        </Dialog>
    )
}

export default CoinSwap