import axios from "axios";
import { ICustomHttpResponse } from "../../../interface/global.interface";

const getTransactionBreakdown = async (data: object): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth');
        const response = await axios.post(`${process.env.apiUrl}/account/trade_breakdown`, { token, ...data });
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

const getSwapTransactionBreakdown = async (data: object): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth');
        const response = await axios.post(`${process.env.apiUrl}/account/trade_breakdown`, { token, ...data });
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

const completeBuySellTransaction = async (data: object, type: string): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth');
        const response = await axios.post(`${process.env.apiUrl}${type == 'buy' ? '/account/buy_order' : '/account/sell_order'}`, { token, ...data });
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

const getTransactionsList = async (): Promise<ICustomHttpResponse> => {
    try {
        
        const token = window.localStorage.getItem('auth');
        const response = await axios.get(`${process.env.apiUrl}/account/transactions?token=${token}`);
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

const getPortfolioList = async (): Promise<ICustomHttpResponse> => {
    try { 
        const token = window.localStorage.getItem('auth');
        const response = await axios.get(`${process.env.apiUrl}/account/assets?token=${token}`);
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

const swapCoin = async (data: object): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth');
        const response = await axios.post(`${process.env.apiUrl}/account/swap_order`, { token, ...data });
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

const transferFiat = async (data: object): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth');
        const response = await axios.post(`${process.env.apiUrl}/account/transfer_fiat`, { token, ...data });
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

const verifyAccount = async (data: object): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth');
        const response = await axios.post(`${process.env.apiUrl}/general/verify_account`, { ...data });
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
    getTransactionBreakdown,
    completeBuySellTransaction,
    getTransactionsList,
    getPortfolioList,
    swapCoin,
    transferFiat,
    verifyAccount,
    getSwapTransactionBreakdown
}