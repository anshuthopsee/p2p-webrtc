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
        message: "Answer copied to clipboard.",
        key: new Date().getTime()
      });
    };
  };

  const handlePeersConnected = () => {
    setAppState('peers-connected');
    setToastState({
      show: true,
      message: "Peer Connected.",
      severity: "success",
      key: new Date().getTime()
    });
  };

  const handlePeersDisconnected = () => {
    setToastState({
      show: true,
      message: "Peer Disconnected.",
      severity: "error",
      key: new Date().getTime()
    });
  };

  useEffect(async () => {
    const result = await PC.createAnswer();
    console.log(result)
    setAnswer(result);

    document.addEventListener('peers-connected', handlePeersConnected);
    document.addEventListener('peers-disconnected', handlePeersDisconnected);
    return () => {
      document.removeEventListener('peers-connected', handlePeersConnected);
      document.removeEventListener('peers-disconnected', handlePeersDisconnected);
    };
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