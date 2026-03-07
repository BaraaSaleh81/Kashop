import React from 'react'
import Box from '@mui/material/Box';
import useProduct from '../../hooks/useProduct';
import Loader from '../../ui/loader/Loader';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



export default function Products() {
    const {data,isLoading,isError,error}= useProduct();
     if (isLoading) return <Loader />
    if (isError) return <Box  color={'red'} >{error.Message}</Box>
    console.log(data);
  return (
    
      
    <Box className="products" py={3}>
        <Typography component={'h2'} variant='h4' mb={2}>Products</Typography>
        <Grid container spacing={4}>
        {data.response.data.map( product=> 
        <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
          <Link to={`/product/${product.id}`}>
            <Card sx={{py:3,textAlign:'center'}}>
                <CardMedia component={'img'}
                image={product.image}>

                </CardMedia>
                <CardContent>
                    <Typography component={'h3'}>{product.name}</Typography>
                    <Typography component={'span'} variant='body1'>{product.price}</Typography>
                </CardContent>
            </Card>
          </Link>
        </Grid>
        )}
        
        </Grid>
    </Box>
  )
}
