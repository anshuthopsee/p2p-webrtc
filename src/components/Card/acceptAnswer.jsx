import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContextProvider';
import { 
  Box, 
  Typography,
  TextField, 
  Button } from '@mui/material';
// import QrScanner from './QrScanner';
import { PC } from '../AppContextProvider';
import { 
  boxStyle,
   textFieldStyle, 
   buttonStyle
} from './styling';

const AcceptAnswer = () => {
  const { setAppState, setToastState } = useContext(AppContext);
  const [data, setData] = useState("");
  // const [rerenderFlag, setRerenderFlag] = useState(false);

  const handleCLRandRS = () => {
    if (data) {
      setData("");
    };
  };

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  const handleConnectToPeer = async () => {
    try {
      const dataAsJSON = JSON.parse(data);
      await PC.acceptAnswer(dataAsJSON);
      console.log('accepted-answer');
    } catch {
      setToastState({
        show: true,
        severity: "error",
        message: "Not a valid answer. Please try again."
      });
    };
  };

  const handlePeersConnected = () => {
    setAppState('peers-connected');
  };

  useEffect(() => {
    document.addEventListener('peers-connected', handlePeersConnected);
    return () => document.removeEventListener('peers-connected', handlePeersConnected);
  }, []);

  return (
    <Box {...boxStyle(90, true)}>
      <Typography variant={'h6'}>Recieve & Paste Answer from Peer</Typography>
      {/* <QrScanner {...{ 
        data, 
        setData, 
        rerenderFlag, 
        setRerenderFlag 
        }
      }/> */}
      <Box {...boxStyle(100)}>
        <TextField {...textFieldStyle} 
        focused={data ? true : false} 
        label={'paste-sdp-answer'}
        value={data}
        onChange={handleOnChange}
        />
        <Button {...buttonStyle}
          onClick={handleCLRandRS}
        >
          {'[ Clear Answer ]'}
        </Button>
        <Button {...buttonStyle}
          onClick={handleConnectToPeer}
        >
          {'Connect to peer'}
        </Button>
      </Box>
    </Box>
  )
}

export default AcceptAnswer;