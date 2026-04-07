import { yupResolver } from '@hookform/resolvers/yup';
import {  Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../../validation/loginSchema';
import axios from 'axios';
import useAuthStore from '../../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';


export default function Login() {

   const setToken = useAuthStore((state)=>state.setToken);
   const navigate = useNavigate()
   const {serverErrors,setServerErrors} = useState([]);
    const {register,handleSubmit,formState: { errors,isSubmitting }} =  useForm({ 
       resolver: yupResolver(loginSchema),mode:'onBlur'
      });
    const loginForm =async(values)=>{
      console.log(values);
      try{
        const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`,values)
        
        if(response.status === 200){
            setToken(response.data.accessToken);
            navigate('/');
        }
      }catch(error){
         setServerErrors(error.response.data.errors);
         console.log("catch error",error);
      }
  
    }
  return (
  <Box component={'section'} className='login-form' py={5}>

<Typography  component={'h1'} variant='h1' > Login </Typography>

{serverErrors?.length > 0 && (
  <Box mt={2} color={'red'}>
    {serverErrors.map((err)=><Typography>{err}</Typography>)}

    </Box>
)}

<Box component={'form'} display={'flex'} flexDirection={'column'} gap={2} mt={3}
 alignItems={'flex-start'} onSubmit={handleSubmit(loginForm)}>

<TextField {...register('email')}  fullWidth label="Email" variant="outlined"
error={errors.email}
helperText={errors.email?.message}
/>
<TextField {...register('password')}  fullWidth label="Password" variant="outlined" 
error={errors.password}
helperText={errors.password?.message}/>


<Button variant="contained" type='submit' disabled={isSubmitting}> {isSubmitting?<CircularProgress /> : "Login"}</Button>

</Box>
</Box>
 
  )
}
