import { Dialog, TextField } from "@mui/material"
import { IDialogs } from "../../../shared/interface/global.interface"
import { generateDepositWalletAddress, walletWithdraw } from "../../../shared/services/dashboard/wallet/wallet.service";
import { CancelIcon, HometownLogo } from "../../icons/icons";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
import { useEffect, useState } from "react";
import { da } from "date-fns/locale";

const WithdrawDialog = ({ open, setVisibilityState, amount, complete, wallet }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>, amount: any, complete: any, wallet: string }) => {
    const snackbar = useCustomSnackbar()
    

    interface IWallet {
        account?: string,
        amount?: number,
        pin?: string
        wallet?: string
    }
    const data: IWallet = {
        wallet
    }

    const [walletDetails, setWalletDetails] = useState(data);
    const [processingRequest, setProcessingRrquest] = useState(false);

    const setWalletData = (obj: IWallet) => {
        setWalletDetails({...walletDetails, ...obj,  })
    }

    const withdraw = async () => {
        if (!walletDetails.account) {
            snackbar.showError(
                "Enter your username"
            );
            return
        }
        if (!walletDetails.pin) {
            snackbar.showError(
                "Enter your account pin"
            );
            return
        }
        setProcessingRrquest(true)
        const request = await walletWithdraw({...walletDetails, amount});
        if (request.responseCode == 422) {
            setProcessingRrquest(false)
            snackbar.showError(
                request.data && request.data.message ? request.data.message : "An error occured"
            );
        } else {
            setWalletDetails(request.data.data);
            completed()
        }
    }

    const handleDialogClose = () => {
        setVisibilityState({ WithdrawDialogDialogVisibility: false });
        setWalletDetails(data)
    };

    const completed = () => {
        complete();
        handleDialogClose();
    }


    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            <div className="transaction-confirmation animate__animated animate__fadeIn animate__fast p-4">
                <div className="mb-3 dialog-close" onClick={handleDialogClose}>
                    <button onClick={handleDialogClose}>
                        <CancelIcon color="#1d38e4"></CancelIcon>
                    </button>
                </div>
                <div className="heading">Withdraw</div>
                <div className="content">
                    <div className="text-center">

                    </div>
                    <div className="transaction-details">
                        <div className="data">
                            <div className="item"   >
                                <div className="title">
                                    Amount
                                </div>
                                <div className="value">
                                    NGN {amount}
                                </div>
                            </div>
                            <div className='form-content'>
                                <div className="item">
                                    <TextField
                                        className="form-control"
                                        placeholder="Username"
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        variant="standard"
                                        name="walletUsername"
                                        autoComplete="off"
                                        value={walletDetails?.account || ''}
                                        onChange={(e) => {
                                            setWalletData({ account: e.target.value })
                                        }}
                                    />
                                </div>
                                <div className="item">
                                    <TextField
                                        className="form-control"
                                        placeholder="Pin"
                                        type='password'
                                        InputProps={{
                                            disableUnderline: true
                                        }}
                                        name="pin"
                                        variant="standard"
                                        autoComplete="off"
                                        value={walletDetails?.pin || ''}
                                        onChange={(e) => {
                                            setWalletData({ pin: e.target.value })
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button disabled={processingRequest} className='btn btn-radius w-100 btn-primary' onClick={withdraw}>Withdraw</button>
                </div>
            </div>
        </Dialog>
    )
}

export default WithdrawDialog