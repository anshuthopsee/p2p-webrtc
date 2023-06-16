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
  boxProps, 
  containerProps, 
  textFieldProps, 
  buttonProps,
  copyButtonProps, 
  copyIconProps 
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
    <Box {...boxProps(90, true)}>
      <Typography variant={'h6'}>Copy & Send Offer to Peer</Typography>
      {/* <QRCode value={offer}/> */}
      <Box {...containerProps}>
        <TextField {...textFieldProps} 
        label={'copy-sdp-offer'}
        value={offer}
        />
        <Button 
          {...copyButtonProps}
          onClick={handleCopy}
        >
          <ContentCopyIcon 
          {...copyIconProps}
          />
        </Button>
      </Box>
      <Button {...buttonProps}
        onClick={() => setAppState("accept-answer")}
      >
        Accept Answer
      </Button>
    </Box>
  );
};

export default CreateOffer