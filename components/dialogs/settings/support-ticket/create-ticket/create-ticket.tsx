import { Dialog, MenuItem, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react";
import { IDialogs } from "../../../../../shared/interface/global.interface";
import { getAppData } from "../../../../../shared/services/app/app.service";
import { createSupportTicket } from "../../../../../shared/services/dashboard/settings/support/support.service";
import { CancelIcon } from "../../../../icons/icons";
import useCustomSnackbar from "../../../../snackbar/use-custom-snackbar";

const SettingsCreateTicket = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    const snackbar = useCustomSnackbar();

    interface IData {
        form?: {
            category?: string,
            subject?: string,
            message?: string,
        },
        ticketCategories?: Array<string>,
        formSubmitted?: boolean,
        submittingForm?: boolean
    }

    const initData: IData = {
        form: {
            category: '',
            subject: '',
            message: '',
        },
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
        setData({ ticketCategories: request.data.data.ticket_categories })
    }

    const submit = async () => {
        setData({ formSubmitted: true })
        if (componentData.form?.category && componentData.form?.subject && componentData.form?.message) {
            setData({ submittingForm: true })
            const request = await createSupportTicket(componentData.form)
            if (request.responseCode == 422) {
                snackbar.showError(request.data.message)
                setData({ submittingForm: false })
            } else {
                snackbar.showSuccess(request.data.message);
                setData({ form: {}, formSubmitted: false })
                handleDialogClose()
            }
        }
    };


    useEffect(() => {
        if (open) getData()
    }, [open]);
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
                        <div className="title">Open Ticket</div>
                    </div>
                    <div className="dashbord-right-dialog-inner-content">
                        <div className="form-container">
                            <div >
                                <Select
                                    className={`form-control ${(!componentData.form?.category && componentData.formSubmitted ? 'error' : '')} `}
                                    disableUnderline
                                    displayEmpty
                                    variant='standard'
                                    value={componentData.form?.category}
                                    onChange={(event) => setData({ form: { category: event.target.value, ...componentData.form } })}>
                                    <MenuItem value="" className="ui-select-menu">
                                        <em>Select department</em>
                                    </MenuItem>
                                    {
                                        componentData.ticketCategories?.map(element => {

                                            return (
                                                <MenuItem key={element} value={element} className="ui-select-menu">
                                                    {element}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                                {
                                    (!componentData.form?.category && componentData.formSubmitted &&
                                        <div className='error-message'>Select a department</div>
                                    )
                                }
                            </div>
                            <div className="mt-3">
                                <TextField
                                    className={`form-control ${(!componentData.form?.subject && componentData.formSubmitted ? 'error' : '')} `}
                                    variant="standard"
                                    placeholder="Subject"
                                    fullWidth
                                    value={componentData.form?.subject}
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    onChange={(event) => setData({ form: { subject: event.target.value, ...componentData.form } })}
                                />
                                {
                                    (!componentData.form?.subject && componentData.formSubmitted &&
                                        <div className='error-message'>Subject is required</div>
                                    )
                                }
                            </div>
                            <div className="mt-3">
                                <TextField
                                    className={`form-control ${(!componentData.form?.message && componentData.formSubmitted ? 'error' : '')} `}
                                    variant="standard"
                                    placeholder="Type your message"
                                    rows={4}
                                    multiline
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    value={componentData.form?.message}
                                    onChange={(event) => setData({ form: { message: event.target.value, ...componentData.form } })}
                                />
                                {
                                    (!componentData.form?.message && componentData.formSubmitted &&
                                        <div className='error-message'>Message is required</div>
                                    )
                                }
                            </div>


                            <div className="mt-4">
                                <button onClick={submit} disabled={componentData.submittingForm} className='btn btn-radius py-3 w-100 btn-primary'>Send </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog >
    )
}

export default SettingsCreateTicket