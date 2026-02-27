import { Category, Message } from '@mui/icons-material';
import { Box, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import React from 'react'
import uesCategories from '../../hooks/uesCategories';
import Loader from '../../ui/loader/Loader';

export default function Categories() {
 
    const {data,isLoading,isError,error}= uesCategories();

    if (isLoading) return <Loader />
    if (isError) return <Box  color={'red'} >{error.Message}</Box>
 
    
    console.log(data)
  return (
  <>
      <Box className='categories' py={3}>
        <Typography component={'h2'} variant='h4' mb={2}>Categories</Typography>
        <Grid container spacing={6}>
        {data.response.data.map(category=> 
        <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
          <card sx={{py:3,textAlign:'center'}}>
            <CardContent>
              <Typography fontWeight={'600'} component={'h3'}>{category.name}</Typography>
            </CardContent>
          </card>
        </Grid>
        )}
        </Grid>
        </Box>

  </>


  )
}
