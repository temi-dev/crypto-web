import { MenuItem, Select, TextField } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import SettingsAvatar from "../../../components/dialogs/settings/avatar/avatar";
import { IDialogs } from "../../../shared/interface/global.interface";

const Settings: NextPage = () => {
    const DialogsVisibilityInitState: IDialogs = {
        settingsAvatarDialogVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    interface IFormData {
        gender?: string,
        country?: string,
        state?: string,
    }

    const formData: IFormData = {
        gender: 'male',
        country: 'nigeria',
        state: 'lagos'
    }

    const [form, setFormData] = useState(formData);

    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Account Settings"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-lg-4 settings-left">
                        <div className="mobile-dashboard-page-title">
                            Account Settings
                        </div>

                        <DashboardSettingsSidebar></DashboardSettingsSidebar>

                    </div>
                    <div className="col-lg-8">
                        <div className="container">
                            <div className="setting-page-header">Personal Information</div>
                            <div className="settings-profile-details">
                                <div className="text-center" >
                                    <div className="profile-image-placeholder" >
                                        <div style={{ backgroundImage: "url(" + "/images/avatar.png" + ")" }}></div>
                                    </div>
                                    <a className="avatar-btn">Upload photo</a>
                                </div>
                                <div className="text">
                                    <div>
                                        <div className="fullname">Oluwayemi Akin</div>
                                        <div className="email">akinolayemi100@gmail.com</div>
                                    </div>
                                </div>

                            </div>
                            <div className="row settings-form">

                                <div className="col-lg-6">
                                    <label className="form-label">First Name</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="First Name"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Last Name</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="Last Name"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Email address</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="Email address"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Phone Number</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="Phone Number"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Gender</label>
                                    <Select
                                        className="form-control w-100"
                                        disableUnderline
                                        displayEmpty
                                        value={form.gender}
                                        variant='standard'
                                    >
                                        <MenuItem value='male' className="ui-select-menu">
                                            Male
                                        </MenuItem>
                                        <MenuItem value='female' className="ui-select-menu">
                                            Female
                                        </MenuItem>
                                    </Select>
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Date of Birth</label>

                                    <TextField
                                        type='date'
                                        className="form-control"
                                        variant="standard"
                                        placeholder="Phone Number"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Country</label>

                                    <Select
                                        className="form-control w-100"
                                        disableUnderline
                                        displayEmpty
                                        value={form.country}
                                        variant='standard'
                                    >
                                        <MenuItem value='nigeria' className="ui-select-menu">
                                            Nigeria
                                        </MenuItem>
                                    </Select>
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">State</label>
                                    <Select
                                        className="form-control w-100"
                                        disableUnderline
                                        displayEmpty
                                        value={form.state}
                                        variant='standard'
                                    >
                                        <MenuItem value='lagos' className="ui-select-menu">
                                            Lagos
                                        </MenuItem>
                                    </Select>
                                </div>

                                <div>
                                    <label className="form-label">Address</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="Address"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                </div>


                            </div>
                            <div className="form-submit">
                                <button className="btn btn-primary btn-radius">Save Changes</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <SettingsAvatar open={dialogsVisibilityState.settingsAvatarDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsAvatar>
        </div>
    )
}

export default Settings