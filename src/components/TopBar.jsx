import React from 'react'
import { Button, AppBar, CssBaseline, Link, Toolbar, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';


function Topbar() {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Sample-Restaurant
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/"
            sx={{ my: 1, mx: 1.5 }}>
            Full Menu
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/About"
            sx={{ my: 1, mx: 1.5 }}
          >
            About
          </Link>
        </nav>

        <Link
          href="https://github.com/mdaggs/"
          target="_blank"
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<GitHubIcon fontSize="small" />}
          >
            View Source Code
          </Button>
        </Link>
        </Toolbar>
      </AppBar>



    </React.Fragment>
  );
}

export default Topbar;