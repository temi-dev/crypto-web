import { Dialog } from "@mui/material"
import { useEffect, useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { formatDate } from "../../../../shared/services/app/app.service";
import { getTickets } from "../../../../shared/services/dashboard/settings/support/support.service";
import DateFormatElement from "../../../date-format/date-format";
import { CancelIcon, PeopleFilledIcon } from "../../../icons/icons"
import SettingsCreateTicket from "./create-ticket/create-ticket";

const SettingsSupportTickets = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {

    interface IData {
        fetchingTickets?: boolean
        tickets?: Array<any>
    }

    const initData: IData = {
        tickets: [],
        fetchingTickets: true
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
        setData({ fetchingTickets: true })
        const request = await getTickets();
        setData({ tickets: request.data.data, fetchingTickets: false })
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });
 
    useEffect(() => {
        if (open) fetchTickets()
    }, [open,dialogsVisibilityState.settingsCreateTicketDialogVisibility ]);

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
                            <div className="title">My Support Tickets</div>
                        </div>
                        <div className="dashbord-right-dialog-inner-content">
                            <div className="form-container">
                                <div className="support-tickets-list">
                                    {
                                       !componentData.fetchingTickets && componentData.tickets?.map((element) => {
                                            return (
                                                <div className="list" key={element.id}>
                                                    <div className="text">
                                                        <div>
                                                            <div className="heading">{element.category}</div>
                                                            <div className="heading-note">
                                                                <div className="ticket-id">#{element.id}</div>
                                                            <div className="timestamp">
                                                             <DateFormatElement date={element.created_at} format='DD-MMM-yyyy'></DateFormatElement>   
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="status">
                                                        <span className="dot">&#8226;</span>  
                                                        {
                                                            element.status == 0 && 
                                                            <span>Open</span>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {
                                      !componentData.fetchingTickets &&  componentData.tickets?.length == 0 &&
                                        <div className="text-center">
                                            <PeopleFilledIcon
                                                color='white'
                                                fillColor='#1D38E4'></PeopleFilledIcon>
                                            <div className="mt-3">No Tickets</div>
                                        </div>
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