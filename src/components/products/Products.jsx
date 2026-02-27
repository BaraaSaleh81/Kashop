import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Loader from '../../ui/loader/Loader';

export default function Products() {

      const {data,isLoading,error,isError} = useProducts();
       if (isLoading) return <Loader />
          if (isError) return <Box  color={'red'} >{error.Message}</Box>
  
  return (
    <Box className='products' py={3}> 
    <Typography component={'h2'} variant='h4'>Products</Typography>
    <Grid container spacing={4}>
      {data.response.data.map( proucts=> 
       <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
       <card sx={{py:3,textAlign:'center'}}>
        <CardMedia component={'img'} image={proucts.image}>
        </CardMedia>
        <CardContent>
          <Typography component={'h3'}> {proucts.name}</Typography>
          <Typography component={'span'} variant='body1'>{proucts.price}$</Typography>
        </CardContent>
        </card>
         </Grid>
      
         )}

      </Grid>
    </Box>
    
  )
}
