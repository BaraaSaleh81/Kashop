import { Box, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../../validation/RegisterSchema'

export default function Register() {
  const {Register,handleSubmit,formState: { errors }} =  useForm({ 
     resolver: yupResolver(registerSchema)});
  const registerForm =async(values)=>{
    console.log(values);
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values)
      console.log(response);
    }catch(error){
       console.log(error);
    }

  }

  return (
    <Box component={'section'} className='register-form' py={5}>

<Typography  component={'h1'} variant='h1' > Register </Typography>

<Box component={'form'} display={'flex'} flexDirection={'column'} gap={2} mt={3}
 alignItems={'flex-start'} onSubmit={handleSubmit(registerForm)}>

<TextField {...Register('userName')}  fullWidth label="User Name" variant="outlined" 
error={errors.userName}
helperText={errors.userName?.message}
/>
<TextField {...Register('fullName')}  fullWidth label="Full Name" variant="outlined"
error={errors.fullName}
helperText={errors.fullName?.message}
/>
<TextField {...Register('email')}  fullWidth label="Email" variant="outlined"
error={errors.email}
helperText={errors.email?.message}
/>
<TextField {...Register('password')}  fullWidth label="Password" variant="outlined" 
error={errors.password}
helperText={errors.password?.message}/>
<TextField {...Register('phoneNumber')}  fullWidth label="Phone Number" variant="outlined"
error={errors.phoneNumber}
helperText={errors.phoneNumber?.message}
/>

<Button variant="contained" type='submit'>Register</Button>

</Box>
</Box>
  )
}
