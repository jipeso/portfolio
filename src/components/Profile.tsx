import { Box, Container, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile: React.FC = () => {
  return (
    <Box id="about" sx={{ pt: 8, pb: 6, backgroundColor: 'background.paper' }}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hi, I'm Joni Pesonen
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          I'm a Computer Science student passionate about building user-friendly
          and modern web applications.
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" startIcon={<GitHubIcon />}>
            GitHub
          </Button>
          <Button variant="outlined" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
