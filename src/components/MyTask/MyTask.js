import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyTask = () => {
	const {user}=useContext(AuthContext)
	const {data: tasks = [], refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async() =>{
            const res = await fetch(`https://tasks-noyonahammadkhan.vercel.app/mytasks/${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

	const handleCompleteStatus=(id)=>{
		fetch(`https://tasks-noyonahammadkhan.vercel.app/tasks/completed/${id}`,{
			method:'PATCH',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify({completeStatus:'completed'})
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			toast.success('task completed')
			refetch()
		})
	}
	const handleDeleteTask = id => {
        fetch(`https://tasks-noyonahammadkhan.vercel.app/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Task deleted successfully`)
            }
        })
    }
    return (
        <div>
            <h1>My Task{tasks.length}</h1>
            <div className="container w-7/12 p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">My Tasks</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col />
			</colgroup>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">S.N #</th>
					<th className="p-3">Task Name</th>
					<th className="p-3">About</th>
					<th className="p-3">Task Image</th>
                    <th className="p-3">Completed</th>
					<th className="p-3">Update Task</th>
                    <th className="p-3">Delete Task</th>
				</tr>
			</thead>
			<tbody>
				{
					tasks.map((task,i)=><tr key={task._id} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
						{console.log(task)}
					<td className="p-3">
						<p>{i+1}</p>
					</td>
					<td className="p-3">
						<p>{task.taskName}</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3">
                    <button  onClick={()=>handleCompleteStatus(task._id)}  type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5">Completed</button>
					</td>
					<td className="p-3">
                  <Link to={`/edittask/${task._id}`}> <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button></Link>  
					</td>
                    <td className="p-3">
                    <button onClick={()=>handleDeleteTask(task._id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
					</td>
				</tr>)
				}
				
				
			</tbody>
		</table>
		{
			tasks.length?"": <div>
				<h1 className='text-6xl text-center'>No Task Added</h1>
			</div>
		}
	</div>
</div>
        </div>
    );
};

export default MyTask;