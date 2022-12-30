import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
    const {taskImage,taskName,taskDetails,userEmail,completeStatus} = useLoaderData();
    return (
        <div className='mx-auto w-3/12'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex space-x-4">
	
	</div>
	<div>
		<img src={taskImage} alt="" className="object-cover w-full mb-4 h-auto sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{taskName}</h2>
		<p className="">Task Details:{taskDetails}</p>
        <p className="">UserEmail:{userEmail}</p>
        <p>Status:{completeStatus}</p>
	</div>
	
</div>
        </div>
    );
};

export default TaskDetails;