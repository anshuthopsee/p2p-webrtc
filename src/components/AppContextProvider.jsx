import { useState, createContext, useRef, useEffect } from "react";
import P2P from "../p2p";

export const PC = new P2P();

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState("action-select");
  const [toastState, setToastState] = useState({
    show: false,
    severity: "info",
    message: ""
  });

  return (
    <AppContext.Provider 
    value={
      { 
        appState, 
        setAppState,
        toastState,
        setToastState
      }
    }>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;