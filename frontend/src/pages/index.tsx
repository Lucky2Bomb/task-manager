import React, { lazy } from 'react';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Settings from './settings';

const router = createBrowserRouter([{
    path: "/",
    element: <Home />,   
},
{
    path: "/login",
    element: <Login />,   
},
{
    path: "/settings",
    element: <Settings />,   
},
])

function Routing() {
    return (
        <RouterProvider router={router} />
    );
}

export default Routing; 