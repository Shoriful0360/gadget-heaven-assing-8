
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Component/MainLayout/Layout";
import Home from "../Component/Home";
import CategorySideBar from "../Component/CategorySideBar";
import ProductCard from "../Component/ProductCard";
import ProductDetails from "../pages/ProductDetails";
import Error from "../pages/Error";
import Statistic from "../pages/Statistic";

import AllProduct from "../pages/AllProduct";
import Dashboard from "../pages/Dashboard";
import Login from "../Component/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import PrivateProvider from "../Component/Private route/PrivateProvider";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('../Category.json'),
            children:[
                {
                    path:'/',
                    element: <ProductCard></ProductCard>,
                    loader:()=>fetch('../products.json')
                    
                },
                {
                    path:'/category/:category',
                    element: <ProductCard></ProductCard>,
                    loader:()=>fetch('../products.json')
                    
                },
            ]
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/Id/:id',
          element:<PrivateProvider><ProductDetails></ProductDetails></PrivateProvider>,
          loader:()=>fetch('../products.json')
        },
        {
          path:'/statistic',
          element:<Statistic></Statistic>
        },
        {
          path:'/allProduct',
          element:<AllProduct></AllProduct>,
          loader:()=>fetch('../products.json')
        },
       {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader:()=>fetch('../products.json')
       }
      ]
    },
  ]);

  export default(router)