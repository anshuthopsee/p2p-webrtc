import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const gridProps = {
  sx: {
    height: '200px'
  },
  container: true,
  direction: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: 2
};

const itemProps = {
  sx: {
    width: '100%'
  },
  item: true,
  xs: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const buttonProps = {
  sx: {
    width: '100%',
    margin: '0 10px',
    bgcolor: '#91e3c2',
    color: 'black',
    ':hover': {
      bgcolor: '#42f5ad'
    }
  }
};

const Select = () => {
  const { setAppState } = useContext(AppContext);

  return (
    <>
      <Grid {...gridProps}>
        <Grid {...itemProps}>
          <Button {...buttonProps} 
            onClick={
              () => setAppState('create-offer')
            }>
              Create Offer
          </Button>
        </Grid>
        <Grid {...itemProps}>
          <Button {...buttonProps}
            onClick={
              () => setAppState('accept-offer')
            }>
              Accept Offer
            </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Select