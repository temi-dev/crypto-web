import { Dialog } from "@mui/material"
import { IDialogs } from "../../../shared/interface/global.interface"
import { CancelIcon, HometownLogo } from "../../icons/icons";

const DepositConfirmation = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {
    const handleDialogClose = () => {
        setVisibilityState({ depositConfirmationDialogVisibility: false });
    };
    return (
        <Dialog fullWidth maxWidth='xs'  open={open} onClose={handleDialogClose}>
            <div className="transaction-confirmation animate__animated animate__fadeIn animate__fast p-4">
                <div className="mb-3 dialog-close" onClick={handleDialogClose}>
                    <button onClick={handleDialogClose}>
                        <CancelIcon color="#1d38e4"></CancelIcon>
                    </button>
                </div>
                <div className="heading">Deposit Merchant</div>
                <div className="content">
                    <div className="text-center">
                        <div>
                            <div className="contact-image-placeholder" style={{ backgroundImage: "url(" + "/images/img.png" + ")" }}></div>
                            <div className="contact-name text-truncate">Miliano</div>
                        </div>

                    </div>
                    <div className="transaction-details">
                        <div className="transaction-details-heading">
                            <HometownLogo></HometownLogo>
                        </div>
                        <div className="data">
                            <div className="item">
                                <div className="title">
                                    Wallet
                                </div>
                                <div className="value">
                                    Hometown
                                </div>
                            </div>
                            <div className="item">
                                <div className="title">
                                    Name
                                </div>
                                <div className="value">
                                    John Doe
                                </div>
                            </div>
                            <div className="item">
                                <div className="title">
                                    Username
                                </div>
                                <div className="value">
                                    Owk
                                </div>
                            </div>
                            <div className="item">
                                <div className="title">
                                    Amount
                                </div>
                                <div className="value">
                                    NGN 5000.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button className='btn btn-radius w-100 btn-primary' onClick={handleDialogClose}>Done</button>
                </div>
            </div>
        </Dialog>
    )
}

export default DepositConfirmation