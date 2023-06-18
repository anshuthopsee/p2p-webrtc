export const videoStyles = (num) => {
  return {
    height: "100%",
    width: "100%",
    style: {
      objectFit: "cover",
      border: `${6/num}px solid #91e3c2`,
      borderRadius: "16px"
    }
  }
};

export const video1BoxStyles = {
  height: '600px',
  width: '100%',
  marginTop: '2rem',
  position: 'relative',
};

export const video2BoxStyles = {
  height: '180px',
  width: '26%',
  minWidth: '120px',
  position: 'absolute',
  right: '10px',
  bottom: '10px'
};