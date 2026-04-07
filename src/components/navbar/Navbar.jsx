import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link'
import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import { Badge } from '@mui/material';



export default function Navbar() {

    const token = useAuthStore( (state)=>state.token);
    const logout =useAuthStore( (state)=>state.logout);
    const {data} = useCart();
    const cartCount = data?.items?.length || 0;
    const navigate = useNavigate();
    const handleLogout = ()=>{
      logout();
      navigate('/login')
    }
  return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display:{xs:'flex',sm:'none'} }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           KASHOP
          </Typography>
          <Box sx={{display:{xs:"none",sm:"flex"},gap:2,alignContent:'center'}}>
         <Link component={RouterLink} to={'/'} underline='none' color="inherit">Home</Link>
         {token?(
          <>
           <Badge badgeContent={cartCount} color="primary">
          <Link component={RouterLink} to={'/cart'} underline='none' color="inherit">Cart
                     </Link>
            </Badge>
           <Link component={Button} onClick={handleLogout} underline='none' color="inherit">logout</Link>

          </>
         ):
         (
          <>
          <Link component={RouterLink} to={'/login'} underline='none' color="inherit">Login</Link>
          <Link component={RouterLink} to={'/register'} underline='none' color="inherit">Register</Link>

          </>
         )
        }

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}