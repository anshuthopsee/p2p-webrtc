import { useState, useEffect } from 'react'
import { PC } from "../AppContextProvider";
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
  expandIconStyle,
  localChatStyle,
  remoteChatStyle
} from './styling';

const Chat = () => {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleExpand = () => {
    setExpanded(!expanded)
  };

  const handleSend = () => {
    PC.sendChannel.send(text);

    setChatMessages((prevState) => {
      return prevState.concat({local: text});
    });

    setText("");
  };

  const handleOnTextChange = (e) => {
    setText(e.target.value);
  };

  const renderIcon = () => {
    if (expanded) {
      return <ExpandMoreIcon {...expandIconStyle}/>
    };
    return <ExpandLessIcon {...expandIconStyle}/>
  };

  const handleMessageRecieved = (e) => {
    const { detail } = e;
    setChatMessages((prevState) => {
      return prevState.concat({remote: detail.message});
    });
  };

  const renderChatMessages = () => {
    let top = -15
    return chatMessages.map((chat, i) => {
      top+=45
      if (chat.local) {
        return <Box key={i} {...localChatStyle} top={`${top}px`}>{chat.local}</Box>
      } else if (chat.remote) {
        return <Box key={i} {...remoteChatStyle} top={`${top}px`}>{chat.remote}</Box>
      }
    });
  };

  useEffect(() => {
    console.log(chatMessages)
    document.addEventListener('recieved-message', handleMessageRecieved);
    return () => document.removeEventListener(
      'recieved-message', 
      handleMessageRecieved
    );
  }, [chatMessages]);

  return (
    <>
      <Box {...chatBoxStyle}>
        <Button {...expandButtonStyle(expanded)} onClick={handleExpand}>
          {renderIcon()}
        </Button>
        <Box {...chatStyle(expanded)}>
          {renderChatMessages()}
        </Box>
      </Box>
      <Box {...containerStyle}>
        <TextField 
          {...textFieldStyle} 
          label={'send-a-message'}
          value={text}
          onChange={handleOnTextChange}
        />
        <Button 
          {...sendButtonStyle}
          onClick={handleSend}
        >
          <SendIcon {...sendIconStyle}/>
        </Button>
      </Box>
    </>
  );
};

export default Chat