import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App'
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Home from './views/Home/Home';
import Update from './views/Update/Update'
import AddTransaction from './views/AddTransaction/AddTransaction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "update",
    element: <Update/>,
  },
  {
    path: "addtransaction",
    element: <AddTransaction/>,
  },
  {
    path: "update",
    element: <Update/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
 