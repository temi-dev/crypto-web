import axios from 'axios';
import moment from 'moment';
import { ICustomHttpResponse } from '../../interface/global.interface';



const createAccount = async (data: any): Promise<ICustomHttpResponse> => {
   const formData = { ...data }
   delete formData.repeatPassword;
   delete formData.acceptTerms;
   formData.country_code = 'NG';

   formData.dob = moment(data.dob, 'YYYY-MM-DD').format('DD-MM-YYYY');
   try {
      const response = await axios.post(`${process.env.apiUrl}/auth/register`, formData);
      window.localStorage.setItem('auth', response.data.data)
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

const setupPin = async (pin: string) => {
   const token = window.localStorage.getItem('auth')
   try {
      const response = await axios.post(`${process.env.apiUrl}/account/create_pin`, { pin, token });
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

const verifyEmailAddress = async (token: string): Promise<ICustomHttpResponse> => {

   try {
      const response = await axios.post(`${process.env.apiUrl}/auth/verify/email`, {token});
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
   createAccount,
   setupPin,
   verifyEmailAddress
}