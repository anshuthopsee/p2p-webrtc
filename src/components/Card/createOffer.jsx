import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContextProvider';
import { 
  Box, 
  Typography,
  TextField, 
  Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import QRCode from 'react-qr-code';
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
  const { setAppState } = useContext(AppContext);
  const [ offer, setOffer ] = useState("");

  useEffect(async () => {
    const result = await PC.createOffer();
    setOffer(result);
  }, []);
  
  return (
    <Box {...boxProps(90, true)}>
      <Typography variant={'h6'}>Offer QR Code</Typography>
      <QRCode value={offer}/>
      <Box {...containerProps}>
        <TextField {...textFieldProps} 
        label={'copy-sdp-offer'}
        value={offer}
        />
        <Button {...copyButtonProps}>
          <ContentCopyIcon {...copyIconProps}/>
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