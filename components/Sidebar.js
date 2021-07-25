import React from "react";
import Image from "next/image";
function Sidebar() {
	return (
		<div>
			<nav className="flex flex-col bg-purple-900 w-64 h-screen px-4 tex-gray-900 border border-purple-900">
				<div className="flex flex-wrap mt-8">
					<div className="w-1/2">
						<Image
							src="https://www.famousbirthdays.com/faces/cong-tv-image.jpg"
							className="mx-auto w-20 h-20 rounded-full"
							alt="image"
							width="100"
							height="100"
						/>
					</div>
					<div className="w-1/2">
						<span className="font-semibold text-white">
							Aling Celly
						</span>
						<button className="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
							Premium
						</button>
					</div>
				</div>
				<div className="mt-10 mb-4">
					<ul className="ml-4">
						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									className="fill-current h-5 w-5 "
									viewBox="0 0 24 24"
								>
									<path
										d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
									></path>
								</svg>
							</span>
							<a href="dashboard">
								<span className="ml-2">Dashboard</span>
							</a>
						</li>
						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									className="fill-current h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                        014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                        8-4z"
									></path>
								</svg>
							</span>
							<a href="sell">
								<span className="ml-2">Sell</span>
							</a>
						</li>
						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									className="fill-current h-5 w-5 "
									viewBox="0 0 24 24"
								>
									<path
										d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                        2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                        00-2-2h-1V1m-1 11h-5v5h5v-5z"
									></path>
								</svg>
							</span>
							<a href="orders">
								<span className="ml-2">Orders</span>
							</a>
						</li>
						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									className="fill-current h-5 w-5 "
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
										fill="currentColor"
									/>
									<path
										d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<a href="inventory">
								<span className="ml-2">Inventory</span>
							</a>
						</li>
						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
									<path
										fillRule="evenodd"
										d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
							<a href="payment">
								<span className="ml-2">Payment</span>
							</a>
						</li>
						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
									/>
								</svg>
							</span>
							<a href="collaborate">
								<span className="ml-2">Collaborate</span>
							</a>
						</li>

						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									className="fill-current h-5 w-5 "
									viewBox="0 0 24 24"
								>
									<path
										d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                        4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                        9v2h-4v-2h4m2-2h-8v6h8v-6z"
									></path>
								</svg>
							</span>
							<a href="link-account">
								<span className="ml-2">Link</span>
							</a>
						</li>

						<li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
							<span>
								<svg
									className="fill-current h-5 w-5 "
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
										fill="currentColor"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<a href="#">
								<span className="ml-2">Settings</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;
