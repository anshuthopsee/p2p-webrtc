import { useState, useContext } from 'react';
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
  buttonStyle, 
  textFieldStyle 
} from './styling';




const AcceptOffer = () => {
  const { setAppState, setToastState } = useContext(AppContext);
  const [data, setData] = useState("");
  const [rerenderFlag, setRerenderFlag] = useState(false);

  const handleCLRandRS = () => {
    if (data) {
      setData("");
    };
  };

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  const handleCreateAnswer = async () => {
    if (data) {
      try {
        const dataAsJSON = JSON.parse(data);
        await PC.acceptOffer(dataAsJSON);
        console.log('accepted-offer');
        setAppState("create-answer");
      } catch {
        setToastState({
          show: true,
          severity: "error",
          message: "Not a valid offer. Please try again."
        });
      };
    };
  };

  return (
    <Box {...boxStyle(90)}>
      <Typography variant={'h6'}>Recieve & Paste Offer from Peer</Typography>
      {/* <QrScanner {...{ 
        data, 
        setData, 
        rerenderFlag, 
        setRerenderFlag 
        }
      }/> */}
      <Box {...boxStyle(100, true)}>
        <TextField {...textFieldStyle} 
        focused={data ? true : false} 
        label={'paste-sdp-offer'}
        value={data}
        onChange={handleOnChange}
        />
        <Button {...buttonStyle}
          onClick={handleCLRandRS}
        >
          {'[ Clear Offer ]'}
        </Button>
        <Button {...buttonStyle}
          onClick={handleCreateAnswer}
        >
          Create Answer
        </Button>
      </Box>
    </Box>
  );
};

export default AcceptOffer;