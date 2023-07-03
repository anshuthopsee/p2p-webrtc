import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProgressBar = (props) => {
  return (
    <>
      <Box sx={{ display: 'flex', width: '160px', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" sx={{
            "& .MuiLinearProgress-bar": {
                transition: "none"
            }}} {...props} 
          />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body6" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
    </>
  );
}

export default ProgressBar;