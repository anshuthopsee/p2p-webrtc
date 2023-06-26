export const chatBoxStyle = {
  display: 'flex',
  height: '15vh',
  minHeight: '15vh',
  width: '100%',
  rowGap: 1,
  position: 'relative',
  justifyContent: 'center',
};

export const containerStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 1,
  width: '100%',
  marginBottom: '20px',
  position: 'relative'
};

export const textFieldStyle = {
  sx: {
    fieldset: {
      borderColor: '#91e3c2',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      margin: 0,
    },
    input: {
      color: 'black',
    },
    "& label": {
      color: "#91e3c2"
    },
    "& label.Mui-focused": {
      color: "#42f5ad"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#42f5ad",
      }
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#42f5ad"
      }
    }
  },
  fullWidth: true,
  minRows: 3,
  variant: 'outlined',
  multiline: true,
  minRows: 1,
  maxRows: Infinity
};

export const sendButtonStyle = {
  sx: {
    width: '40px',
    height: '55px',
    backgroundColor: '#91e3c2',
    ':hover': {
      backgroundColor: '#42f5ad'
    }
  }
};

export const sendIconStyle = {
  fontSize: 'small',
  sx: {
    fontSize: '20px',
    fill: 'black'
  }
};

export const chatStyle = (expanded) => {
  return {
    display: 'block',
    minHeight: '15vh',
    width: '100%',
    position: 'absolute',
    zIndex: 3,
    border: '1px solid lightgray',
    backgroundColor: 'white',
    opacity: 0.8,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    sx: {
      height: expanded ? '55vh' : '15vh',
      top: expanded ? '-40vh' : '0',
      overflowY: 'scroll',
      background: 'repeating-linear-gradient( 45deg, #dcdede, #dcdede 5px, #ffffff 5px, #ffffff 25px )',
      scrollSnapType: 'y mandatory',
      // '& ::-webkit-scrollbar': {
      //   backgroundColor: 'white'
      // }, 
    }
  };
};

export const expandButtonStyle = (expanded) => {
  return {
    size: 'small',
    sx: {
      position: 'absolute',
      top: expanded ? '-40vh' : '0',
      width: 'fit-content',
      height: '30px',
      backgroundColor: '#91e3c2',
      ':hover': {
        backgroundColor: '#42f5ad'
      },
      zIndex: 4
    }
  };
};

export const expandIconStyle = {
  fontSize: 'small',
  sx: {
    fontSize: '20px',
    fill: 'black'
  }
};

const chatBubbleStyle = {
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  width: 'auto',
  maxWidth: '20rem',
  height: 'auto',
  fontSize: '14px',
  padding: '10px 15px',
  margin: '5px 10px', 
  color: 'black',
  borderRadius: '15px',
  sx:{
    scrollSnapAlign: 'start'
  }
};

export const chatWrapper = {
  position: 'relative',
  top: '30px',
  width: '100%',
  height: 'auto',
  display: 'flex',
};

export const localChatStyle = {
  ...chatBubbleStyle,
  sx: {
    backgroundColor: '#91e3c2',
    wordBreak: 'break-word',
    whiteSpace: 'pre-line'
  }
};

export const remoteChatStyle = {
  ...chatBubbleStyle,
  sx: {
    backgroundColor: '#42f5ad',
    whiteSpace: 'pre-line',
    wordBreak: 'break-word'
  }
};