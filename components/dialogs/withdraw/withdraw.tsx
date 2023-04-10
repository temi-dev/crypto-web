import { Dialog, TextField } from "@mui/material"
import { IDialogs } from "../../../shared/interface/global.interface"
import { generateDepositWalletAddress, walletWithdraw } from "../../../shared/services/dashboard/wallet/wallet.service";
import { ArrowLeftIcon, CancelIcon, HometownLogo } from "../../icons/icons";
import useCustomSnackbar from "../../snackbar/use-custom-snackbar";
import { useEffect, useState } from "react";
import { da } from "date-fns/locale";
import { verifyAccount } from "../../../shared/services/dashboard/transactions/transaction";
import PinInput from "react-pin-input";

const WithdrawDialog = ({ open, setVisibilityState, amount, complete, wallet }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>, amount: any, complete: any, wallet: string }) => {
    const snackbar = useCustomSnackbar()


    interface IWallet {
        account?: string,
        amount?: number,
        step?: number,
        pin?: string
        wallet?: string,
        verifiedUser?: any
    }
    const data: IWallet = {
        wallet,
        step: 1
    }

    const [walletDetails, setWalletDetails] = useState(data);
    const [processingRequest, setProcessingRequest] = useState(false);

    const setWalletData = (obj: IWallet) => {
        setWalletDetails({ ...walletDetails, ...obj, })
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
        setProcessingRequest(true)
        const request = await walletWithdraw({ ...walletDetails, amount });
        if (request.responseCode == 422) {
            setProcessingRequest(false)
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

    const next = async () => {
        if (!walletDetails.account) {
            return snackbar.showError("Enter your username");
        } else {
            setProcessingRequest(true);
            const request = await verifyAccount({ username: walletDetails.account });
            if (request.responseCode == 422) {
                snackbar.showError(request.data ? request.data.message : "Error occured");
            } else {
                setWalletData({ verifiedUser: request.data.data, step: 2 })
            }
            setProcessingRequest(false)
        }
    }

    const back = () => {
        const step = walletDetails.step! - 1
        setWalletData({ step })
    }


    return (
        <Dialog fullWidth maxWidth='xs' open={open} onClose={handleDialogClose}>
            <div className="transaction-confirmation animate__animated animate__fadeIn animate__fast p-4">
                {
                    walletDetails.step == 1 &&
                    <div className="mb-3 dialog-close" onClick={handleDialogClose}>
                        <button onClick={handleDialogClose}>
                            <CancelIcon color="#1d38e4"></CancelIcon>
                        </button>
                    </div>
                }
                {
                    walletDetails.step != 1 &&
                    <div className="mb-3 back-nav" onClick={back}>
                        <ArrowLeftIcon color="black"></ArrowLeftIcon>
                    </div>
                }
                <div className="content">
                    {walletDetails.step == 1 &&
                        <div className="transaction-details dialog-page">

                            <div className="heading my-5">Withdraw</div>
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
                                </div>

                            </div>
                            <div className="mt-3">
                                <button disabled={!walletDetails.account || processingRequest} className='btn btn-radius w-100 btn-primary' onClick={next}>Continue</button>
                            </div>
                        </div>
                    }
                    {
                        walletDetails.step == 2 &&
                        <div>
                            <div className="heading">Confirm</div>
                            <div className="heading-note">
                                Notice: Ensure that the name of the recipient is corrent as transfer are not reversible
                            </div>
                            <div className="content text-center">
                                <span className="transfer-name-confirmation">
                                    {walletDetails.verifiedUser?.fname}  {walletDetails.verifiedUser?.lname}
                                </span>
                            </div>
                            <div className="mt-3">
                                <button className='btn btn-radius w-100 btn-primary' onClick={() => setWalletData({ step: 3 })}>Continue</button>
                            </div>
                        </div>
                    }
                    {walletDetails.step == 3 &&
                        <div>
                            <div className="data">
                                <div className="heading my-3">Enter Pin</div>
                                <div className='form-content'>

                                    <div className="item text-center">
                                        <PinInput
                                            length={6}
                                            initialValue=""
                                            secret
                                            onChange={(value, index) => {
                                                setWalletData({ pin: value })
                                            }}
                                            type="numeric"
                                            inputMode="number"
                                            style={{ padding: '10px' }}
                                            inputStyle={{ borderColor: '#ececec', borderRadius: '10px' }}
                                            inputFocusStyle={{ borderColor: 'blue' }}
                                            onComplete={(value, index) => {
                                                setWalletData({ pin: value })
                                            }}
                                            autoSelect={true}
                                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="mt-3">
                                <button disabled={processingRequest || !walletDetails.pin} className='btn btn-radius w-100 btn-primary' onClick={withdraw}>Withdraw</button>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </Dialog>
    )
}

export default WithdrawDialog