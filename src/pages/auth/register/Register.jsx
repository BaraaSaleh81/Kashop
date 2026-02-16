import { Box, CircularProgress, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../../validation/RegisterSchema'
import { useState } from 'react';

export default function Register() {
   const {serverErrors,setServerErrors} = useState([]);
  

  const {register,handleSubmit,formState: { errors,isSubmitting }} =  useForm({ 
     resolver: yupResolver(registerSchema),mode:'onBlur'
    });
  const registerForm =async(values)=>{
    console.log(values);
    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values)
      console.log(response);
    }catch(error){
       setServerErrors(error.response.data.errors);
       console.log("catch error",error);
    }

  }

  return (
    <Box component={'section'} className='register-form' py={5}>

<Typography  component={'h1'} variant='h1' > Register </Typography>

{serverErrors?.length > 0 && (
  <Box mt={2} color={'red'}>
    {serverErrors.map((err)=><Typography>{err}</Typography>)}

    </Box>
)}

<Box component={'form'} display={'flex'} flexDirection={'column'} gap={2} mt={3}
 alignItems={'flex-start'} onSubmit={handleSubmit(registerForm)}>

<TextField {...register('userName')}  fullWidth label="User Name" variant="outlined" 
error={errors.userName}
helperText={errors.userName?.message}
/>
<TextField {...register('fullName')}  fullWidth label="Full Name" variant="outlined"
error={errors.fullName}
helperText={errors.fullName?.message}
/>
<TextField {...register('email')}  fullWidth label="Email" variant="outlined"
error={errors.email}
helperText={errors.email?.message}
/>
<TextField {...register('password')}  fullWidth label="Password" variant="outlined" 
error={errors.password}
helperText={errors.password?.message}/>
<TextField {...register('phoneNumber')}  fullWidth label="Phone Number" variant="outlined"
error={errors.phoneNumber}
helperText={errors.phoneNumber?.message}
/>

<Button variant="contained" type='submit' disabled={isSubmitting}> {isSubmitting?<CircularProgress /> : "Register"}</Button>

</Box>
</Box>
  )
}
