import AppContextProvider from './AppContextProvider';
import Navbar from './Navbar';
import Toast from './Toast';
import Container from '@mui/material/Container';
import Card from './Card';

function App() {
  const containerStyling = {
    display: 'flex',
    maxWidth: 'xs',
  };

  return (
    <>
      <AppContextProvider>
        <Toast/>
        <Container {...containerStyling}>
          <Card/>
        </Container>
      </AppContextProvider>
    </>
  );
};

export default App;