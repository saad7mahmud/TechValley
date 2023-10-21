import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/ErrorPage";
import Roots from "../pages/roots/Roots";
import AddProduct from "../pages/Products/AddProduct";
import Cart from "../pages/Cart/Cart";
import AllProducts from "../pages/Products/AllProducts";
import ProductDetails from "../pages/Products/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct";
import LogIn from "../pages/authentications/login";
import Register from "../pages/authentications/register";
import PrivateRoutes from "../routes/PrivateRoutes";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-sage.vercel.app/product-details/${params.id}`
          ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://brand-shop-server-sage.vercel.app/cart"),
      },

      {
        path: "/all-products/:brand",
        element: <AllProducts></AllProducts>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-sage.vercel.app/all-products/${params.brand}`
          ),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-sage.vercel.app/product-details/${params.id}`
          ),
      },
    ],
  },
]);

export default routers;
