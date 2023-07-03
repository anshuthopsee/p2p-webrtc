import AppContextProvider from './AppContextProvider';
import Navbar from './Navbar';
import Toast from './Toast';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from './Card';
import Video from './Video';
import Chat from './Chat';

function App() {
  const containerStyling = {
    display: 'flex',
    maxWidth: 'md',
    sx: {
      minHeight: '100vh',
      // maxWidth: '800px',
    }
  };

  const boxStyling = {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '20px'
  };

  return (
    <>
      <AppContextProvider>
        <Toast/>
        <Container {...containerStyling}>
          <Box {...boxStyling}>
            <Card/>
            <Video/>
            <Chat/>
          </Box>
        </Container>
      </AppContextProvider>
    </>
  );
};

export default App;