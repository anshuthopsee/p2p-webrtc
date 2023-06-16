import { useEffect, useContext, useRef } from 'react'
import { AppContext } from '../AppContextProvider';
import { PC } from '../AppContextProvider';
import { Box } from '@mui/material';

const boxProps = {
  height: '600px',
  width: '100%',
  marginTop: '2rem',
  border: '3px solid #91e3c2',
  borderRadius: "20px",
  position: 'relative'
};

const boxProps2 = {
  height: '180px',
  width: '26%',
  position: 'absolute',
  border: '3px solid #91e3c2',
  borderRadius: "10px",
  right: '10px',
  bottom: '10px'
}

const Interface = () => {
  const { appState } = useContext(AppContext);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    if (appState === 'peers-connected') {
      localVideoRef.current.srcObject = PC.localStream;
      localVideoRef.current.play();
      remoteVideoRef.current.srcObject = PC.remoteStream;
      remoteVideoRef.current.play();
    };
  });

  return (
    <>
      <Box {...boxProps}>
        <video ref={remoteVideoRef} height={'100%'} width={'100%'} style={{objectFit: 'cover'}}></video>
        <Box {...boxProps2}>
          <video ref={localVideoRef} height={'100%'} width={'100%'} style={{objectFit: 'cover'}}></video>
        </Box>
      </Box>
    </>
  );
};

export default Interface;