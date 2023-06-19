export const chatBoxStyle = {
  display: 'flex',
  height: '15vh',
  minHeight: '130px',
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
  position: 'relative'
};

export const textFieldStyle = {
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
        borderColor: "#42f5ad"
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
  variant: 'outlined'
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
  const fifteenVH = window.innerHeight * 0.15
  const heightDiff = 130 > fifteenVH ? 130-fifteenVH : 0;
  return {
    display: 'flex',
    minHeight: '130px',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid lightgray',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    sx: {
      height: expanded ? `calc(55vh + ${heightDiff}px)` : '15vh',
      top: expanded ? '-40vh' : '0',
      overflowY: 'scroll',
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
      zIndex: 2,
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
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  height: '40px',
  fontSize: '14px',
  padding: '0 15px',
  margin: '15px 0', 
  color: 'black',
  borderRadius: '15px',
};

export const localChatStyle = {
  ...chatBubbleStyle,
  right: 10,
  backgroundColor: '#91e3c2',
};

export const remoteChatStyle = {
  ...chatBubbleStyle,
  left: 10,
  backgroundColor: '#42f5ad',
};