import { createTheme } from '@mui/material/styles';

export const gridStyle = {
  sx: {
    height: '100%'
  },
  container: true,
  direction: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: 2
};

export const itemStyle = {
  sx: {
    width: '100%'
  },
  item: true,
  xs: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const cardStyle = {
  sx: {
    bgcolor: 'white', 
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;',
    borderRadius: '5px',
    marginTop: '5rem'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: 'fit-content',
  maxWidth: '400px',
  zIndex: 5
};

export const backgroundStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  position: 'fixed',
  zIndex: 5,
  sx: {
    height: 'calc(100vh + env(safe-area-inset-top))',
  }
};

export const boxStyle = (width, container=false) => {
  return {
    sx: {
      width: `${width}%`,
      rowGap: "1.5rem",
      paddingBottom: container ? '20px' : 0
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };
};

export const linkStyle = {
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  sx: {
    color: 'black',
    textDecoration: 'none'
  }
};

export const buttonStyle = {
  sx: {
    width: '100%',
    margin: '0',
    bgcolor: '#91e3c2',
    color: 'black',
    ':hover': {
      bgcolor: '#42f5ad'
    }
  }
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
  variant: 'outlined',
};

export const containerStyle = {
  sx: {
    width: '95%'
  },
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 1
};

export const copyButtonStyle = {
  sx: {
    width: '40px',
    height: '55px',
    backgroundColor: '#91e3c2',
    ':hover': {
      backgroundColor: '#42f5ad'
    }
  }
};

export const copyIconStyle = {
  fontSize: 'medium',
  sx: {
    fontSize: '20px',
    fill: 'black'
  }
};

export const typographyTheme = createTheme({
  typography: {
    body1: {
      margin: '10px 15px',
      textAlign: 'center',
      fontSize: 13,
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas'
    },
    h2: {
      fontWeight: 'bolder',
      textTransform: 'none',
      padding: 10,
      borderBottom: '3px dashed gray',
      fontSize: 26,
      letterSpacing: 1.5
    }
  }
});