import { Dialog, MenuItem, Select } from "@mui/material"
import Image from "next/image";
import { useState } from "react";
import { IDialogs } from "../../../../shared/interface/global.interface"
import { CancelIcon, CopyIcon } from "../../../icons/icons"

const PortfolioReceive = ({ open, setVisibilityState, coin}: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>>, coin: string }) => {

    interface IData {
    }

    const initData: IData = {
    }
    const [componentData, setComponentData] = useState(initData);

    const setData = (data: IData) => {
        setComponentData({ ...componentData, ...data });
    };

    const handleDialogClose = () => {
        setVisibilityState({ portfolioReceiveDialogVisibility: false });
    };
    return (
        <Dialog open={open} onClose={handleDialogClose} className="animate__animated animate__slideInRight animate__faster" fullScreen>
            <div className="dashbord-right-dialog">
                <div className="dashbord-right-dialog-content">
                    <div className="dashbord-right-dialog-header">
                        <div className="close-dialog">
                            <button onClick={handleDialogClose}>
                                <CancelIcon color="#1d38e4"></CancelIcon>
                            </button>
                        </div>
                        <div className="title">Receive <span>{coin}</span></div>
                    </div>
                    <div className="dashbord-right-dialog-inner-content">
                        <div className="portfolio-receive-address">
                            <div className="title">Wallet address</div>
                            <div className="address-barcode">
                                <Image alt="barcode" src='/images/barcode.png' height='240px' width='240px'></Image>
                            </div>
                            
                        </div>

                        <div className="wallet-address-clipboard">
                            <div className="address text-truncate">
                                Z9fB9JfMi5ec8R3RA2LIZ9fB9JfMi5ec8R3RA2LI
                            </div>
                            <div className="copy">
                                <button><CopyIcon color="#1d38e4"></CopyIcon></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Dialog >
    )
}

export default PortfolioReceive