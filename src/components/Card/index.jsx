import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
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
    marginTop: '5rem',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '5px',
    height: '100%'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
};

const Card = () => {
  const { 
    appState, 
    setAppState 
  } = useContext(AppContext);

  const Select = () => {
    return (
      <>
        <Box {...boxProps(90, true)}>

            <Button {...buttonProps} 
              onClick={
                () => setAppState('create-offer')
              }>
                Create Offer
            </Button>

 
            <Button {...buttonProps}
              onClick={
                () => setAppState('accept-offer')
              }>
                Accept Offer
              </Button>

        </Box>
      </>
    );
  };

  const renderContent = () => {
    if (appState === "action-select") return <Select/>
    if (appState === "create-offer") return <CreateOffer/>
    if (appState === "accept-answer") return <AcceptAnswer/>
    if (appState === "accept-offer") return <AcceptOffer/>
    if (appState === "create-answer") return <CreateAnswer/>
  };

  return (
    <Box {...boxStyling}>
      <div className='title code'>webrtc-p2p</div>
      <span className='text code'>Send and recieve texts and files quickly and seamlessly without the use of a server.</span>
      {renderContent()}
    </Box>
  );
};

export default Card;