import React from 'react';

const CompletedTask = () => {
    return (
        <div>
            <h1>Completed Task</h1>
            <div className="container w-6/12 p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col className="w-24"/>
			</colgroup>
			<thead className="dark:bg-gray-700">
				<tr className="text-left">
					<th className="p-3">S.N #</th>
					<th className="p-3">Task Name</th>
					<th className="p-3">About</th>
					<th className="p-3">Task Image</th>
                    <th className="p-3">Not Completed</th>
                    <th className="p-3">Delete Task</th>
					
				</tr>
			</thead>
			<tbody>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p>1</p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
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
                    <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5">Not Completed</button>
					</td>
					
                    <td className="p-3">
                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Task</button>
					</td>
				</tr>
				
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default CompletedTask;