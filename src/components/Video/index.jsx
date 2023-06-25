import { useEffect, useContext, useState, useRef } from 'react'
import { AppContext } from '../AppContextProvider';
import { PC } from '../AppContextProvider';
import { Box, Button } from '@mui/material';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import MicOffIcon from '@mui/icons-material/MicOff';
import { 
  video1BoxStyles, 
  video2BoxStyles, 
  videoStyles, 
  buttonContainerStyle,
  buttonStyle,
  iconStyle
} from './styling';

const Video = () => {
  const { appState, setToastState } = useContext(AppContext);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);

  const handleLocStreamAvailable = () => {
    if (!localVideoRef.current.srcObject) {
      localVideoRef.current.srcObject = PC.localStream;
      localVideoRef.current.muted = true;
      localVideoRef.current.play();
      setIsVideoOn(true);
      setIsMicOn(true);
    };
  };

  const handleRemStreamAvailable = () => {
    if (!remoteVideoRef.current.srcObject) {
      remoteVideoRef.current.srcObject = PC.remoteStream;
      remoteVideoRef.current.play();
    };
  };

  const handleVideoBtnClick = () => {
    setIsVideoOn((prevState) => {
      PC.pauseResumeVideo(!prevState);
      setToastState({
        show: true,
        message: !prevState ? 'Video on.' : 'Video off.',
        severity: 'info'
      });
      return !prevState;
    });
  };

  const handleMicBtnClick = () => {
    setIsMicOn((prevState) => {
      PC.pauseResumeAudio(!prevState);
      setToastState({
        show: true,
        message: !prevState ? 'Mic on.' : 'Mic off',
        severity: 'info'
      });
      return !prevState;
    });
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
        <Box 
          {...buttonContainerStyle}
        >
          <Button {...buttonStyle(isVideoOn)} onClick={handleVideoBtnClick}>
            <VideocamOffIcon {...iconStyle}/> 
          </Button>
          <Button {...buttonStyle(isMicOn)} onClick={handleMicBtnClick}>
            <MicOffIcon {...iconStyle}/> 
          </Button>
        </Box>
        <Box {...video2BoxStyles}>
          <video ref={localVideoRef} {...videoStyles(2)}></video>
        </Box>
      </Box>
    </>
  );
};

export default Video;