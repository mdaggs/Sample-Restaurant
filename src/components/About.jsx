import { Grid, Typography, Container, Button } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <Container>
        <Typography
            component="h1"
            variant="h2"
            color="inherit"
            align="center"
            sx={{ flex:1, borderBottom: 1, borderColor: 'divider' }}
        >
            About Our Shop
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={8}>
            All of our menu items are inspired by _____ cuisine and have been created by our head chef, (CN), after studying authentic _____ cuisine in ____. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from. Come dine with us & experience an authentic ______ meal in an intimate dining space. We look forward to serving you!
            </Grid>
            <Grid item xs={4}>
                123 Main Street, USA
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Grid>
        </Grid>
        
    </Container>
  )
}
