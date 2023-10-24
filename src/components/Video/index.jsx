import { useEffect, useContext, useState, useRef } from 'react'
import { AppContext } from '../AppContextProvider';
import { PC } from '../AppContextProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
      PC.pauseVideo(!prevState);
      setToastState({
        show: true,
        message: !prevState ? 'Video on.' : 'Video off.',
        severity: 'info',
        key: new Date().getTime()
      });
      return !prevState;
    });
  };

  const handleMicBtnClick = () => {
    setIsMicOn((prevState) => {
      PC.pauseAudio(!prevState);
      setToastState({
        show: true,
        message: !prevState ? 'Mic on.' : 'Mic off',
        severity: 'info',
        key: new Date().getTime()
      });
      return !prevState;
    });
  };

  useEffect(() => {
    PC.addEventListener('local-stream-available', handleLocStreamAvailable);
    PC.addEventListener('remote-stream-available', handleRemStreamAvailable);

    return () => {
      PC.removeEventListener('local-stream-available', handleLocStreamAvailable);
      PC.removeEventListener('remote-stream-available', handleRemStreamAvailable);
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