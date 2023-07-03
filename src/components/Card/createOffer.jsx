import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContextProvider';
import { 
  Box, 
  Typography,
  TextField, 
  Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import QRCode from 'react-qr-code';
import { PC } from '../AppContextProvider';
import { 
  boxStyle, 
  containerStyle, 
  textFieldStyle, 
  buttonStyle,
  copyButtonStyle, 
  copyIconStyle 
} from './styling';

const CreateOffer = () => {
  const { setAppState, setToastState } = useContext(AppContext);
  const [ offer, setOffer ] = useState("");

  const handleCopy = async () => {
    if (offer) {
      await navigator.clipboard.writeText(offer);
      setToastState({
        show: true,
        severity: "success",
        message: "Offer copied to clipboard."
      });
    };
  };

  useEffect(async () => {
    const result = await PC.createOffer();
    console.log(result);
    setOffer(result);
  }, []);
  
  return (
    <Box {...boxStyle(90, true)}>
      <Typography variant={'h6'}>Copy & Send Offer to Peer</Typography>
      {/* <QrCode value={offer}/> */}
      <Box {...containerStyle}>
        <TextField {...textFieldStyle} 
        label={'copy-sdp-offer'}
        value={offer}
        />
        <Button 
          {...copyButtonStyle}
          onClick={handleCopy}
        >
          <ContentCopyIcon 
          {...copyIconStyle}
          />
        </Button>
      </Box>
      <Button {...buttonStyle}
        onClick={() => setAppState("accept-answer")}
      >
        Accept Answer
      </Button>
    </Box>
  );
};

export default CreateOffer