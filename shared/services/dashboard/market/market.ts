import axios from 'axios';
import { ICustomHttpResponse } from '../../../interface/global.interface';

const getMarketData = async (): Promise<ICustomHttpResponse> => {
    try {
       const token = window.localStorage.getItem('auth')
       const response = await axios.get(`${process.env.apiUrl}/general/market_data`, {  });  
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
    getMarketData
 }