import { useEffect, useContext, useRef } from 'react'
import { AppContext } from '../AppContextProvider';
import { PC } from '../AppContextProvider';
import { Box } from '@mui/material';

const boxProps = {
  height: '600px',
  width: '100%',
  marginTop: '2rem',
  border: '3px solid #91e3c2',
  borderRadius: "20px"
};

const Interface = () => {
  const { appState } = useContext(AppContext);
  const localVideoRef = useRef();

  useEffect(() => {
    if (appState === 'peers-connected') {
      localVideoRef.current.srcObject = PC.localStream;
    };
  });

  return (
    <>
      <Box {...boxProps}>
        <video id="vid" ref={localVideoRef} height={'100%'} width={'100%'} ></video>
      </Box>
    </>
  );
};

export default Interface;