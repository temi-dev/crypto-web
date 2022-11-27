import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import Image from "next/image";
import { useEffect, useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { getAppData } from "../../../../shared/services/app/app.service";
import { saveBankAccount } from "../../../../shared/services/dashboard/settings/banks-cards/banks-cards.service";
import { CancelIcon, CopyIcon, HometownLogo } from "../../../icons/icons"
import useCustomSnackbar from "../../../snackbar/use-custom-snackbar";

const SettingsAddBank = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    const snackbar = useCustomSnackbar();

    interface IData {
        form?: {
            account_number?: string
            bank_code?: string
        }
        banks?: Array<any>,
        submittingForm?: boolean,
        formSubmitted?: boolean
    }

    const initData: IData = {
        submittingForm: false,
        formSubmitted: false
    }

    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ settingsAddBankDialogVisibility: false });
    };

    const getData = async () => {
        const request = await getAppData();
        setData({ banks: request.data.data.banks })
    }

    useEffect(() => {
        if (open) getData()
    }, [open]);

    const submit = async() => {
        setData({ formSubmitted: true })
        if (componentData.form?.bank_code && componentData.form.account_number) {
            setData({ submittingForm: true });
            const request = await saveBankAccount(componentData.form);
            if (request.responseCode == 422) {
                snackbar.showError(request.data.message)
                setData({ submittingForm: false })
            } else {
                snackbar.showSuccess(request.data.message);
                setData({ form: {}, formSubmitted: false })
                handleDialogClose()
            }
        }
    }
    return (
        <Dialog open={open ? open : false} className="animate__animated animate__slideInRight animate__faster" onClose={handleDialogClose} fullScreen>
            <div className="dashbord-right-dialog">
                <div className="dashbord-right-dialog-content">
                    <div className="dashbord-right-dialog-header">
                        <div className="close-dialog">
                            <button onClick={handleDialogClose}>
                                <CancelIcon color="#1d38e4"></CancelIcon>
                            </button>
                        </div>
                        <div className="title">Add Bank</div>
                    </div>
                    <div className="dashbord-right-dialog-inner-content">
                        <div className="form-container">
                            <div >
                                <TextField
                                    className={`form-control ${(!componentData.form?.account_number && componentData.formSubmitted ? 'error' : '')} `}
                                    variant="standard"
                                    placeholder="Account number"
                                    fullWidth
                                    value={componentData.form?.account_number || ''}
                                    onChange={(event) => setData({ form: { ...componentData.form, account_number: event.target.value } })}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                /> {
                                    (!componentData.form?.account_number && componentData.formSubmitted &&
                                        <div className='error-message'>Enter you account number</div>
                                    )
                                }

                            </div>

                            <div className="mt-3">
                                <Select
                                    className={`form-control ${(!componentData.form?.bank_code && componentData.formSubmitted ? 'error' : '')} `}
                                    disableUnderline
                                    displayEmpty
                                    variant='standard'
                                    value={componentData.form?.bank_code || ''}
                                    onChange={(event) => setData({ form: { ...componentData.form, bank_code: event.target.value } })}>
                                    <MenuItem value="" className="ui-select-menu">
                                        <em>Select bank</em>
                                    </MenuItem>
                                    {
                                        componentData.banks?.map(element => {
                                            return (
                                                <MenuItem value={element.id} className="ui-select-menu">
                                                    {element.name}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                                {
                                    (!componentData.form?.bank_code && componentData.formSubmitted &&
                                        <div className='error-message'>Select a bank</div>
                                    )
                                }
                            </div>
                            <div className="mt-3">
                                <button onClick={submit} disabled={componentData.submittingForm} className='btn btn-radius py-3 w-100 btn-primary'>Add Bank </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog >
    )
}

export default SettingsAddBank