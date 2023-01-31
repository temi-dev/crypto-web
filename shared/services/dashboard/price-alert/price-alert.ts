import axios from "axios";
import { ICustomHttpResponse } from "../../../interface/global.interface";

const createPriceAlert = async (data: object): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth');
        const response = await axios.post(`${process.env.apiUrl}/account/price_alert`, { token, ...data });
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

export{
    createPriceAlert
}