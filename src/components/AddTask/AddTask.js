import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddTask = () => {
	const {user}=useContext(AuthContext);
	const { register, handleSubmit, formState: { errors } } = useForm();
	const imageHostKey = process.env.REACT_APP_imgbb_key;/*  */

	const handleAddTask=data=>{
		console.log(data.image)
		const image = data.image[0]
		const formData = new FormData();
		formData.append('image',image);
		
		const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
		fetch(url,{
			method:'POST',
			body:formData
		})
		.then(res=>res.json())
		.then(imgData=>{
			if(imgData.success){
				const task = {
					taskName:data.taskname,
					taskDetails:data.details,
					taskImage:imgData.data.url,
					userEmail:user?.email,
					completeStatus:'notcompleted'
				}
				fetch('https://tasks-noyonahammadkhan.vercel.app/tasks',{
					method:'POST',
					headers:{
						'content-type':'application/json'
					},
					body:JSON.stringify(task)
				})
				.then(res=>res.json())
				.then(result=>{
					console.log(result);
					toast.success('Task Add Successfully')
				})

			}
		})
	}

    return (
        <div>
            <h1 className='text-center'>Add Task</h1>
            <form onSubmit={handleSubmit(handleAddTask)} className='w-2/4 mx-auto'>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Task Name</label>
					<input  {...register("taskname", {
                        required: "Task Name is Required"
                    })} name="taskname" id="username" type="text" placeholder="Task Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Task Details</label>
					<textarea  {...register("details", {
                        required: "details is Required"
                    })} name='details' id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
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

export default AddTask;