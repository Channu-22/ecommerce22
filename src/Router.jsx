import {createBrowserRouter, RouterProvider} from "react-router-dom"
import OutLet from "./pages/OutLet"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Cart from "./pages/Cart.jsx"
import WishList from "./pages/WishList.jsx"
import Login from "./pages/Login.jsx"
import NotFound from "./pages/NotFound.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import CartProvider from "./Contexts/CartContext.jsx"
// import CartProvider from "./Contexts/CartProvider"



const router=createBrowserRouter([
    {
        path:"/",
        element:<OutLet/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/WishList",
                element:<WishList/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/product/:id",
                element:<SingleProduct/>
            },
            {
                path:"*",
                element:<NotFound/>
            }
        ]
    }

]);

function Router(){
    return (
        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
    );
}

export default Router;