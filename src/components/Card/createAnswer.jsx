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
  const { setToastState } = useContext(AppContext);
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

  const createAnswer = async () => {
    const result = await PC.createAnswer();
    console.log(result)
    setAnswer(result);
  };

  useEffect(() => {
    createAnswer();
  }, []);

  return (
    <Box {...boxStyle(90, true)}>
      <Typography variant={'h6'}>Share Answer with Peer</Typography>
      {/* <QRCode value={answer}/> */}
      <Box {...containerStyle}>
      <TextField {...textFieldStyle}
        label={answer ? 'copy-sdp-answer' : "creating-sdp-answer..."}
       value={answer}
       />
      <Button 
        {...copyButtonStyle}
        onClick={handleCopy}
        disabled={!answer}
      >
          <ContentCopyIcon 
            disabled={!answer}
            {...copyIconStyle}
          />
      </Button>
      </Box>
    </Box>
  );
}

export default CreateAnswer;