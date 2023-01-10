import axios from 'axios';
import { ICustomHttpResponse } from '../../../../interface/global.interface';

const getTickets = async (): Promise<ICustomHttpResponse> => {
   const token = window.localStorage.getItem('auth')
   try {
      const response = await axios.get(`${process.env.apiUrl}/account/tickets?token=${token}`);
      return {
         responseCode: 200,
         data: response.data
      }
   } catch (error: any) {
      return {
         responseCode: 422,
         data: error.response
      }
   }

}

const createSupportTicket = async (data: any): Promise<ICustomHttpResponse> => {
   try {
      const token = window.localStorage.getItem('auth')
      const response = await axios.post(`${process.env.apiUrl}/account/ticket`, { ...data, token });  
      return {
         responseCode: 200,
         data: response.data
      }
   } catch (error: any) {
      return {
         responseCode: 422,
         data: error.response
      }
   }

}
export {
   getTickets,
   createSupportTicket
}