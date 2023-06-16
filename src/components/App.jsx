import AppContextProvider from './AppContextProvider';
import Navbar from './Navbar';
import Toast from './Toast';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from './Card';
import Interface from './Interface';

function App() {
  const containerStyling = {
    display: 'flex',
    sx: {
      minHeight: '100vh',
      maxWidth: '1000px',
    }
  };

  const boxStyling = {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  };

  return (
    <>
      <AppContextProvider>
        <Toast/>
        <Container {...containerStyling}>
          <Box {...boxStyling}>
            <Card/>
            <Interface/>
          </Box>
        </Container>
      </AppContextProvider>
    </>
  );
};

export default App;