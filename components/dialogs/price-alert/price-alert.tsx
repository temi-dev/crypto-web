import { Checkbox, Dialog, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react";
import { IDialogs } from "../../../shared/interface/global.interface";
import { BitCoinFilledIcon, CancelIcon, EtherumFilledIcon, NotificationBellIllustrationIcon } from "../../icons/icons";

import FormControlLabel from '@mui/material/FormControlLabel';


const PriceAlert = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {
    interface IFormData {
        coin?: string,
        step?: number,
        when?: string,
        frequency?: string,
        currency?: string
    }

    const formData: IFormData = {
        coin: '',
        step: 1,
        when: '',
        frequency: '',
        currency: 'naira'
    }
    const [form, setForm] = useState(formData);

    const setFormData = (data: IFormData) => {
        setForm({ ...form, ...data });
    };

    const handleDialogClose = () => {
        setFormData({ step: 1 })
        setVisibilityState({ priceAlertsDialogVisibility: false });
    };

    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            {
                form.step == 1 && (
                    <div>
                        <div className="dialog-page">
                            <div className="dialog-header">
                                <div className="title">Price alerts</div>
                                <div className="action-btn">
                                    <button onClick={handleDialogClose}>
                                        <CancelIcon color="#1d38e4"></CancelIcon>
                                    </button>
                                </div>
                            </div>
                            <div className="content padding">
                                <div className="price-alert-notification-bell">
                                    <NotificationBellIllustrationIcon></NotificationBellIllustrationIcon>
                                    <div className="my-4">
                                        <div className="heading">Empty Alert</div>
                                        <div className="heading-note">You have no price alert yet</div>
                                    </div>
                                </div>
                                <div className="my-5">
                                    <button onClick={() => setFormData({ step: 2 })} className='btn btn-radius w-100 btn-primary'>Create an alert</button>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
            {
                form.step == 2 && (
                    <div>
                        <div className="dialog-page">
                            <div className="dialog-header">
                                <div className="title">Create alert</div>
                                <div className="action-btn">
                                    <button onClick={handleDialogClose}>
                                        <CancelIcon color="#1d38e4"></CancelIcon>
                                    </button>
                                </div>
                            </div>
                            <div className="content padding">
                                <div className="price-alert-currency">
                                    <span onClick={() => setFormData({ currency: 'naira' })} className={form.currency == 'naira' ? 'active' : ''} >₦</span>
                                    <span onClick={() => setFormData({ currency: 'usd' })} className={form.currency == 'usd' ? 'active' : ''} >$</span>
                                </div>
                                <div >
                                    <label className="form-label">Choose coin</label>
                                    <Select
                                        className="form-control-select w-100"
                                        disableUnderline
                                        displayEmpty
                                        variant='standard'
                                        placeholder="Select coin"
                                        value={form.coin}
                                        label="Coin"
                                        onChange={(event) => setFormData({ coin: event.target.value })}>
                                        <MenuItem value="" className="ui-select-menu">
                                            Select coin
                                        </MenuItem>
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
                                    <label className="form-label">Send alert when?</label>
                                    <Select
                                        className="form-control-select w-100"
                                        disableUnderline
                                        displayEmpty
                                        variant='standard'
                                        value={form.when}
                                        onChange={(event) => setFormData({ when: event.target.value })}>
                                        <MenuItem value="">
                                            <em>Select action</em>
                                        </MenuItem>
                                        <MenuItem value='below'>
                                            <span>Price below</span>
                                        </MenuItem>
                                        <MenuItem value='above'>
                                            <span>Price above</span>
                                        </MenuItem>
                                    </Select>

                                </div>

                                <div className="mt-3">
                                    <label className="form-label">Price</label>
                                    <TextField
                                        className="form-control-2"
                                        variant="standard"
                                        placeholder="Enter price"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />

                                </div>

                                <div className="mt-3">
                                    <label className="form-label">Alert frequency</label>
                                    <Select
                                        className="form-control-select w-100"
                                        disableUnderline
                                        variant='standard'
                                        value={form.frequency}
                                        displayEmpty
                                        onChange={(event) => setFormData({ frequency: event.target.value })}>
                                        <MenuItem value="">
                                            <em>Select</em>
                                        </MenuItem>
                                        <MenuItem value='once'>
                                            <span>Once</span>
                                        </MenuItem>
                                        <MenuItem value='always'>
                                            <span>Always</span>
                                        </MenuItem>
                                    </Select>

                                </div>

                                <div className="mt-3 price-alert-sms-consent">
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Receive price alert as sms cost NGN4 and will be deducted from your wallet." />
                                </div>

                                <div className="my-4">
                                    <button onClick={() => handleDialogClose} className='btn btn-radius w-100 btn-primary'>Create</button>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </Dialog>
    )
}

export default PriceAlert