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
  copyButtonProps, 
  copyIconProps 
} from './styling';

const CreateAnswer = () => {
  const { setAppState, setToastState } = useContext(AppContext);
  const [answer, setAnswer] = useState("");

  const handleCopy = () => {
    if (answer) {
      navigator.clipboard.writeText(answer);
      setToastState({
        show: true,
        severity: "success",
        message: "Answer copied to clipboard."
      });
    };
  };

  useEffect(async () => {
    const result = await PC.createAnswer();
    console.log(result)
    setAnswer(result);
  }, []);

  return (
    <Box {...boxProps(90, true)}>
      <Typography variant={'h6'}>Send Answer to Peer</Typography>
      {/* <QRCode value={answer}/> */}
      <Box {...containerProps}>
      <TextField {...textFieldProps}
       label={'copy-sdp-answer'}
       value={answer}
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
    </Box>
  );
}

export default CreateAnswer