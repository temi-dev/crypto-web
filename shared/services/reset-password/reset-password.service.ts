import axios from 'axios';
import { ICustomHttpResponse } from '../../interface/global.interface';

const sendResetLink = async (email: string): Promise<ICustomHttpResponse> => {

    try {
       const response = await axios.post(`${process.env.apiUrl}/auth/recovery/email`, {email});
       return {
          responseCode: 200,
          data: response.data
       }
    } catch (error: any) {
       return {
          responseCode: 422,
          data: error.response.data
       }
    }
 
 }
 
 const verifyResetToken = async (token: string): Promise<ICustomHttpResponse> => {

   try {
      const response = await axios.post(`${process.env.apiUrl}/auth/recovery/verify`, {token});
      return {
         responseCode: 200,
         data: response.data
      }
   } catch (error: any) {
      return {
         responseCode: 422,
         data: error.response.data
      }
   }

}

const resetPassword = async (token: string, password: string): Promise<ICustomHttpResponse> => {

   try {
      const response = await axios.post(`${process.env.apiUrl}/auth/recovery/reset`, {token, password});
      return {
         responseCode: 200,
         data: response.data
      }
   } catch (error: any) {
      return {
         responseCode: 422,
         data: error.response.data
      }
   }

}

export {
    sendResetLink,
    verifyResetToken,
    resetPassword
}