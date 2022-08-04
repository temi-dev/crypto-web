import { BellIcon, ChevronDownIcon } from "./icons"
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";

const DashboardHeader = ({ title }: { title: string }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="header px-3 d-flex">
            <div className="title">{title}</div>
            <div className="d-flex flex-grow-1  align-items-center justify-content-end">
                <button className="btn d-none d-lg-block btn-primary" onClick={handleClickOpen}>Buy / Sell</button>
                <button className="btn d-none d-lg-block btn-secondary">Send / Receive</button>
                <button className="notification-btn">
                    <BellIcon color="black"></BellIcon>
                </button>
                <button className="profile-menu align-items-center d-flex">
                    <div className="profile-image " style={{ backgroundImage: "url(" + "/images/profile.png" + ")" }}></div>
                    <div className="profile-name">Oluwayemi</div>
                    <div className="profile-menu-nav ms-2">
                        <ChevronDownIcon color="#718096"></ChevronDownIcon></div>
                </button>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}>Cancel</Button> */}
                    {/* <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default DashboardHeader