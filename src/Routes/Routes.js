import React from 'react';
import AddTask from '../components/AddTask/AddTask';
import CompletedTask from '../components/CompletedTask/CompletedTask';
import MyTask from '../components/MyTask/MyTask';
import Login from '../components/Login/Login'
import Main from '../layouts/Main/Main';
import Signup from '../components/Signup/Signup';
import EditTask from '../components/EditTask/EditTask';
import Comment from '../components/CompletedTask/Comment';
import TaskDetails from '../components/TaskDetails/TaskDetails';
import PrivateRoute from './PrivateRoute';
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
                element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path:'/completedtask',
                element:<PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/edittask/:id',
                element:<PrivateRoute><EditTask></EditTask></PrivateRoute>,
                loader:({params})=>fetch(`https://tasks-noyonahammadkhan.vercel.app/tasks/${params.id}`)
            },
            {
                path:'/comment/:id',
                element:<PrivateRoute><Comment></Comment></PrivateRoute>,
                loader:({params})=>fetch(`https://tasks-noyonahammadkhan.vercel.app/tasks/${params.id}`)
            },
            {
                path:'/taskdetails/:id',
                element:<PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://tasks-noyonahammadkhan.vercel.app/tasks/${params.id}`)
            }
        ]
    }
])

export default routes;