import { createTheme } from '@mui/material/styles';

export const gridProps = {
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

export const itemProps = {
  sx: {
    width: '100%'
  },
  item: true,
  xs: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const boxProps = (width, container=false) => {
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

export const buttonProps = {
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

export const textFieldProps = {
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

export const containerProps = {
  sx: {
    width: '95%'
  },
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 1
};

export const copyButtonProps = {
  sx: {
    width: '40px',
    height: '55px',
    backgroundColor: '#91e3c2',
    ':hover': {
      backgroundColor: '#42f5ad'
    }
  }
};

export const copyIconProps = {
  fontSize: 'small',
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