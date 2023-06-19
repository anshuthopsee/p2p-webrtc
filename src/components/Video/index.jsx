import { useEffect, useContext, useRef } from 'react'
import { AppContext } from '../AppContextProvider';
import { PC } from '../AppContextProvider';
import { Box } from '@mui/material';
import { video1BoxStyles, video2BoxStyles, videoStyles } from './styling';

const Video = () => {
  const { appState } = useContext(AppContext);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  const handleLocStreamAvailable = () => {
    if (!localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject = PC.localStream;
      localVideoRef.current.play();
    };
  };

  const handleRemStreamAvailable = () => {
    if (!remoteVideoRef.current.srcObject) {
      remoteVideoRef.current.srcObject = PC.remoteStream;
      remoteVideoRef.current.play();
    };
  };

  useEffect(() => {
    document.addEventListener('local-stream-available', handleLocStreamAvailable);
    document.addEventListener('remote-stream-available', handleRemStreamAvailable);

    return () => {
      document.removeEventListener('local-stream-available', handleLocStreamAvailable);
      document.removeEventListener('remote-stream-available', handleRemStreamAvailable);
    };
  }, []);

  return (
    <>
      <Box {...video1BoxStyles}>
        <video ref={remoteVideoRef} {...videoStyles(1)}></video>
        <Box {...video2BoxStyles}>
          <video ref={localVideoRef} {...videoStyles(2)}></video>
        </Box>
      </Box>
    </>
  );
};

export default Video;