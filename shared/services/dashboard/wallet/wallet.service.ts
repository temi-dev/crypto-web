import axios from 'axios';
import { da } from 'date-fns/locale';
import { ICustomHttpResponse } from '../../../interface/global.interface';

const getBankPeer2PeerDepositChannels = async (type: string): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth')
        const response = await axios.get(`${process.env.apiUrl}/general/p2p_banks?type=${type}`);
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

const getWalletProviders = async (): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth')
        const response = await axios.get(`${process.env.apiUrl}//general/p2p_wallet_providers`);
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

const generateDepositWalletAddress = async (amount: number, wallet: string): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth')
        const response = await axios.get(`${process.env.apiUrl}/account/p2p_deposit_account?token=${token}&amount=${amount}&tag=${wallet}`);
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

const walletWithdraw = async (data: any): Promise<ICustomHttpResponse> => {
    try {
        const token = window.localStorage.getItem('auth')
        const response = await axios.post(`${process.env.apiUrl}/account/withdraw_fiat`, {...data, token});
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
    getBankPeer2PeerDepositChannels,
    generateDepositWalletAddress,
    walletWithdraw,
    getWalletProviders
}