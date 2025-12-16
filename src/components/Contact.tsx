import {
  Box,
  Grid,
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField required fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                required
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                required
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
