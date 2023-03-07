import axios from 'axios';
import { ICustomHttpResponse } from '../../interface/global.interface';
import moment from 'moment';

const getAppData = async (): Promise<ICustomHttpResponse> => {
   const token = window.localStorage.getItem('auth')
   try {
      const response = await axios.get(`${process.env.apiUrl}/general?app_version=1.0.9`);
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

const formatDate = async (date: string, format?: string) => {
   return moment(date, 'YYYY-MM-DD').format(format ? format : 'DD-MM-YYYY')
}

export {
   getAppData,
   formatDate
}