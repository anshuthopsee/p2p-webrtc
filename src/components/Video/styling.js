export const videoStyles = (num) => {
  return {
    height: "100%",
    width: "100%",
    style: {
      objectFit: "cover",
      border: `${6/num}px solid #91e3c2`,
      borderRadius: `${16/num}px`
    }
  }
};

export const video1BoxStyles = {
  height: '60vh',
  width: '100%',
  marginTop: '2rem',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const video2BoxStyles = {
  height: '180px',
  width: '26%',
  minWidth: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  right: '22px',
  bottom: '16px'
};

export const buttonContainerStyle = {
  position: 'absolute',
  height: 'auto',
  width: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  zIndex: 2,
  sx: {
    left: '22px',
    bottom: '16px',
  }
};

export const buttonStyle = (on) => {
  return {
    size: 'small',
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '45px',
      minWidth: '45px',
      backgroundColor: on ? '#91e3c2' : '#42f5ad',
      ':hover': {
        backgroundColor: on ? '#91e3c2' : '#42f5ad',
      },
      borderRadius: '50%',
      transition: 'opacity 0.3s ease-in-out',
    }
  };
};

export const iconStyle = {
  sx: {
    fontSize: '22px',
    fill: 'black'
  }
};