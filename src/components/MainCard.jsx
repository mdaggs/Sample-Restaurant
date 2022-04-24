import React from 'react'
import { Button, Card, CardMedia, CardActions, CardContent, Typography } from '@mui/material'

export default function MainCard(props) {
  return (
      <Card>
        <CardMedia
          component="img"
          height="175"
          image={props.image}
          alt={props.heading}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.dish}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Order Now!</Button>
          <Button size="small">Full Nutrition Facts</Button>
        </CardActions>
      </Card>
  )
}
