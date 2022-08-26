import Image from "next/image"
import Link from "next/link"
import { NextRouter, useRouter } from "next/router";
import { HomeIcon, ChartIcon, WalletAddIcon, WalletIcon, BriefcaseIcon, SettingsIcon, QuestionCircleIcon } from "../icons/icons"

const DashboardSidebar = () => {
    const router: NextRouter = useRouter();

    return (
        <div className="side-bar">
            <div className="top-section">
                <Image alt="logo" className='logo' src={'/logo-coloured.svg'} width='132 px' height='32px'></Image>
            </div>
    
            <div className="menu-links">
                <ul>
                    <li>
                        <Link href='/dashboard' >
                            <a className={router.pathname == "/dashboard" ? "active d-flex" : "d-flex"}>
                                <HomeIcon color={router.pathname == "/dashboard" ? "white" : "#718096"}></HomeIcon>
                                <span>Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard/market'>
                            <a className={router.pathname == "/dashboard/market" ? "active d-flex" : "d-flex"}>
                                <ChartIcon color={router.pathname == "/dashboard/market" ? "white" : "#718096"}></ChartIcon>
                                <span>Market</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard/wallet'>
                            <a className={router.pathname == "/dashboard/wallet" ? "active d-flex" : "d-flex"}>
                                <WalletAddIcon color={router.pathname == "/dashboard/wallet" ? "white" : "#718096"}></WalletAddIcon>
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
    )
}
export default DashboardSidebar