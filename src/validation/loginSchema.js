 import * as yup from 'yup';
 export const loginSchema = yup.object({
     
     email : yup.string().email('email must be a valid email').required("email is required"),
     password :yup.string().required("password is required")
     .min(6,"password must be least 6 characters")
     .matches(/[A-Z]/,'password must contion at least one uppercase letter')
     .matches(/[a-z]/,'password must contion at least one lowercase letter')
     .matches(/[\d]/,'password must contion at least  one letter')
     .matches(/[@$!%*?&]/,'password must contion at least one special  letter'),
     phoneNumber : yup.string().required('phoneNumber is required')
});