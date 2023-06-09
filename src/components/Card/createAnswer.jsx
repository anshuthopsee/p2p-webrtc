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
  copyButtonProps, 
  copyIconProps 
} from './styling';

const CreateAnswer = () => {
  const { setAppState } = useContext(AppContext);
  const [answer, setAnswer] = useState("");

  useEffect(async () => {
    const result = await PC.createAnswer();
    console.log(result)
    setAnswer(result);
  }, []);

  return (
    <Box {...boxProps(90, true)}>
      <Typography variant={'h6'}>Answer QR Code</Typography>
      <QRCode value={answer}/>
      <Box {...containerProps}>
      <TextField {...textFieldProps}
       label={'copy-sdp-answer'}
       value={answer}
       />
      <Button {...copyButtonProps}>
          <ContentCopyIcon {...copyIconProps}/>
      </Button>
      </Box>
    </Box>
  );
}

export default CreateAnswer