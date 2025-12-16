import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 6 }} component="footer">
      <Typography variant="h6" align="center" color="white" gutterBottom>
        Joni Pesonen
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="grey.400"
        component="p"
      >
        © {new Date().getFullYear()} Portfolio. Built with React.
      </Typography>
    </Box>
  );
};

export default Footer;
