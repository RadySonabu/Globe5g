import React from "react";
import Image from "next/image";
function InventoryItems() {
	const people = [
		{
			name: "White Shoes",
			title: "22x",
			department: "Pair",
			role: "Yes",
			email: "jane.cooper@example.com",
			image: "https://media.gq.com/photos/5e7ce2390ac4740008d77e11/master/w_2000,h_1333,c_limit/Nike-Air-Force-1-'07-sneaker.jpg",
		},
		{
			name: "Red Socks",
			title: "100x",
			department: "Pair",
			role: "Yes",
			email: "jane.cooper@example.com",
			image: "https://media.istockphoto.com/photos/red-knitted-sock-picture-id487219871?k=6&m=487219871&s=612x612&w=0&h=z_QlRF0pQJoB8DOUQsHTLayoDav5qvrnmUWfyB8T0Ek=",
		},
		{
			name: "T-Shirt",
			title: "52",
			department: "",
			role: "No",
			email: "jane.cooper@example.com",
			image: "https://media.gq.com/photos/602ea741937235d39fc13158/master/w_2000,h_1334,c_limit/duo.jpg",
		},
		// More people...
	];
	return (
		<div className="flex flex-col">
			<div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Name
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Items
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Availability
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Colorway
									</th>
									<th
										scope="col"
										className="relative px-6 py-3"
									>
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{people.map((person) => (
									<tr key={person.email}>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10">
													<Image
														className="h-10 w-10 rounded-full"
														src={person.image}
														alt=""
														width="50"
														height="50"
													/>
												</div>
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														{person.name}
													</div>
													<div className="text-sm text-gray-500">
														{person.email}
													</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												{person.title}
											</div>
											<div className="text-sm text-gray-500">
												{person.department}
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												Active
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{person.role}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a
												href="#"
												className="text-indigo-600 hover:text-indigo-900"
											>
												Edit
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InventoryItems;
