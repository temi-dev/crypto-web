import { Dialog } from "@mui/material"
import { useEffect, useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { getTickets } from "../../../../shared/services/dashboard/settings/support/support.service";
import { CancelIcon } from "../../../icons/icons"
import SettingsCreateTicket from "./create-ticket/create-ticket";

const SettingsSupportTickets = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IData {
        tickets: Array<any>
    }

    const initData: IData = {
        tickets: []
    }
    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ settingsBanksDialogVisibility: false });
    };
    const DialogsVisibilityInitState: IDialogs = {
        settingsCreateTicketDialogVisibility: false
    }

    const fetchTickets = async () => {
        const request = await getTickets();
        console.log(request)
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    useEffect(() => {
        if (open) fetchTickets()
    }, [open]);

    return (
        <div>
            <Dialog open={open ? open : false} className="animate__animated animate__slideInRight animate__faster" onClose={handleDialogClose} fullScreen>
                <div className="dashbord-right-dialog">
                    <div className="dashbord-right-dialog-content">
                        <div className="dashbord-right-dialog-header">
                            <div className="close-dialog">
                                <button onClick={handleDialogClose}>
                                    <CancelIcon color="#1d38e4"></CancelIcon>
                                </button>
                            </div>
                            <div className="title">Support Tickets</div>
                        </div>
                        <div className="dashbord-right-dialog-inner-content">
                            <div className="form-container">
                                <div className="support-tickets-list">
                                    {
                                        componentData.tickets.map((element) => {
                                            <div className="list">
                                                <div className="text">
                                                    <div>
                                                        <div className="heading">Technical Issue</div>
                                                        <div className="heading-note">
                                                            <div className="ticket-id">#KSL-556-75727</div>
                                                            <div className="timestamp">2 months ago </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="status">
                                                    <span className="dot">&#8226;</span>  <span>Closed</span>
                                                </div>
                                            </div>
                                        })
                                    }

                                </div>
                                <div className="mt-4">
                                    <button onClick={() => setDialogVisibilityState({ settingsCreateTicketDialogVisibility: true })} className='btn btn-radius py-3 w-100 btn-primary'>Open New Ticket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >
            <SettingsCreateTicket open={dialogsVisibilityState.settingsCreateTicketDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsCreateTicket>
        </div>
    )
}

export default SettingsSupportTickets