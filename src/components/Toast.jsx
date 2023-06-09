import { useContext } from "react";
import { AppContext } from "./AppContextProvider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

export default function Toast() {
    const { toastState, setToastState } = useContext(AppContext);

    const handleClose = () => {
        setToastState((prevState) => {
          return {
            show: false,
            message: prevState.message,
            severity: prevState.severity
          };
        });
    };

    return (
      toastState ? 
      <Snackbar 
        open={toastState.show} 
        onClose={handleClose}
        autoHideDuration={3000} 
        TransitionComponent={Slide}
      >
      <Alert 
        severity={toastState.severity} 
        sx={{ width: '100%' }}
      >
        {toastState.message}
      </Alert>
      </Snackbar>
        : ""
    );
};