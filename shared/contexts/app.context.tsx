import { createContext, useContext, useState } from "react";
import { IAppState, IDialogs } from "../interface/global.interface";


const dialogStates: IDialogs = {
}

const initialAppData :  IAppState = {
    dialogStates
}

type IAppContext = [IAppState, React.Dispatch<React.SetStateAction<IAppState>>];

const Context = createContext<IAppContext>([{}, () => null]);

export function AppProvider({ children }: { children: any }) {
    const [appState, setAppState] = useState<IAppState>(initialAppData);
    return (
        <Context.Provider value={[appState, setAppState]}>{children}</Context.Provider>
    );
}

export function useAppContext() {
    return useContext(Context);
}