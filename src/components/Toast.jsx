import { useContext, useEffect } from "react";
import { AppContext } from "./AppContextProvider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export default function Toast() {
    const { toastState, setToastState } = useContext(AppContext);

    const handleExited = () => {
      setToastState((prevState) => {
        return {
          show: false,
          message: undefined,
          severity: prevState.severity,
          key: prevState.key
        };
      });
    };

    const handleClose = (e, reason) => {
      if (reason === "clickaway") return;
      
      setToastState((prevState) => {
        return {
          show: false,
          message: prevState.message,
          severity: prevState.severity,
          key: prevState.key
        };
      });
    };

    useEffect(() => {
    

    }, [toastState.message, toastState.show]);

    return (
      <Snackbar
        key={toastState.key}
        open={toastState.show}
        TransitionComponent={Slide}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionProps={
        {
          onExited: handleExited
        }}
        disableWindowBlurListener
      >
      <Alert 
        severity={toastState.severity} 
        sx={{ width: '100%' }}
      >
        {console.log(toastState.key)}
        {toastState.message}
      </Alert>
      </Snackbar>
    );
};