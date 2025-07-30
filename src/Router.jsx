import {createBrowserRouter, RouterProvider} from "react-router-dom"
import OutLet from "./pages/OutLet"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Cart from "./pages/Cart.jsx"
import WishList from "./pages/WishList.jsx"
// import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import NotFound from "./pages/NotFound.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import CartProvider from "./Contexts/CartContext.jsx"
import Register from "./pages/Register.jsx"
import AuthProvider from "./Contexts/AuthProvider.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Profile from "./pages/Profile.jsx"
import MyOrders from "./pages/MyOrders.jsx"
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
                element:(
                    <ProtectedRoute> 
                        <Cart/> 
                    </ProtectedRoute>
                )
            },
            {
                path:"/WishList",
                element:(
                    <ProtectedRoute>
                        <WishList/>
                    </ProtectedRoute>
                )
            },
            {
                path:"/register",
                element:<Register/>

            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/profile",
                element:(
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                )
            },
            {
                path:"/orders",
                element:(
                    <MyOrders/>
                )


            },
            {
                path:"/product/:id",
                element:(
                    <ProtectedRoute>
                        <SingleProduct/>
                    </ProtectedRoute>
                )
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
        <AuthProvider>
            <CartProvider>
                <RouterProvider router={router}/>
            </CartProvider>
        </AuthProvider>
    );
}

export default Router;