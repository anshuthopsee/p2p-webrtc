import { useContext, useEffect } from "react";
import { AppContext } from "./AppContextProvider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export default function Toast() {
    const { toastState, setToastState } = useContext(AppContext);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setToastState((prevState) => {
          return {
            show: false,
            message: prevState.message,
            severity: prevState.severity
          };
        });
      }, 10000);

      return () => clearTimeout(timerId);
    }, [toastState]);

    return (
      <Snackbar 
        open={toastState.show}
        TransitionComponent={Slide}
        disableWindowBlurListener
      >
      <Alert 
        severity={toastState.severity} 
        sx={{ width: '100%' }}
      >
        {toastState.message}
      </Alert>
      </Snackbar>
    );
};