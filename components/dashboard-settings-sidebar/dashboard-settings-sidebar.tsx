import Link from "next/link";
import { useState } from "react";
import { IDialogs } from "../../shared/interface/global.interface";
import BvnUpdate from "../dialogs/settings/bvn-update/bvn-update";
import { NextRouter, useRouter } from "next/router";
import { ChevronRightIcon, FilterFilledIcon, GiftBoxIllustration, GuardFilledIcon, NotificationFilledIcon, PeopleFilledIcon, UserFilledIcon, WalletCircleFilledIcon } from "../icons/icons";

const DashboardSettingsSidebar = () => {
    const router: NextRouter = useRouter();

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
                    <div className={router.pathname == "/dashboard/settings" ? "active tab" : "tab"}>
                        <div className="icon">
                            <UserFilledIcon
                                color={router.pathname == "/dashboard/settings" ? "#1D38E4" : "#130F26"}
                                fillColor={router.pathname == "/dashboard/settings" ? "white" : "#F7FAFC"}></UserFilledIcon>
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
                    <div className={router.pathname.includes("/dashboard/settings/security") ? "active tab" : "tab"}>
                        <div className="icon">
                            <GuardFilledIcon
                                color={router.pathname.includes("/dashboard/settings/security") ? "#1D38E4" : "#130F26"}
                                fillColor={router.pathname.includes("/dashboard/settings/security") ? "white" : "#F7FAFC"}></GuardFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Login and Security</div>
                                <div className="heading-note">Protect your account and transactions.</div>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* <Link href='/dashboard/settings/preferences'>
                    <div className={router.pathname.includes("/dashboard/settings/preferences") ? "active tab" : "tab"}>
                        <div className="icon">
                            <FilterFilledIcon
                                color={router.pathname.includes("/dashboard/settings/preferences") ? "#1D38E4" : "#130F26"}
                                fillColor={router.pathname.includes("/dashboard/settings/preferences") ? "white" : "#F7FAFC"}></FilterFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Preferences</div>
                                <div className="heading-note">Update your default currency.</div>
                            </div>
                        </div>
                    </div>
                </Link> */}
                <Link href='/dashboard/settings/banks'>
                    <div className={router.pathname.includes("/dashboard/settings/banks") ? "active tab" : "tab"}>
                        <div className="icon">
                            <WalletCircleFilledIcon
                                color={router.pathname.includes("/dashboard/settings/banks") ? "#1D38E4" : "#130F26"}
                                fillColor={router.pathname.includes("/dashboard/settings/banks") ? "white" : "#F7FAFC"}></WalletCircleFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Banks and Card</div>
                                <div className="heading-note">View and update your bank accounts.</div>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* <Link href='/dashboard/settings/notifications'>
                    <div className={router.pathname.includes("/dashboard/settings/notifications") ? "active tab" : "tab"}>
                        <div className="icon">
                            <NotificationFilledIcon
                                color={router.pathname.includes("/dashboard/settings/notifications") ? "#1D38E4" : "#130F26"}
                                fillColor={router.pathname.includes("/dashboard/settings/notifications") ? "white" : "#F7FAFC"}></NotificationFilledIcon>
                        </div>
                        <div className="text">
                            <div>
                                <div className="heading">Notifications</div>
                                <div className="heading-note">Manage notifications</div>
                            </div>
                        </div>
                    </div>
                </Link> */}
                <Link href='/dashboard/settings/support/contacts'>
                    <div className={router.pathname.includes("/dashboard/settings/support") ? "active tab" : "tab"}>
                        <div className="icon">
                            <PeopleFilledIcon
                                color={router.pathname.includes("/dashboard/settings/support") ? "#1D38E4" : "#130F26"}
                                fillColor={router.pathname.includes("/dashboard/settings/support") ? "white" : "#F7FAFC"}></PeopleFilledIcon>
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