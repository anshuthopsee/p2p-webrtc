import { useCallback, useContext, useMemo, memo, useEffect } from 'react';
import QrReader from 'react-qr-scanner';
import Box from '@mui/material/Box';
import { AppContext } from '../AppContextProvider';
import Toast from '../Toast'

const previewStyle = {
  height: 256,
  width: 256,
  objectFit: 'cover'
};

const addBorder = {
  sx: {
    border: '10px solid #91e3c2',
    height: '256px',
    width: '256px'
  },
  display: 'flex',
  alignItems: 'center'
};

const QrScanner = ({ data, setData, rerenderFlag, setRerenderFlag }) => {
  const { toastState, setToastState } = useContext(AppContext);

  const handleScan = (text) => {
    if (text) {
      if (text.text !== data) {
        setData(text.text);
      };
    };
  };

  const handleError = (err) => {
    console.log(err);
    const errorMsg = 'Camera not detected. Enable it and click on "CLEAR & RE-SCAN"'
    if (toastState.message !== errorMsg || !toastState.show) {
      setToastState({
        show: true,
        message: errorMsg,
        severity: 'error'
      });
    };
  };

  const renderScanner = useMemo(() => {
    if (!data) {
      return (
        <QrReader
          delay={1000000}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          constraints={
            {
              video: {
                facingMode: "environment"
              }
            }
          }
        />
      );
    }
  }, [data, rerenderFlag]);

  return (
    <>
      <Box {...addBorder}>
        {renderScanner}
      </Box>
      <Toast/>
    </>
  );
};

export default QrScanner;