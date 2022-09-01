import { MenuItem, Select } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import BackButton from "../../../../../components/back-button/back-button";
import DashboardHeader from "../../../../../components/dashboard-header/dashboard-header";
import DashboardSettingsSidebar from "../../../../../components/dashboard-settings-sidebar/dashboard-settings-sidebar";
import DashboardSidebar from "../../../../../components/dashboard-sidebar/dashboard-sidebar";
const Settings: NextPage = () => {

    interface IFormData {
        transactionSecurity?: string
    }

    const formData: IFormData = {
        transactionSecurity: 'PIN'
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
                            <div className="setting-page-header">Preferenced</div>

                            <div className="row settings-form">

                                <div>
                                    <label className="form-label">Transaction Security</label>

                                    <Select
                                        className="form-control w-100"
                                        disableUnderline
                                        displayEmpty
                                        value={form.transactionSecurity}
                                        variant='standard'
                                    >
                                        <MenuItem value='PIN' className="ui-select-menu">
                                           PIN
                                        </MenuItem>
                                        <MenuItem value='Password' className="ui-select-menu">
                                           Password
                                        </MenuItem>
                                    </Select>
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