import { RemoveRedEye } from "@mui/icons-material";
import { IconButton, InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import { useAuth } from "../../../../../components/auth/auth-provider";
import BackButton from "../../../../../components/back-button/back-button";
import DashboardHeader from "../../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../../components/dashboard-sidebar/dashboard-sidebar";
const Settings: NextPage = () => {
    const { user } = useAuth();
    interface IFormData {
    }

    const formData: IFormData = {
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

                        <DashboardSettingsSidebar user={user!}></DashboardSettingsSidebar>

                    </div>
                    <div className="col-lg-8">
                        <div className="container">
                            <div className="setting-page-header">Change Pin</div>
              
                            <div className="row settings-form">

                                <div>
                                    <label className="form-label">Current Pin</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="Current Pin"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton edge="end" >
                                                        <RemoveRedEye className='grey-icon' />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="form-label">New Pin</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="New Pin"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton edge="end" >
                                                        <RemoveRedEye className='grey-icon' />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="form-label">Confirm New Pin</label>

                                    <TextField
                                        className="form-control"
                                        variant="standard"
                                        placeholder="Confirm New Pin"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton edge="end" >
                                                        <RemoveRedEye className='grey-icon' />
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </div>

                            </div>
                            <div className="form-submit">
                                <BackButton></BackButton>
                                <button className="btn ms-3 btn-primary btn-radius">Save Changes</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Settings