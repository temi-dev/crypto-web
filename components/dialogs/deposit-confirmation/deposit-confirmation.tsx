import { Dialog } from "@mui/material"
import { IDialogs } from "../../../shared/interface/global.interface"
import { generateDepositWalletAddress } from "../../../shared/services/dashboard/wallet/wallet.service";
import { CancelIcon, HometownLogo } from "../../icons/icons";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
import { useEffect, useState } from "react";

const DepositConfirmation = ({ open, setVisibilityState, amount, wallet, complete }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>, amount: any, wallet: string, complete: any }) => {
    const snackbar = useCustomSnackbar()


    interface IWallet {
        account_id?: string,
        amount?: number,
        name?: string
    }
    const data: IWallet  = {
    }
    const [walletDetails, setWalletDetails] = useState(data);
    const [loading, setLoading] = useState(true)
    const getWalletInfo = async () => {
        setLoading(true)
        const request = await generateDepositWalletAddress(Number(amount), wallet);
        if (request.responseCode == 422) {
            snackbar.showError(
                request.data.message ? request.data.message : "An error occured"
            );
            setLoading(false)
            handleDialogClose();
        } else {
            setWalletDetails(request.data.data);
            setLoading(false)
        }
    }

    const completed = () => {
        complete();
        handleDialogClose();
    }

    const handleDialogClose = () => {
        setVisibilityState({ depositConfirmationDialogVisibility: false });
        setWalletDetails({})
    };
    useEffect(() => {
        if (open) getWalletInfo()
    }, [open]);

    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            <div className="transaction-confirmation animate__animated animate__fadeIn animate__fast p-4">
                <div className="mb-3 dialog-close" onClick={handleDialogClose}>
                    <button onClick={handleDialogClose}>
                        <CancelIcon color="#1d38e4"></CancelIcon>
                    </button>
                </div>
                <div className="heading">Deposit Merchant</div>
                <div className="content">
                    <div className="text-center">

                    </div>
                    <div className="transaction-details">
                        {/* <div className="transaction-details-heading">
                            <HometownLogo></HometownLogo>
                        </div> */}
                        {
                            !loading && walletDetails &&
                            <div>
                                <div className="data">
                                    <div className="item">
                                        <div className="title">
                                            Wallet
                                        </div>
                                        <div className="value">
                                            {wallet}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="title">
                                            Name
                                        </div>
                                        <div className="value">
                                            {walletDetails.name}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="title">
                                            Username
                                        </div>
                                        <div className="value">
                                            {walletDetails.account_id}
                                        </div>
                                    </div>
                                    <div className="item"   >
                                        <div className="title">
                                            Amount
                                        </div>
                                        <div className="value">
                                            NGN {walletDetails.amount}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            loading &&
                            <div className="my-3 text-center">
                                Loading...
                            </div>
                        }
                    </div>
                </div>
                <div className="mt-5">
                    <button className='btn btn-radius w-100 btn-primary' onClick={completed}>Done</button>
                </div>
            </div>
        </Dialog>
    )
}

export default DepositConfirmation