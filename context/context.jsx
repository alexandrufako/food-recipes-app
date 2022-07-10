import {createContext, useContext, useState} from "react";

export const Ctx = createContext();
export const Provider = ({ children }) => {
    const [ globalState, setGlobalState ] = useState({

        //    chei si valori din stateul global de care voi avea nevoie

    });

    return <Ctx.Provider value={{ globalState, setGlobalState}}>{ children }</Ctx.Provider>;
}