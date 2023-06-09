import { useState, useContext } from 'react';
import { AppContext } from '../AppContextProvider';
import { 
  Box, 
  Typography,
  TextField, 
  Button } from '@mui/material';
import QrScanner from './QrScanner';
import { PC } from '../AppContextProvider';
import { 
  boxProps,
   textFieldProps, 
   buttonProps
  } from './styling';

const AcceptAnswer = () => {
  const { setAppState } = useContext(AppContext);
  const [data, setData] = useState("");
  const [rerenderFlag, setRerenderFlag] = useState(false);

  const handleCLRandRS = () => {
    setRerenderFlag(!rerenderFlag);

    if (data) {
      setData("");
    };
  };

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  const handleConnectToPeer = () => {
    const dataAsJSON = JSON.parse(data);
    PC.acceptAnswer(dataAsJSON);
  };

  return (
    <Box {...boxProps(90, true)}>
      <Typography variant={'h6'}>Scan Answer QR Code</Typography>
      <QrScanner {...{ 
        data, 
        setData, 
        rerenderFlag, 
        setRerenderFlag 
        }
      }/>
      <Box {...boxProps(100)}>
        <TextField {...textFieldProps} 
        focused={data ? true : false} 
        label={'paste-sdp-answer'}
        value={data}
        onChange={handleOnChange}
        />
        <Button {...buttonProps}
          onClick={handleCLRandRS}
        >
          {'[ Clear & Re-scan ]'}
        </Button>
        <Button {...buttonProps}
          onClick={handleConnectToPeer}
        >
          {'Connect to peer'}
        </Button>
      </Box>
    </Box>
  )
}

export default AcceptAnswer