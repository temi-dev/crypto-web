import { Checkbox, Dialog, MenuItem, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { IDialogs } from "../../../shared/interface/global.interface";
import { BitCoinFilledIcon, CancelIcon, EtherumFilledIcon, NotificationBellIllustrationIcon } from "../../icons/icons";

import FormControlLabel from '@mui/material/FormControlLabel';
import { Autocomplete } from "@mui/lab";
import { getMarketData } from "../../../shared/services/dashboard/market/market";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
import { createPriceAlert } from "../../../shared/services/dashboard/price-alert/price-alert";
import { useAuth } from "../../auth/auth-provider";


const PriceAlert = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {
    const {user} = useAuth()
    interface IFormData {
        coin?: string,
        step?: number,
        when?: string,
        frequency?: string,
        currency?: string
        coins?: any[]
        price?: number
        processing?: boolean
    }

    const formData: IFormData = {
        coin: '',
        coins: [],
        step: 2,
        when: '',
        frequency: '',
        currency: 'NGN'
    }
    const [form, setForm] = useState(formData);
    const snackbar = useCustomSnackbar(); 
    const setFormData = (data: IFormData) => {
        setForm({ ...form, ...data });
    };

    const handleDialogClose = () => {
        setForm(formData)
        setVisibilityState({ priceAlertsDialogVisibility: false });
    };

    const getData = async () => {
        const request = await getMarketData();

        if (request.responseCode == 422) {
            snackbar.showError(request.data ? request.data.message : "Error occured");
            return
        } else {
            let rows: any[] = [];
            request.data.data.forEach((element: any) => {
                rows.push({
                    label: element.name,
                    asset: element.coin
                })
            })
            setFormData({ coins: rows })
        }
    }

    const submit = async() =>{
        const asset = form.coins!.find((x) => x.label == form.coin).asset
        const data = {
            asset,
            _trigger: form.when,
            currency: form.currency,
            frequency: form.frequency,
            phone: user?.phone,
            price: form.price
        }
        setFormData({ processing: true })
        const request = await createPriceAlert(data);

        if (request.responseCode == 422) {
            setFormData({ processing: false })
            snackbar.showError(request.data ? request.data.message : "Error occured");
            return
        } else {
            handleDialogClose()
            snackbar.showSuccess(request.data.message)
            setForm(formData)
        } 
    }

    useEffect(()=>{
        getData()
    }, [])
    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            <div className="animate__animated animate__fadeIn animate__fast">

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
                                        <span onClick={() => setFormData({ currency: 'NGN' })} className={form.currency == 'NGN' ? 'active' : ''} >₦</span>
                                        <span onClick={() => setFormData({ currency: 'USD' })} className={form.currency == 'USD' ? 'active' : ''} >$</span>
                                    </div>
                                    <div >
                                        <label className="form-label">Choose coin</label>
                                        <Autocomplete
                                            disablePortal
                                            className="mt-2 w-100"
                                            options={form.coins!}
                                            value={form.coin}
                                            onChange={(event: any, newValue: any) => {
                                                if (newValue) setFormData({ coin: newValue.label });
                                            }}
                                            renderInput={(params) => <TextField
                                                {...params}
                                                value={form.coin}
                                                label="Coin"
                                            />}
                                        />

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
                                            type='number'
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            value={form.price}
                                            onChange={(event) => setFormData({ price: Number(event.target.value) })}
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
                                            <MenuItem value='0'>
                                                <span>Once</span>
                                            </MenuItem>
                                            <MenuItem value='1'>
                                                <span>Always</span>
                                            </MenuItem>
                                        </Select>

                                    </div>

                                    <div className="mt-3 price-alert-sms-consent">
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Receive price alert as sms cost NGN4 and will be deducted from your wallet." />
                                    </div>

                                    <div className="my-4">
                                        <button onClick={submit} className='btn btn-radius w-100 btn-primary'>Create</button>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                }
            </div>
        </Dialog>
    )
}

export default PriceAlert