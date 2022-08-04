import Link from "next/link"
import { HomeIcon, ChartIcon, WalletAddIcon, WalletIcon, BriefcaseIcon, SettingsIcon, QuestionCircleIcon } from "./icons"

const DashboardSidebar = () => {
    return (
        <div className="side-bar">
            <div className="top-section">
                <img className='logo' src={'/logo-coloured.svg'} width='132 px' height='32px'></img>
            </div>
            <div className="menu-links">
                <ul>
                    <li>
                        <Link href='/dashboard'>
                            <a className="active d-flex">
                                <HomeIcon color="white"></HomeIcon>
                                <span>Overview</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>
                            <a className="d-flex">
                                <ChartIcon></ChartIcon>
                                <span>Market</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>
                            <a className="d-flex">
                                <WalletAddIcon></WalletAddIcon>
                                <span>Add money</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>
                            <a className="d-flex">
                                <WalletIcon></WalletIcon>
                                <span>My wallets</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>
                            <a className="d-flex">
                                <BriefcaseIcon></BriefcaseIcon>
                                <span>Portfolios</span>
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
                        <ul>
                            <li>
                                <Link href='/dashboard'>
                                    <a className="d-flex">
                                        <SettingsIcon></SettingsIcon>
                                        <span>Settings</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DashboardSidebar