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
  buttonProps, 
  textFieldProps 
} from './styling';




const AcceptOffer = () => {
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

  const handleCreateAnswer = async () => {
    if (data) {
      const dataAsJSON = JSON.parse(data);
      await PC.acceptOffer(dataAsJSON);
      setAppState("create-answer");
    };
  };

  return (
    <Box {...boxProps(90)}>
      <Typography variant={'h6'}>Scan Offer QR Code</Typography>
      <QrScanner {...{ 
        data, 
        setData, 
        rerenderFlag, 
        setRerenderFlag 
        }
      }/>
      <Box {...boxProps(100, true)}>
        <TextField {...textFieldProps} 
        focused={data ? true : false} 
        label={'paste-sdp-offer'}
        value={data}
        onChange={handleOnChange}
        />
        <Button {...buttonProps}
          onClick={handleCLRandRS}
        >
          {'[ Clear & Re-scan ]'}
        </Button>
        <Button {...buttonProps}
          onClick={handleCreateAnswer}
        >
          Create Answer
        </Button>
      </Box>
    </Box>
  );
};

export default AcceptOffer