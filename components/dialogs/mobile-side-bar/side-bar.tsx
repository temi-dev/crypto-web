import { Dialog } from "@mui/material"
import Link from "next/link"
import router from "next/router"
import { useEffect, useState } from "react"
import { IDialogs } from "../../../shared/interface/global.interface"
import { HomeIcon, ChartIcon, WalletAddIcon, SettingsIcon, QuestionCircleIcon, CircleCancelFilledIcon } from "../../icons/icons"

const MobileSideBar = ({ open, setVisibilityState }: { open: boolean, setVisibilityState: React.Dispatch<React.SetStateAction<IDialogs>> }) => {
    let r: any
    const [myRouter, setMyRouter] = useState(r)
    useEffect(() => {
        setMyRouter(router)
    })
    return (
        <Dialog open={open} fullScreen>
            <div className="mobile-side-bar side-bar">
                <div className="close-mobile-side-bar">
                    <button onClick={() => setVisibilityState({ sideBarDialogVisibitlity : false }) }>                    
                        <CircleCancelFilledIcon fillColor="#EEEEEE" color="#504F54"></CircleCancelFilledIcon>
                    </button>
                </div>

                <div className="menu-links">
                    <ul>
                        <li>
                            <Link href='/dashboard' >
                                <a className={myRouter && myRouter.pathname == "/dashboard" ? "active d-flex" : "d-flex"}>
                                    <HomeIcon color={myRouter && myRouter.pathname == "/dashboard" ? "white" : "#718096"}></HomeIcon>
                                    <span>Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/market'>
                                <a className={myRouter && myRouter.pathname == "/dashboard/market" ? "active d-flex" : "d-flex"}>
                                    <ChartIcon color={myRouter && myRouter.pathname == "/dashboard/market" ? "white" : "#718096"}></ChartIcon>
                                    <span>Market</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard/wallet'>
                                <a className={myRouter && myRouter.pathname == "/dashboard/wallet" ? "active d-flex" : "d-flex"}>
                                    <WalletAddIcon color={myRouter && myRouter.pathname == "/dashboard/wallet" ? "white" : "#718096"}></WalletAddIcon>
                                    <span>Wallet</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard'>
                                <a className="d-flex">
                                    <SettingsIcon></SettingsIcon>
                                    <span>Settings</span>
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <div className="foot-content">
                        <div>
                            <div className="help-center">
                                <div className="circle-icon">
                                    <div className="inner">
                                        <QuestionCircleIcon color="white" secondaryColor="#1D38E4"></QuestionCircleIcon>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="headline">Help Center</div>
                                    <div className="headline-note">
                                        Having issues ?
                                        Please contact us for more question
                                    </div>
                                    <Link href='/dashboard'>Go To Help Center</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Dialog>
    )
}

export default MobileSideBar