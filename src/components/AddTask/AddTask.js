import React from 'react';

const AddTask = () => {
    return (
        <div>
            <h1 className='text-center'>Add Task</h1>
            <form action="" className='w-2/4 mx-auto'>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="username" className="text-sm">Task Name</label>
					<input id="username" type="text" placeholder="Task Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="website" className="text-sm">Photo</label>
					<input id="website" type="file" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Task Details</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				
			</div>
		</fieldset>
        <div className='mx-auto w-4/12'>
        <button type="button" className="px-8 py-3 mx-auto font-semibold rounded bg-blue-600 dark:bg-gray-100 dark:text-gray-800">Submit</button>
        </div>
            </form>
        </div>
    );
};

export default AddTask;