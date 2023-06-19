import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  chatBoxStyle,
  textFieldStyle, 
  sendButtonStyle, 
  sendIconStyle,
  containerStyle,
  chatStyle,
  expandButtonStyle,
  expandIconStyle
} from './styling';

const Chat = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded)
  };

  const renderIcon = () => {
    if (expanded) {
      return <ExpandMoreIcon {...expandIconStyle}/>
    };

    return <ExpandLessIcon {...expandIconStyle}/>
  };

  return (
    <>
      <Box {...chatBoxStyle}>
        <Button {...expandButtonStyle(expanded)} onClick={handleExpand}>
          {renderIcon()}
        </Button>
        <Box {...chatStyle(expanded)}>
        </Box>
      </Box>
      <Box {...containerStyle}>
        <TextField {...textFieldStyle} label={'send-a-message'}></TextField>
        <Button {...sendButtonStyle} >
          <SendIcon {...sendIconStyle}/>
        </Button>
      </Box>
    </>
  );
};

export default Chat