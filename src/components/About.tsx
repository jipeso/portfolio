import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            color: 'text.default',
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            color: 'text.secondary',
          }}
        >
          I'm a computer science master's student at the University of Helsinki,
          having transitioned from studying physics where I discovered my
          passion for programming. I enjoy building maintainable and performant
          applications with intuitive and accessible interfaces. Currently, I'm
          focusing on web development with TypeScript and React.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
