import axios from "axios";
import { ICustomHttpResponse } from "../../../../interface/global.interface";
import moment from 'moment';

const updateProfile = async (data: any): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      data.dob = moment(data.dob).format('DD-MM-YYYY');
      const response = await axios.patch(`${process.env.apiUrl}/account`, { ...data, token });
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

const updateProfilePicture = async (data: any): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/upload_photo`, { img_string: data, token });
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

const createNewProfilePin = async (pin: any): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/create_pin`, { pin, token });
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

const changeAccountPassword = async (data: any): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.patch(`${process.env.apiUrl}/account/update_password`, { ...data, token });
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

const changeAccountPin = async (data: any): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.patch(`${process.env.apiUrl}/account/update_pin`, { ...data, token });
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

const resendEmailVerification = async (): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/resend_email_verification`, { token });
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

const sendPhoneNumberVerificationCode = async (phone: string): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/send_phone_verf_otp`, { token, phone, country_code: '+234' });
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

const confirmPhoneNumberVerificationCode = async (code: string, phone: string): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/verify_phone`, { 
         token, code, phone, country_code: '+234' });
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

const verifyBvn = async (bvn: string): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/verify_bvn`, { token, bvn });
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

const verifyNin = async (nin: string): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/verify_nin`, { token, nin });
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

const getUser = async (): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.get(`${process.env.apiUrl}/account?token=${token}`);
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
   updateProfile,
   updateProfilePicture,
   createNewProfilePin,
   changeAccountPassword,
   changeAccountPin,
   resendEmailVerification,
   verifyBvn,
   verifyNin,
   getUser,
   sendPhoneNumberVerificationCode,
   confirmPhoneNumberVerificationCode
}