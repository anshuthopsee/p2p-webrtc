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
  position: 'absolute',
  right: '22px',
  bottom: '16px'
};