import axios from 'axios';
import { useRouter } from 'next/router';

export type UserCB = (user: User, error: any) => void

const userEmail = `admin@example.com`
const userPassword = "admin123"


export type User = {
    email_verified_at: any;
    nin_verified_at: string | undefined;
    bvn_verified_at: string | undefined;
    idc_verified_at: string | undefined;
    phone_verified_at: string | undefined;
    email: string
    fname: string
    lname: string
    token: string,
    bank_accounts?: Array<string>
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

    signIn(email: string, password: string, delay = 2000) {
        console.log(`Sign in with email: ${email} password: ${password}`)

        return new Promise((resolve, reject) => {
            if (email !== userEmail || password !== userPassword) {
                const error = { message: "Wrong email or password" }
                this.error = error
                reject(error)
                this.onUserChange(null, this.error)

                return
            }

            setTimeout(() => {
                // this.user = {
                //     name: "Ivan",
                //     email,
                //     token: "dfasdfadsf.asdfasdf.afsdfasd",
                // }

                window.sessionStorage.setItem("user", JSON.stringify(this.user))
                this.onUserChange(this.user)
                resolve(this.user)
            }, delay)
        })
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