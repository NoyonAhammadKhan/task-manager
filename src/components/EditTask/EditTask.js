import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const EditTask = () => {
    const navigate=useNavigate('/');
    const {user}=useContext(AuthContext);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const imageHostKey = process.env.REACT_APP_imgbb_key;
    const {_id,taskName, taskDetails,userEmail,taskImage,completeStatus}=useLoaderData();
    // console.log(task)
    const handleEditTask=data=>{
	
		const task = {
				taskName:data.taskname,
				taskDetails:data.details,
				taskImage:taskImage,
				userEmail:userEmail,
				completeStatus:completeStatus
			}
			fetch(`https://tasks-noyonahammadkhan.vercel.app/tasks/${_id}`,{
				method:'PATCH',
				headers:{
					'content-type':'application/json'
			},
			body:JSON.stringify(task)
			})
			.then(res=>res.json())
			.then(result=>{
				console.log(result);
                navigate('/')
                toast.success('Task Editted Successfully!!')
			})

		}
	
	
    return (
        <div>
        <h1 className='text-center text-6xl'>Edit Task</h1>
        <form onSubmit={handleSubmit(handleEditTask)} className='w-2/4 mx-auto'>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
        
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
                <label  className="text-sm">Task Name</label>
                <input  {...register("taskname", {
                    required: "Task Name is Required"
                })} name="taskname" id="username" type="text" placeholder="Task Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={taskName}/>
            </div>
            
            <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">Task Details</label>
                <textarea  {...register("details", {
                    required: "details is Required"
                })} defaultValue={taskDetails} name='details' id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
            </div>
            
        </div>
    </fieldset>
    <div className='mx-auto w-4/12'>
    <button type="submit" className="px-8 py-3 mx-auto font-semibold rounded bg-blue-600 dark:bg-gray-100 dark:text-gray-800">Submit</button>
    </div>
        </form>
    </div>
    );
};

export default EditTask;