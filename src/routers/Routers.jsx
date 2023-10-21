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
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update-product/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product-details/${params.id}`),
      },
      {
        path: "/my-cart",
        element: <Cart></Cart>,
        loader: () => fetch("http://localhost:5000/cart"),
      },

      {
        path: "/all-products/:brand",
        element: <AllProducts></AllProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-products/${params.brand}`),
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product-details/${params.id}`),
      },
    ],
  },
]);

export default routers;
