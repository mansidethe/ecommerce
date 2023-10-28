import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home'
import Addproduct from './views/Addproduct/Addproduct'
import Productdetails from './views/Productdetails/Productdetails'
import Updateproduct from './views/Updateproduct/Updateproduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/addproduct",
    element: <Addproduct/>,
  },
  {
    path: "/updateproduct/:_id",
    element: <Updateproduct/>,
  },
  {
    path: "/productdetails/:_id",
    element: <Productdetails/>,
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
 


