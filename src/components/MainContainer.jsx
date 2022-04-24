// import { Button, Grid, Card, CardMedia, CardActions, CardContent, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import cs from '../pics/cowboyskillet.jpeg'
import of from '../pics/oldfashioned.jpeg'
import iu3 from '../pics/iu-3.jpeg'
import iu4 from '../pics/iu-4.jpeg'
import iu5 from '../pics/iu-5.jpeg'
import iu6 from '../pics/iu-6.jpeg'
import iu7 from '../pics/iu-7.jpeg'
import iu8 from '../pics/iu-8.jpeg'
import MainCard from './MainCard'

export default function MainContainer() {
  const data = [
    {id:1, image: cs, heading: "Breakfast Choice 1", dish: "Cowboy Skillet", description: "A Skillet of food"},
    {id:2, image: of, heading: "Breakfast Choice 2", dish: "Classic Breakfast", description: "Eggs, Bacon, and stuff"},
    {id:3, image: iu3, heading: "Breakfast Choice 3", dish: "Toasty Egg", description: "A Fried Egg on Toast"},
    {id:4, image: iu4, heading: "Breakfast Choice 4", dish: "Fruit Board", description: "Grapes, Apples, Pears, Watermelon and Bananas on a platter"},
    {id:5, image: iu5, heading: "Breakfast Choice 5", dish: "Loaded Toasty Egg", description: "A Toasty Egg, with ALL the fixin's"},
    {id:6, image: iu6, heading: "Breakfast Choice 6", dish: "Waffles and Fruit", description: "Two soft waffles loaded with strawberries and your choice of syrup"},
    {id:7, image: iu7, heading: "Breakfast Choice 7", dish: "Pancakes", description: "Fluffly Pancakes"},
    {id:8, image: iu8, heading: "Breakfast Choice 8", dish: "Oatmeal", description: "Oats, 4 different flavors. With a side of fruit"}
  ]

  return (
    <main>
      
      <Grid container spacing={2}>
        {data.map((payloadinfo) => {
          return (
            <Grid item xs={6}>
              <MainCard key={payloadinfo.id}
                        image={payloadinfo.image}
                        heading={payloadinfo.heading}
                        dish={payloadinfo.dish}
                        description={payloadinfo.description}/>
              </Grid>
          )
        })}
      </Grid>

    </main>
  )
}
