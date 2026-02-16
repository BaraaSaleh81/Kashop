import { Category, Message } from '@mui/icons-material';
import { Box, CircularProgress } from '@mui/material';
import React from 'react'
import uesCategories from '../../hooks/uesCategories';

export default function Categories() {
 
    const {data,isLoading,isError,error}= uesCategories();

    if (isLoading) return <CircularProgress />
    if (isError) return <Box  color={'red'} >{error.Message}</Box>
  return (
    <Box>{data.response.map(category=> <Box>{category.name}</Box>)}</Box>
  )
}
