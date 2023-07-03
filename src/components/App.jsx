import AppContextProvider from './AppContextProvider';
import Navbar from './Navbar';
import Toast from './Toast';
import GitHubIcon  from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from './Card';
import Video from './Video';
import Chat from './Chat';

function App() {
  const containerStyle = {
    display: 'flex',
    maxWidth: 'md',
    sx: {
      minHeight: '100vh',
      // maxWidth: '800px',
    }
  };

  const boxStyle = {
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '20px'
  };

  const footerStyle = {
    margin: '20px 0',
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
  };

  const linkStyle = {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    sx: {
      color: 'black',
      textDecoration: 'none'
    }
  };

  return (
    <>
      <AppContextProvider>
        <Toast/>
        <Container {...containerStyle}>
          <Box {...boxStyle}>
            <Card/>
            <Video/>
            <Chat/>
            <Typography {...footerStyle}>
              <Link 
                href="https://github.com/anshuthopsee/p2p-webrtc"
                {...linkStyle}
              >
                <GitHubIcon/> 
                p2p-webrtc 
              </Link>
            </Typography>
          </Box>
        </Container>
      </AppContextProvider>
    </>
  );
};

export default App;