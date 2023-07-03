import { Box, Button, Typography } from '@mui/material';
import { shortenFilename, downloadFile } from './helper';
import ProgressBar from './ProgressBar';
import {
  chatWrapper,
  localChatStyle,
  remoteChatStyle,
  fileInfoStyle,
  downloadBtnStyle,
} from './styling';

const ChatMessages = (
    { chats, 
      sendProgress, 
      receiveProgress, 
      fileChunksRef 
    }
  ) => {
  const fileInfo = (file, index, type) => {
    const isRemote = type === 'remote';
    const isComplete = file.complete;
    const filename = shortenFilename(file.name);
  
    return (
      <>
        <Typography {...fileInfoStyle}>
          {isRemote ? 
          `${isComplete ? 
            'Received' : 'Receiving'}: ${filename}` 
              : 
            `${isComplete ? 
              'Sent' : 'Sending'}: ${filename}` 
          }
        </Typography>
        {!isComplete ? (
          <ProgressBar 
            value={isRemote ? 
              receiveProgress 
                : 
              sendProgress} 
            />
        ) : (
          <Button
            onClick={() => downloadFile(isRemote ? 
              fileChunksRef.current[index] 
                : 
              [file.chunk], file.name)}
            {...downloadBtnStyle}
          >
            Download File
          </Button>
        )}
      </>
    );
  };
  return (
    chats.map((chat, i) => {
      if (chat.local) {
        return (
        <Box 
          key={i}
          {...chatWrapper} 
          justifyContent={'flex-end'}
        >
          <Box {...localChatStyle}>
            {chat.local.file ? 
              fileInfo(chat.local.file, chat.local.index, 'local') 
              : 
            ""}
            {chat.local.chat}
          </Box>
        </Box>
        );
      } else if (chat.remote) {
        return (
        <Box 
          key={i} 
          {...chatWrapper} 
          justifyContent={'flex-start'}
        > 
          <Box {...remoteChatStyle}>
            {chat.remote.file ? 
              fileInfo(chat.remote.file, chat.remote.index, 'remote') 
                : 
              ""}
            {chat.remote.chat}
          </Box>
        </Box>
        );
      };
    })
  );
};

export default ChatMessages