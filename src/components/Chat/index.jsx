import { useState, useEffect, useRef } from 'react'
import { PC } from "../AppContextProvider";
import { Box, TextField, Button } from '@mui/material';
import FileInput from './FileInput';
import ChatMessages from './ChatMessages';
import SendIcon from '@mui/icons-material/Send';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  chatBoxStyle,
  textFieldStyle, 
  sendButtonStyle, 
  sendIconStyle,
  containerStyle,
  fieldContainerStyle,
  chatStyle,
  expandButtonStyle,
  expandIconStyle
} from './styling';

const Chat = () => {
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [sendProgress, setSendProgress] = useState(0);
  const [receiveProgress, setReceiveProgress] = useState(0);
  const [sendComplete, setSendComplete] = useState(true);
  const [file, setFile] = useState(null);
  const chatContainerRef = useRef();
  const fileChunksRef = useRef({});

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleSend = () => {
    if (text || file) {
      const payload = {
        file: null, 
        chat: text, 
        index: 
        chatMessages.length
      };

      if (file) {
        payload.file = {
          name: file.name,
          size: file.size,
          chunk: file,
          complete: false
        };
        setSendComplete(false);
      };

      PC.send({...payload}, setSendProgress).then(() => {
        if (payload.file) {
          setChatMessages((prevState) => {
            const current = prevState[payload.index];
            current.local.file.complete = true;
            return [...prevState];
          });
          setSendComplete(true);
          setSendProgress(0);
        };
      });

      setChatMessages((prevState) => {
        return prevState.concat({local: payload});
      });

      setText("");
      setFile(null);
    };
  };

  const handleOnTextChange = (e) => {
    setText(e.target.value);
  };

  const handleMessageReceived = (e) => {
    const { message } = e.detail;
    const { file, index } = message;

    if (file) {
      if (!fileChunksRef.current.hasOwnProperty(index)) {
        fileChunksRef.current[index] = [];
        setChatMessages((prevState) => {
          return prevState.concat({ remote: message });
        });
      };

      if (file.complete) {
        setChatMessages((prevState) => {
          prevState[index].remote.file.complete = true;
          return [...prevState];
        });
        setReceiveProgress(0);
      };

      fileChunksRef.current[index].push(file.chunk[0]);
      
      setReceiveProgress((prevState) => {
        const chunkSize = 16*1024;
        let receivedSize = fileChunksRef.current[index].length*chunkSize;
        receivedSize = receivedSize > file.size ? file.size : receivedSize;
        const percentage = Number(((receivedSize/file.size)*100).toFixed(0));
        if (percentage !== prevState) return percentage;
        return prevState;
      });
      return;
    };
  
    setChatMessages((prevState) => {
      return prevState.concat({ remote: message });
    });
  };

  const renderIcon = () => {
    if (expanded) {
      return <ExpandMoreIcon {...expandIconStyle}/>
    };
    return <ExpandLessIcon {...expandIconStyle}/>
  };

  

  useEffect(() => {
    document.addEventListener(
      'received-message', 
      handleMessageReceived
    );
    return () => document.removeEventListener(
      'received-message', 
      handleMessageReceived
    );
  }, [chatMessages, expanded]);

  return (
    <>
      <Box {...chatBoxStyle}>
        <Button 
          {...expandButtonStyle(expanded)} 
          onClick={handleExpand}>
          {renderIcon()}
        </Button>
        <Box 
          ref={chatContainerRef}
          {...chatStyle(expanded)}
        >
          <ChatMessages
            chats={chatMessages}
            sendProgress={sendProgress}
            receiveProgress={receiveProgress}
            fileChunksRef={fileChunksRef}
          />
        </Box>
      </Box>
      <Box {...containerStyle}>
        <Box {...fieldContainerStyle}>
          <TextField 
            {...textFieldStyle}
            label={'send-a-message'}
            value={text}
            onChange={handleOnTextChange}
          />
        </Box>
        <FileInput
          file={file}
          setFile={setFile}
        />
        <Button 
          {...sendButtonStyle}
          onClick={handleSend}
          disabled={!sendComplete}
        >
          <SendIcon {...sendIconStyle}/>
        </Button>
      </Box>
    </>
  );
};

export default Chat