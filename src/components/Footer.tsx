import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="grey.400"
        component="p"
      >
        Made with React + Vite, hosted on GitHub
      </Typography>
    </Box>
  );
};

export default Footer;
