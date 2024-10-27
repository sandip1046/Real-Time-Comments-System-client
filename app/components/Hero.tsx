import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box sx={{ width: '100%', height: '100vh', position: 'relative', mt: -1 }}>
     
      <Box
        component="img"
        src="/hero-sunset.jpg" 
        alt="Background"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.9,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      
      
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: '#a1ff1c',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 20, 
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        This is a Main Page. You can proceed by clicking on Signup or Signin in the Navbar.
      </Typography>
    </Box>
  );
}
