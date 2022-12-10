import axios from 'axios';
import { ICustomHttpResponse } from '../../interface/global.interface';

const signin = async (data: any): Promise<ICustomHttpResponse> => {
   const formData = { ...data }

   try {
      const response = await axios.post(`${process.env.apiUrl}/auth`, formData);
      return {
         responseCode: 200,
         data: response.data
      }
   } catch (error: any) {
      return {
         responseCode: 422,
         data: error.response?.data
      }
   }

}

const sendOtp = async (email: string) => {
   try {
      const response = await axios.post(`${process.env.apiUrl}/auth/send_auth_otp`, { email });
      return {
         responseCode: 200,
         data: response.data
      }
   } catch (error: any) {
      return {
         responseCode: 422,
         data: error.response?.data
      }
   }
}

const verifyAuthOtp = async (email: string, code: string) => {
   try {
      const response = await axios.post(`${process.env.apiUrl}/auth/verify`, { email, auth_code: code });
      window.localStorage.setItem('auth', response.data.data.token)
      return {
         responseCode: 200,
         data: response.data
      }
   } catch (error: any) {
      return {
         responseCode: 422,
         data: error.response?.data
      }
   }
}

export {
   signin,
   verifyAuthOtp
}