import axios from 'axios';
import { useAuth } from './auth-provider';
export type UserCB = (user: User, error: any) => void

export type User = {
    dp_verified_at: any;
    first_layer_verf_completed: any;
    idc_uploaded_at?: any;
    second_layer_verf_completed?: any;
    account_verified?: any;
    dob?: any;
    email_verified_at: any;
    nin_verified_at: Date | undefined;
    bvn_verified_at: Date | undefined;
    idc_verified_at: Date | undefined;
    phone_verified_at: Date | undefined;
    email: string
    fname: string
    lname: string
    token: string,
    username: string,
    dp_uploaded_at: string,
    pin_exists: boolean,
    bank_accounts?: Array<any>
    phone: string,
    available_bal?: number,
    transactions?: Array<any>
    portfolios?: Array<any>
}

export class Auth {
    user: User | null

    error: { message: string } | null

    cb: UserCB | null | undefined

    constructor() {
        this.user = null
        this.error = null
    }

    onAuthStateChanged(cb: UserCB) {
        this.cb = cb

        return () => {
            this.cb = null
        }
    }

    protected onUserChange(user: User | null, error?: { message: string }) {
        console.log(this.user)
        this.cb && this.cb(user!, error)
    }

    signOut() {
        window.localStorage.removeItem("auth")
        window.location.href = '/'
        this.user = null
        this.onUserChange(this.user)
    }

    async resolveUser() {
        if (window) {
            const token = window.localStorage.getItem("auth")
            if (token) {
                try {
                    const request = await axios.get(`${process.env.apiUrl}/account?token=${token}`)
                    this.user = request.data.data
                } catch (error) {

                }
            }
        } else {
            this.user = null
        }

        this.onUserChange(this.user)

        return this.user
    }

    
}