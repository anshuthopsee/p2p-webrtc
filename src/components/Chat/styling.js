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
  alignItems: 'flex-end',
  columnGap: 1,
  width: '100%',
  marginBottom: '20px',
  position: 'relative'
};

export const fieldContainerStyle = {
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center'
};

export const fileButtonStyle = {
  sx: {
    backgroundColor: '#91e3c2',
    ':hover': {
      backgroundColor: '#42f5ad'
    },
    minHeight: '40px',
    minWidth: '45px'
  }
};

export const iconStyle = {
  sx: {
    fill: 'black'
  }
};

export const textFieldStyle = {
  size: 'small',
  sx: {
    fieldset: {
      borderColor: '#91e3c2',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      margin: 0
    },
    input: {
      color: 'black'
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
  variant: 'outlined',
  multiline: true,
  minRows: 1,
  maxRows: Infinity
};

export const sendButtonStyle = {
  sx: {
    bgcolor: '#91e3c2',
    ':hover': {
      bgcolor: '#42f5ad'
    },
    color: 'black',
    minHeight: '40px',
    minWidth: '45px'
  }
};

export const sendIconStyle = {
  fontSize: 'small',
};

export const inputWrapperStyle = {
  position: 'relative'
}

export const fileInputStyle = {
  style: {
    display: 'none',
    position: 'absolute'
  }
};

export const fileLabelStyle = {
  style: {
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  }
}

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
      backgroundColor: '#ffffff',
      opacity: 1,
      backgroundImage: 'repeating-linear-gradient(45deg, #dcdede 25%, transparent 25%, transparent 75%, #dcdede 75%, #dcdede), repeating-linear-gradient(45deg, #dcdede 25%, #ffffff 25%, #ffffff 75%, #dcdede 75%, #dcdede)',
      backgroundPosition: '0 0, 10px 10px',
      backgroundSize: '20px 20px',
      // background: 'repeating-linear-gradient( 45deg, #dcdede, #dcdede 5px, #ffffff 5px, #ffffff 25px )',
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
      top: expanded ? 'calc(-40vh - 30px)' : '-30px',
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
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 'auto',
  maxWidth: '20rem',
  height: 'auto',
  fontSize: '14px',
  padding: '10px 15px',
  margin: '0 10px', 
  marginBottom: '10px',
  color: 'black',
  borderRadius: '15px',
  sx:{
    scrollSnapAlign: 'start'
  }
};

export const chatWrapper = {
  position: 'relative',
  width: '100%',
  height: 'auto',
  top: '10px',
  display: 'flex',
};

export const localChatStyle = {
  ...chatBubbleStyle,
  sx: {
    backgroundColor: '#91e3c2',
    wordBreak: 'break-word',
    alignItems: 'flex-start',
    whiteSpace: 'pre-line'
  }
};

export const remoteChatStyle = {
  ...chatBubbleStyle,
  sx: {
    backgroundColor: '#42f5ad',
    alignItems: 'flex-start',
    whiteSpace: 'pre-line',
    wordBreak: 'break-word'
  }
};

export const fileInfoStyle = {
  sx:{
    fontSize: '12px', 
    fontStyle: 'italic'
  }
};

export const downloadBtnStyle = {
  sx: {
    minHeight: '20px',
    backgroundColor: '#45a8e6',
    fontSize: '12px',
    fontWeight: 'bold',
    py: 0,
    color: 'white',
    ':hover': {
      backgroundColor: '#009dff'
    },
  }
};