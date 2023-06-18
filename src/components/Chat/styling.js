export const chatBoxStyle = {
  display: 'flex',
  height: '100%',
  width: '100%',
  rowGap: 1,
  flexDirection: 'column',
  alignItems: 'stretch'
};

export const containerStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 1,
  width: '100%'
};

export const textFieldStyle = {
  sx: {
    fieldset: {
      borderColor: '#91e3c2',
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

export const chatStyle = {
  display: 'flex',
  height: '15vh',
  width: '100%',
  border: '1px solid lightgray'
};