import { useState } from 'react';
import { Stack, Tooltip, IconButton, Snackbar, Alert } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SocialActions = () => {
  const [open, setOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jipesonen@gmail.com');
    setOpen(true);
  };

  const buttonStyle = {
    border: '1px solid',
    borderColor: 'divider',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: 'primary.main',
    },
  };

  const tooltipProps = {
    arrow: true,
    enterDelay: 300,
    enterNextDelay: 300,
  };

  return (
    <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
      <Tooltip title="Copy Email" {...tooltipProps}>
        <IconButton
          onClick={handleCopyEmail}
          sx={buttonStyle}
          aria-label="Copy email address to clipboard"
        >
          <MailOutlineIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub" {...tooltipProps}>
        <IconButton
          href="https://github.com/jipeso"
          target="_blank"
          sx={buttonStyle}
          aria-label="Link to GitHub page"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn" {...tooltipProps}>
        <IconButton
          href="https://www.linkedin.com/in/joni-pesonen-876b9224b"
          target="_blank"
          sx={buttonStyle}
          aria-label="Link to LinkedIn Profile"
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Email copied!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SocialActions;
