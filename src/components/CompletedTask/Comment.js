import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Comment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const{_id}=useLoaderData();
    const navigate=useNavigate();
    const handleComment=(data)=>{
        const comment = data.comment;
        fetch(`https://tasks-noyonahammadkhan.vercel.app/tasks/comment/${_id}`,{
			method:'PATCH',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify({comment:comment})
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			toast.success('comment done successfully');
            navigate('/completedtask')
		})
    }
    return (
        <div>
            <h1 className='text-4xl text-center'>Write Your Comment About The Task</h1>
            <form onSubmit={handleSubmit(handleComment)} action="" className='w-2/4 mx-auto'>
            <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">Task Details</label>
                <textarea  {...register("comment", {
                    required: "details is Required"
                })}  id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
            </div>
            <button  type="submit" className="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
            </form>
        </div>
    );
};

export default Comment;