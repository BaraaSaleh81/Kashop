import React from 'react'
import Categories from '../../components/categories/Categories'
import useCart from '../../hooks/useCart'
import { Box, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import uesRemoveFromCart from '../../hooks/uesRemoveFromCart';
import uesUpdateCartItem from '../../hooks/uesUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';






export default function Cart() {
  
  const {data,isError,isLoading,error} = useCart();
   const {mutate:removeItem,isPending} = uesRemoveFromCart();
   const {mutate:updateItem,isPending:isPendingUpdate}= uesUpdateCartItem();

   const handleUpdateQty =(productId,action)=>{
     const item =data.items.find((i)=>{
        return i.productId ==productId;
     });
     if(action == '-'){
      updateItem({productId,count:item.count-1})
     }else{
      updateItem({productId,count:item.count+1})
     }
   }

  console.logI(data)
    if (isLoading) return <Loader />
   if (isError) return <Box color={'red'}>{error.message}</Box>

  return (
    <Box className='cart' sx={{py:5}}>
      <Typography component={'h1'}>My Cart</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Product Name
              </TableCell>
              <TableCell>
                Price 
              </TableCell>
              <TableCell>
                Qiantity
              </TableCell>
              <TableCell>
                Total
              </TableCell>
              <TableCell>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map( item=>(
              <TableRow>
                <TableCell>
                  {item.productName}
                </TableCell>
                <TableCell>
                  {item.price}$
                </TableCell>
                <TableCell>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <IconButton size='small' disabled={isPendingUpdate} onClick={()=>handleUpdateQty(item.productId,'-')}>
                      <RemoveIcon /> 
                    </IconButton>
                    <Typography>{item.count}</Typography>

                    <IconButton size='small' disabled={isPendingUpdate} onClick={()=>handleUpdateQty(item.productId,'+')}>
                      <AddIcon /> 
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell>
                  {item.count * item.price}
                </TableCell>
                <TableCell>
                  <Button disabled={isPending} variant='contained' onClick={()=>removeItem(item.productId)}>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableCell colSpan={5}>
              Total : {data.cartTotal}$
            </TableCell>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  )
}
