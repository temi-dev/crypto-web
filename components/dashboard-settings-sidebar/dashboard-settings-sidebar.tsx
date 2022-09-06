import Link from "next/link";
import { useState } from "react";
import { IDialogs } from "../../shared/interface/global.interface";
import BvnUpdate from "../dialogs/settings/bvn-update/bvn-update";
import { ChevronRightIcon, FilterFilledIcon, GiftBoxIllustration, GuardFilledIcon, NotificationFilledIcon, PeopleFilledIcon, UserFilledIcon, WalletCircleFilledIcon, WalletFilledIcon } from "../icons/icons";

const DashboardSettingsSidebar = () => {
    const DialogsVisibilityInitState: IDialogs = {
        settingsBvnUpdateDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    return (
        <div>
            <div className="settings-complete-profile">
                <div className="top">
                    <div className="chart">

                    </div>
                    <div className="text">
                        <div>
                            <div className="heading">Complete Profile</div>
                            <div className="heading-note">Complete your profile to unlock all features</div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <button onClick={() => setDialogVisibilityState({ settingsBvnUpdateDialogVisibility: true })}>Verify BVN</button>
                </div>
            </div>

            <div className="settings-invite">
                <div className="icon">
                    <GiftBoxIllustration></GiftBoxIllustration>
                </div>
                <div className="text">
                    <div>
                        <div className="heading">Invite Friends</div>
                        <div className="heading-note">Invite your friends and get NGN500</div>
                    </div>
                </div>
                <div className="icon">
                    <ChevronRightIcon color="white"></ChevronRightIcon>
                </div>
            </div>

            <div className="settings-tab">
                <Link href='/dashboard/settings' >
                    <div className="tab active">
                        <div className="icon">
                            <UserFilledIcon color="#1D38E4" fillColor="white"></UserFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Account</div>
                                <div className="heading-note">Manage your personal Information</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='/dashboard/settings/security'>
                    <div className="tab ">
                        <div className="icon">
                            <GuardFilledIcon color="#1D38E4" fillColor="white"></GuardFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Login and Security</div>
                                <div className="heading-note">Protect your account and transactions.</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='/dashboard/settings/preferences'>
                    <div className="tab ">
                        <div className="icon">
                            <FilterFilledIcon color="#1D38E4" fillColor="white"></FilterFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Preferences</div>
                                <div className="heading-note">Update your default currency.</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='/dashboard/settings/banks'>
                    <div className="tab ">
                        <div className="icon">
                            <WalletCircleFilledIcon color="#1D38E4" fillColor="white"></WalletCircleFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Banks and Card</div>
                                <div className="heading-note">View and update your bank accounts.</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='/dashboard/settings/notifications'>
                    <div className="tab ">
                        <div className="icon">
                            <NotificationFilledIcon color="#1D38E4" fillColor="white"></NotificationFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Notifications</div>
                                <div className="heading-note">Manage notifications</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href='/dashboard/settings/support'>
                    <div className="tab ">
                        <div className="icon">
                            <PeopleFilledIcon color="#1D38E4" fillColor="white"></PeopleFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Help and Support</div>
                                <div className="heading-note">Customer support from Kochure Team</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <BvnUpdate open={dialogsVisibilityState.settingsBvnUpdateDialogVisibility!} setVisibilityState={setDialogVisibilityState}></BvnUpdate>
        </div>
    )
}

export default DashboardSettingsSidebar;