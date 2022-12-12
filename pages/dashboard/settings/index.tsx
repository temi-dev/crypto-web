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
import { updateProfile, updateProfilePicture } from "../../../shared/services/dashboard/settings/profile/profile.service";
import SettingsMobileMenu from "../../../components/dialogs/settings/mobile-menu/mobile-menu";
import moment from 'moment';
import SettingsMenuCta from "../../../components/setting-menu-cta/settings-menu-cta";
import useCustomSnackbar from "../../../components/snackbar/use-custom-snackbar";
import ProfilePin from "../../../components/dialogs/settings/profile-pin/profile-pin";

const Settings: NextApplicationPage = () => {
    const { user } = useAuth();
    const snackbar = useCustomSnackbar();
    const DialogsVisibilityInitState: IDialogs = {
        settingsAvatarDialogVisibility: false,
        settingsMobileMenuVisibility: false,
        profilePinVisibility: false
    }

    const [dialogsVisibilityState, setDialogVisibilityState] = useState({ ...DialogsVisibilityInitState });

    const openMobileMenu = () => {
        setDialogVisibilityState({ ...dialogsVisibilityState, settingsMobileMenuVisibility: true })
    }

    interface IData {
        gender?: string,
        country?: string,
        city?: string,
        fname?: string,
        lname?: string,
        dob?: string,
        email?: string,
        phone?: string,
        phone_verified_at?: Date,
        nin_verified_at?: Date,
        bvn_verified_at?: Date,
        idc_verified_at?: Date,
        email_verified_at?: Date,
        profile_pics?: any,
        selectedProfilePicture?: any,
        processingRequest?: boolean
    }

    const data: IData = {
        processingRequest: false,
        country: 'nigeria',
        
        profile_pics: user!.dp_uploaded_at?  `${process.env.apiUrl}/static/profile_pics/${user!.username}/dp.png` : '',
        ...user,
    }

    const [componentData, setComponentData] = useState(data);

    const saveProfile = async (pin: number) => {
        let data = {
            email: componentData.email,
            dob: componentData.dob,
            fname: componentData.fname,
            lname: componentData.lname,
            gender: componentData.gender,
            city: componentData.city,
            phone: componentData.phone,
            pin
        };
        setComponentData({ ...componentData, processingRequest: true })
        const request = await updateProfile(data)
        if (request.responseCode == 422) {
            snackbar.showError(
                request.data.message
            );
        } else {
            user!.fname = componentData.fname!
            user!.lname = componentData.lname!
            user!.email = componentData.email!
            user!.pin_exists = true
            snackbar.showSuccess(
                request.data.message
            );
        }
        setComponentData({ ...componentData, processingRequest: false })
    }

    const encodeImageFileAsURL = (element: any) => {
        var file = element.target.files[0];
        var reader = new FileReader();
        reader.onloadend = async function () {
            setComponentData({ ...componentData, selectedProfilePicture: null,  profile_pics: reader.result })
          
            const request = await updateProfilePicture(reader.result)
            if (request.responseCode == 422) {
                snackbar.showError(
                    request.data.message
                );
            } else {
                snackbar.showSuccess(
                    request.data.message
                );
            }
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className="dashboard">
            <DashboardSidebar></DashboardSidebar>

            <div className="dashboard-content">

                <DashboardHeader title="Account Settings"></DashboardHeader>
                <div className="row m-auto dashboard-inner-content pb-4">
                    <div className="col-lg-4 settings-left">

                        <DashboardSettingsSidebar></DashboardSettingsSidebar>

                    </div>
                    <div className="col-lg-8">
                        <div className="settings-container">
                            <SettingsMenuCta cta={openMobileMenu}></SettingsMenuCta>

                            <div className="setting-page-header">Personal Information</div>
                            <div className="settings-profile-details">
                                <div className="text-center" >
                                    <div className="profile-image-placeholder" >
                                        <div style={{ backgroundImage: "url(" + componentData.profile_pics + ")" }}></div>
                                    </div>
                                    <label className="avatar-btn" htmlFor="fileInput">Upload photo
                                        <input value={componentData.selectedProfilePicture} className="custom-file-input" id="fileInput" type="file" accept="image/png,image/jpg,image/jpeg" onChange={(e) => encodeImageFileAsURL(e)} />
                                    </label>

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
                                        disabled={componentData.email_verified_at ? true : false}
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
                                            inputFormat="DD-MM-YYYY"
                                            value={componentData.dob}
                                            onChange={(value) => setComponentData({ ...componentData, dob: value! })}
                                            renderInput={
                                                (params) =>
                                                    <TextField
                                                        variant='standard'
                                                        fullWidth
                                                        className={`form-control ${(!componentData.dob ? 'error' : '')} `}
                                                        placeholder='DD-MM-YYYY'
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
                                <button onClick={() => setDialogVisibilityState({profilePinVisibility : true})} disabled={componentData.processingRequest} className="btn btn-primary btn-radius">Save Changes</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <SettingsAvatar open={dialogsVisibilityState.settingsAvatarDialogVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsAvatar>

            <SettingsMobileMenu open={dialogsVisibilityState.settingsMobileMenuVisibility!} setVisibilityState={setDialogVisibilityState}></SettingsMobileMenu>

            <ProfilePin user={user!} open={dialogsVisibilityState.profilePinVisibility!} setVisibilityState={setDialogVisibilityState} snackbar={snackbar} next={saveProfile}></ProfilePin>
        </div>
    )
}

Settings.requireAuth = true
export default Settings