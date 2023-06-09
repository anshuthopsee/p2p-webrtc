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
  copyButtonStyle, 
  copyIconStyle 
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

  const handlePeersConnected = () => {
    setAppState('peers-connected');
  };

  useEffect(async () => {
    const result = await PC.createAnswer();
    console.log(result)
    setAnswer(result);

    document.addEventListener('peers-connected', handlePeersConnected);
    return () => document.removeEventListener('peers-connected', handlePeersConnected);
  }, []);

  return (
    <Box {...boxStyle(90, true)}>
      <Typography variant={'h6'}>Send Answer to Peer</Typography>
      {/* <QRCode value={answer}/> */}
      <Box {...containerStyle}>
      <TextField {...textFieldStyle}
       label={'copy-sdp-answer'}
       value={answer}
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
    </Box>
  );
}

export default CreateAnswer;