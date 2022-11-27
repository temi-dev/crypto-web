import axios from "axios";
import { ICustomHttpResponse } from "../../../../interface/global.interface";
const updateProfile = async (data: any): Promise<ICustomHttpResponse> => {
    try {
       const token = window.localStorage.getItem('auth')
       const response = await axios.patch(`${process.env.apiUrl}/account`, { ...data, token });  
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
    updateProfile
 }