import { CssBaseline, ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <Profile />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
