import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContextProvider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
        message: "Offer copied to clipboard.",
        key: new Date().getTime()
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
        label={offer ? 'copy-sdp-offer' : "creating-sdp-offer..."}
        value={offer}
        >
          {!offer && "Loading"}
        </TextField>
        <Button 
          {...copyButtonStyle}
          onClick={handleCopy}
          disabled={!offer}
        >
          <ContentCopyIcon 
            disabled={!offer}
            {...copyIconStyle}
          />
        </Button>
      </Box>
      <Button {...buttonStyle}
        onClick={() => setAppState("accept-answer")}
        disabled={!offer}
      >
        Accept Answer
      </Button>
    </Box>
  );
};

export default CreateOffer;