export interface IDialogs  {
    buySellDialog?: {
        visibitlity?: boolean,
        action?: string,
        step?: number
    },
    sendReceive?: {
        visibitlity?: boolean,
        action?: string,
        step?: number
    },
    sideBarDialogVisibitlity?: boolean,
    coinSwapDialogVisibitlity?: boolean,
    conversionDialogVisibilty?: boolean,
    transferDialogVisibility?: boolean,
    priceAlertsDialogVisibility?: boolean,
    portfolioDetailsDialogVisibility?: boolean,
    portfolioReceiveDialogVisibility?: boolean
    portfolioSendDialogVisibility?: boolean
    portfolioSellDialogVisibility?: boolean,
    portfolioBuyDialogVisibility?: boolean,
    depositConfirmationDialogVisibility?: boolean,
    settingsBanksDialogVisibility?: boolean,
    settingsCardsDialogVisibility?: boolean,
    settingsAddBankDialogVisibility?: boolean
    settingsBankDetailsDialogVisibility?: boolean,
    settingsSupportTicketsDialogVisibility?: boolean,
    settingsCreateTicketDialogVisibility?: boolean
    bvnNinUpdateDialog?: {
        visibitlity?: boolean,
        type?: string,
    }
    settingsAvatarDialogVisibility?: boolean,
    settingsMobileMenuVisibility?: boolean,
    profilePinVisibility?: boolean
    verifyPhoneNumberDialogVisibility?: boolean
    WithdrawDialogDialogVisibility?: boolean
    initVerificationDialogDialogVisibility?: boolean
}

export interface IAppState{
    dialogStates?: IDialogs,
    incompleteVerification?: boolean
}

export interface ICustomHttpResponse {
    responseCode: number,
    data: any
 }

export interface IPasswordFieldsStates {
    currentPassword?: string,
    password?: string,
    repeatPassword?: string
    pin?: string
    confirmPin?: string
}