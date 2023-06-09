import { useState } from "react";
import QRCode from "react-qr-code";
import QrScanner from "./Card/QrScanner";
import { Box, Button, TextField } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { AppContext } from "./AppContextProvider";
import { useContext } from "react";

const boxProps = {
  sx: {
      width: '95%',
      rowGap: "2rem",
      paddingBottom: '10px'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
};

const buttonProps = {
  sx: {
    width: '100%',
    margin: '0',
    marginBottom: '20px',
    bgcolor: '#91e3c2',
    color: 'black',
    ':hover': {
      bgcolor: '#42f5ad'
    }
  }
};

const textFieldProps = {
  sx: {
    fieldset: {
      borderColor: '#91e3c2',
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



const QRCodePopup = () => {
  

  "DOMException: Failed to allocate videosource"

  

  return (
    renderContent()
  );
};

export default QRCodePopup;