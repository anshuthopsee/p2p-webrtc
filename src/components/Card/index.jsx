import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { PC } from "../AppContextProvider";
import { Box, Button, Typography } from '@mui/material/';
import { ThemeProvider } from '@mui/material/styles';
import CreateOffer from "./createOffer";
import CreateAnswer from "./createAnswer";
import AcceptOffer from "./acceptOffer";
import AcceptAnswer from "./acceptAnswer";
import { 
  cardStyle,
  backgroundStyle,
  boxStyle,
  buttonStyle,
  typographyTheme
} from "./styling";

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
        <Box {...boxStyle(90, true)}>
            <Button {...buttonStyle}
              disabled={disabled} 
              onClick={() => setAppState('create-offer')}>
                Create Offer
            </Button>
            <Button {...buttonStyle}
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
    appState !== "peers-connected" ? 
    <Box {...backgroundStyle}>
      <Box {...cardStyle}>
        <ThemeProvider theme={typographyTheme}>
          <Typography variant="h2">p2p-webrtc</Typography>
          <Typography variant="body1">Serverless demonstration of WebRTC capabilites such as Video, Audio, Text & Files exchange, peer to peer.</Typography>
        </ThemeProvider>
        {renderContent()}
      </Box>
    </Box>
    : 
      ""
  );
};

export default Card;