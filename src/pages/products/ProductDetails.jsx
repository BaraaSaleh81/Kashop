import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct';
import Loader from '../../ui/loader/Loader';
import { Alert, Box, Button, Card, CardMedia, Rating, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';

export default function ProductDetails() {
   
  const {id} = useParams();
  const {data,isLoading,error,isError} = useProduct(id);
  const {mutate,isPending} = useAddToCart();
  console.log(data);

     if (isLoading) return <Loader />
     if (isError) return <Box color={'red'}>{error.message}</Box>
     
     const product = data.response;
  return (
    <Box component={'div'} className='product_details' py={4}>
      
      <Card  sx={{display:'flex',padding:'30px',flexWrap:'wrap',gap:4} }>
        <CardMedia component={'img'} image={product.image}
        sx={{width:{xs:'100%',md:300}}}></CardMedia>
        <Box sx={{flex:1}}>
          <Typography component={'h1'} variant='h3' gutterBottom>{product.name}</Typography>
          <Typography component={'span'} variant='body1' sx={{display:'block'}}>{product.price}$</Typography>
          <Rating readOnly value={product.rate} ></Rating>
          <Typography variant='body1'>{product.description}</Typography>
          <Typography color='text.secondary'>Avaiable Quantity:{product.quantity}</Typography>
          <Button disabled={isPending} color='primary' variant='contained' onClick={ ()=>mutate({
            ProductId:product.id,
            Count:1,
          })}>Add To Cart</Button>
        </Box>
        </Card>
    </Box>
  )
}

