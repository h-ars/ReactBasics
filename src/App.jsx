import React, { useState, useEffect } from 'react';
import Nav from './Components/nav';
import Footer from './Components/footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import About from './Components/about';
import Contacts from './Components/contacts';
import Home from './Components/home';
import User from './Components/user';
import Login from './Components/login';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Nav/><Home/><Footer/></>
    },
    {
      path: '/dashboard',
      element: <><Nav/><Dashboard/><Footer/></>
    },
    {
      path: '/about',
      element: <><Nav/><About/><Footer/></>
    },
    {
      path: '/contacts',
      element: <><Nav/><Contacts/><Footer/></>
    },
    {
      path: '/user/:userName',
      element: <><Nav/><User/><Footer/></>
    },
    {
      path: '/login',
      element: <><Nav/><Login/></>
    }
  ])

  return (
    <main>
      
      <RouterProvider router={router}/>
      
    </main>
  );
}
 
export default App;