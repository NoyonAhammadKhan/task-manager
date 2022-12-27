import React from 'react';
import AddTask from '../components/AddTask/AddTask';
import CompletedTask from '../components/CompletedTask/CompletedTask';
import MyTask from '../components/MyTask/MyTask';
import Main from '../layouts/Main/Main';
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
                path:'completedtask',
                element:<CompletedTask></CompletedTask>
            }
        ]
    }
])

export default routes;