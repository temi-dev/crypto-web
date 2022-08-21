import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import React from "react";
import { IDialogs } from "../../../shared/interface/global.interface";
import { BitCoinFilledIcon, CancelIcon, EtherumFilledIcon, ExchangeIcon } from "../../icons/icons";

const MoneyConversion = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

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
        setVisibilityState({conversionDialogVisibilty: false});
    };
    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            {
                form.step == 1 && (
                    <div className="animate__animated animate__fadeIn animate__fast">
                        <div className="dialog-page">
                            <div className="dialog-header">
                                <div className="title">Convert</div>
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
                                        <ExchangeIcon color="#FACC15"></ExchangeIcon>
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

                                <div className="mt-4 mb-4">
                                    <button className='btn btn-radius w-100 btn-primary' onClick={handleDialogClose}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Dialog>
    )
}

export default MoneyConversion