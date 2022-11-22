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
          data: error.response.data
       }
    }
 
 }

 export {
    getTickets
 }