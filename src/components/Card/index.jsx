import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { PC } from "../AppContextProvider";
import { Box, Grid, Button } from '@mui/material/';
import CreateOffer from "./createOffer";
import CreateAnswer from "./createAnswer";
import AcceptOffer from "./acceptOffer";
import AcceptAnswer from "./acceptAnswer";
import { 
  gridProps, 
  boxProps,
  itemProps, 
  buttonProps 
} from "./styling";

const boxStyling = {
  sx: {
    bgcolor: 'white', 
    top: '5rem',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '5px'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'fixed',
  minHeight: '270px',
  maxWidth: '400px',
  zIndex: 2
};

const Card = () => {
  const { 
    appState, 
    setAppState,
    setToastState 
  } = useContext(AppContext);

  const [disabled, setDisabled] = useState(true);

  const Select = () => {
    return (
      <>
        <Box {...boxProps(90, true)}>
            <Button {...buttonProps}
              disabled={disabled} 
              onClick={() => setAppState('create-offer')}>
                Create Offer
            </Button>
            <Button {...buttonProps}
              disabled={disabled}
              onClick={() => setAppState('accept-offer')}>
                Accept Offer
              </Button>
        </Box>
      </>
    );
  };

  useEffect(async () => {
    try {
      await PC.setup();
      setDisabled(false);
    } catch {
      setDisabled(true)
      setToastState({
        show: true,
        severity: "error",
        message: "This app requires Camera/Microphone permission. Refresh the page and provide access."
      });
    };
  }, []);

  const renderContent = () => {
    if (appState === "action-select") return <Select/>
    if (appState === "create-offer") return <CreateOffer/>
    if (appState === "accept-answer") return <AcceptAnswer/>
    if (appState === "accept-offer") return <AcceptOffer/>
    if (appState === "create-answer") return <CreateAnswer/>
  };

  return (
    <Box {...boxStyling}>
      <div className='title code'>p2p-webrtc</div>
      <span className='text code'>Video call, chat and share files with a peer seamlessly, without the use of a server.</span>
      {renderContent()}
    </Box>
  );
};

export default Card;