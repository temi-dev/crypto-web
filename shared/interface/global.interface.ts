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
    settingsBvnUpdateDialogVisibility?: boolean
    settingsAvatarDialogVisibility?: boolean
}

export interface IAppState{
    dialogStates?: IDialogs
}