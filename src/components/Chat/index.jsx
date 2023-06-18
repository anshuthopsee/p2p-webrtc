import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
  chatBoxStyle,
  textFieldStyle, 
  sendButtonStyle, 
  sendIconStyle,
  containerStyle,
  chatStyle
} from './styling';

const Chat = () => {
  return (
    <Box {...chatBoxStyle}>
      <Box {...chatStyle}>

      </Box>
      <Box {...containerStyle}>
        <TextField {...textFieldStyle} label={'send-a-message'}></TextField>
        <Button {...sendButtonStyle}>
          <SendIcon {...sendIconStyle}/>
        </Button>
      </Box>
    </Box>
  );
};

export default Chat