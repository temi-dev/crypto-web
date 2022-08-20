import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { CancelIcon, CopyIcon } from "../../../icons/icons"

const PortfolioSend = ({ open, setVisibilityState, coin }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>, coin: string }) => {

    interface IData {
        network?: string,
        currency?: string
    }

    const initData: IData = {
        network: '',
        currency: 'usd'
    }
    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ portfolioReceiveDialogVisibility: false });
    };
    return (
        <Dialog open={open} onClose={handleDialogClose} fullScreen>
            <div className="portfolio-dialog">
                <div className="portfolio-dialog-content">
                    <div className="portfolio-dialog-header">
                        <div className="close-dialog">
                            <button onClick={handleDialogClose}>
                                <CancelIcon color="#1d38e4"></CancelIcon>
                            </button>
                        </div>
                        <div className="title">Send <span>{coin}</span></div>
                    </div>
                    <div className="portfolio-dialog-inner-content">
                        <div className="form-container">
                            <div >
                                <TextField
                                    className="form-control"
                                    variant="standard"
                                    placeholder="Wallet address"
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                            </div>

                            <div className="mt-3">
                                <Select
                                    className="form-control w-100"
                                    disableUnderline
                                    displayEmpty
                                    variant='standard'
                                    value={componentData.network}
                                    onChange={(event) => setData({ network: event.target.value })}>
                                    <MenuItem value="" className="ui-select-menu">
                                        <em>Select network</em>
                                    </MenuItem>
                                    <MenuItem value="demo" className="ui-select-menu">
                                        Demo network
                                    </MenuItem>
                                </Select>
                            </div>

                            <div className="mt-3 amount-field-box">
                                <div className="label">Enter amount</div>
                                <TextField
                                    className="amount-field mt-3"
                                    variant="standard"
                                    placeholder="0.00"
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                        startAdornment: (
                                            <div className="d-flex currency">
                                                {
                                                    componentData.currency == 'usd' && (
                                                        <span>$</span>
                                                    )
                                                }
                                                {
                                                    componentData.currency == 'naira' && (
                                                        <span>₦</span>
                                                    )
                                                }
                                            </div>
                                        ),
                                        endAdornment: (
                                            <div className="d-flex currency-picker">
                                                <button onClick={() => setComponentData({ currency: 'naira' })} className={componentData.currency == 'naira' ? 'active' : ''}>₦</button>
                                                <button onClick={() => setComponentData({ currency: 'usd' })} className={componentData.currency == 'usd' ? 'active' : ''}>$</button>
                                            </div>
                                        ),
                                    }}
                                />
                            </div>

                            <div className="mt-4">
                                <button onClick={handleDialogClose} className='btn btn-radius py-3 w-100 btn-primary'>Send</button>
                            </div>
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
                    </div>
                </div>
            </div>
        </Dialog >
    )
}

export default PortfolioSend