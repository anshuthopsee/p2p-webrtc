import { useState, useEffect, useRef, useMemo } from 'react'
import { PC } from "../AppContextProvider";
import { Box, TextField, Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
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
  chatWrapper,
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
    if (text) {
      PC.sendChannel.send(text);

      setChatMessages((prevState) => {
        return prevState.concat({local: text});
      });

      setText("");
    };
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
    return chatMessages.map((chat, i) => {
      if (chat.local) {
        return (
        <Box key={i} {...chatWrapper} justifyContent={'flex-end'}>
          <Box {...localChatStyle}>{chat.local}</Box>
        </Box>
        );
      } else if (chat.remote) {
        return (
        <Box key={i} {...chatWrapper} justifyContent={'flex-start'}> 
          <Box {...remoteChatStyle}>{chat.remote}</Box>
        </Box>
        );
      };
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