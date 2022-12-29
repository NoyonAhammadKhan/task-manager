import React from 'react';
import AddTask from '../components/AddTask/AddTask';
import CompletedTask from '../components/CompletedTask/CompletedTask';
import MyTask from '../components/MyTask/MyTask';
import Login from '../components/Login/Login'
import Main from '../layouts/Main/Main';
import Signup from '../components/Signup/Signup';
const { createBrowserRouter } = require("react-router-dom");
const routes =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<MyTask></MyTask>,
            },
            {
                path:'/addtask',
                element:<AddTask></AddTask>
            },
            {
                path:'/completedtask',
                element:<CompletedTask></CompletedTask>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            }
        ]
    }
])

export default routes;