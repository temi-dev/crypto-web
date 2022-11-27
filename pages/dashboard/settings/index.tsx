import { MenuItem, Select, TextField } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { useAuth } from "../../../components/auth/auth-provider";
import DashboardHeader from "../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../components/dashboard-sidebar/dashboard-sidebar";
import SettingsAvatar from "../../../components/dialogs/settings/avatar/avatar";
import { IDialogs } from "../../../shared/interface/global.interface";
import { NextApplicationPage } from "../../_app";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { updateProfile } from "../../../shared/services/dashboard/settings/profile/profile.service";

const Settings: NextApplicationPage = () => {
    const { user } = useAuth()


    const DialogsVisibilityInitState: IDialogs = {
        settingsAvatarDialogVisibility: false,
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    interface IData {
        gender?: string,
        country?: string,
        city?: string,
        fname?: string,
        lname?: string,
        dob?: string,
        email?: string,
        phone?: string,
        phone_verified_at?: string,
        nin_verified_at?: string,
        bvn_verified_at?: string,
        idc_verified_at?: string,
    }

    const data: IData = {
        country: 'nigeria',
        ...user
    }

    const [componentData, setComponentData] = useState(data);

    const saveProfile = () => {
        let data = {
            email: componentData.email,
            dob: componentData.dob,
            // city: componentData.city,
            pin: '126969'
        };

        const request = updateProfile(data)
    }

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

                        <DashboardSettingsSidebar user={user!}></DashboardSettingsSidebar>

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
                                        <div className="fullname">{`${user?.fname} ${user?.lname}`}</div>
                                        <div className="email">{user?.email}</div>
                                    </div>
                                </div>

                            </div>
                            <div className="row settings-form">

                                <div className="col-lg-6">
                                    <label className="form-label">First Name</label>

                                    <TextField
                                        className={`form-control ${(!componentData.fname ? 'error' : '')} `}
                                        variant="standard"
                                        placeholder="First Name"
                                        value={componentData.fname || ''}
                                        fullWidth
                                        disabled={componentData.bvn_verified_at || componentData.nin_verified_at || componentData.idc_verified_at ? true : false}
                                        onChange={(e) => setComponentData({ ...componentData, fname: e.target.value })}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                    {
                                        !componentData.fname && (
                                            <div className='error-message'>First name is required</div>
                                        )
                                    }
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Last Name</label>

                                    <TextField
                                        className={`form-control ${(!componentData.lname ? 'error' : '')} `}
                                        variant="standard"
                                        placeholder="Last Name"
                                        fullWidth
                                        value={componentData.lname || ''}
                                        disabled={componentData.bvn_verified_at || componentData.nin_verified_at || componentData.idc_verified_at ? true : false}
                                        onChange={(e) => setComponentData({ ...componentData, lname: e.target.value })}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                    {
                                        !componentData.lname && (
                                            <div className='error-message'>Last name is required</div>
                                        )
                                    }
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Email address</label>

                                    <TextField
                                        className={`form-control ${(!componentData.email ? 'error' : '')} `}
                                        variant="standard"
                                        placeholder="Email address"
                                        fullWidth
                                        onChange={(e) => setComponentData({ ...componentData, email: e.target.value })}
                                        value={componentData.email || ''}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                    {
                                        !componentData.email && (
                                            <div className='error-message'>Email is required</div>
                                        )
                                    }
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Phone Number</label>

                                    <TextField
                                        className={`form-control ${(!componentData.phone ? 'error' : '')} `}
                                        variant="standard"
                                        placeholder="Phone Number"
                                        fullWidth
                                        disabled={componentData.phone_verified_at ? true : false}
                                        value={componentData.phone || ''}
                                        onChange={(e) => setComponentData({ ...componentData, phone: e.target.value })}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                    {
                                        !componentData.phone && (
                                            <div className='error-message'>Phone number is required</div>
                                        )
                                    }
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Gender</label>
                                    <Select
                                        className={`form-control ${(!componentData.gender ? 'error' : '')} `}
                                        disableUnderline
                                        displayEmpty
                                        onChange={(e) => setComponentData({ ...componentData, gender: e.target.value })}
                                        value={componentData.gender || ''}
                                        variant='standard'
                                    >
                                        <MenuItem value='Male' className="ui-select-menu">
                                            Male
                                        </MenuItem>
                                        <MenuItem value='Female' className="ui-select-menu">
                                            Female
                                        </MenuItem>
                                    </Select>
                                    {
                                        !componentData.gender && (
                                            <div className='error-message'>Gender is required</div>
                                        )
                                    }
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Date of Birth</label>

                                    <LocalizationProvider dateAdapter={AdapterMoment}>
                                        <DatePicker
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            className={`form-control ${(!componentData.dob ? 'error' : '')} `}
                                            inputFormat="DD/MM/YYYY"
                                            value={componentData.dob || ''}
                                            onChange={(value) => setComponentData({ ...componentData, dob: value! })}
                                            renderInput={
                                                (params) =>
                                                    <TextField
                                                        variant='standard'
                                                        fullWidth
                                                        className={`form-control ${(!componentData.dob ? 'error' : '')} `}
                                                        placeholder='DD/MM/YYYY'
                                                        {...params} />
                                            } />
                                    </LocalizationProvider>
                                    {
                                        !componentData.dob && (
                                            <div className='error-message'>Date of birth is required</div>
                                        )
                                    }
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">Country</label>

                                    <Select
                                        className="form-control w-100"
                                        disableUnderline
                                        displayEmpty
                                        value={componentData.country || ''}
                                        variant='standard'
                                    >
                                        <MenuItem value='nigeria' className="ui-select-menu">
                                            Nigeria
                                        </MenuItem>
                                    </Select>
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label">City</label>
                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="City"
                                        fullWidth
                                        onChange={(e) => setComponentData({ ...componentData, city: e.target.value })}
                                        value={componentData.city || ''}
                                        InputProps={{
                                            disableUnderline: true,
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="form-submit">
                                <button onClick={saveProfile} className="btn btn-primary btn-radius">Save Changes</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <SettingsAvatar open={dialogsVisibilityState.settingsAvatarDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsAvatar>
        </div>
    )
}

Settings.requireAuth = true
export default Settings