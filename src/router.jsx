import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from "./pages/auth/register/Register.jsx";
import CategoriesPage from './pages/categories/CategoriesPage.jsx';
import ProductDetails from './pages/products/ProductDetails.jsx';
const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children:[
            {
                index:true,
                element: <Home />
            },
            
            {
                path:'/cart',
                element:<Cart />
            },
              {
                path:'/product/:id',
                element:<ProductDetails />
            },
            {
                path:'/categories',
                element:<CategoriesPage/>
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'register',
                element:<Register />
            }
            
        ]
    }
    
]);
export default router;