import React from "react";
import Image from "next/image";
function CollaboratorCard() {
	return (
		<div className="w-full max-w-md mx-auto bg-white shadow-md rounded-md px-6 py-4 my-6">
			<div className="sm:flex sm:justify-between">
				<div className="flex items-center">
					<Image
						className="h-12 w-12 rounded-full"
						src="https://lh3.googleusercontent.com/a-/AOh14Gi0DgItGDTATTFV6lPiVrqtja6RZ_qrY91zg42o-g"
						alt=""
						width="50"
						height="50"
					/>
					<div className="ml-2">
						<h3 className="text-lg text-gray-800 font-medium">
							Nicholas David
						</h3>
						<span className="text-gray-600">sample@test.com</span>
					</div>
				</div>
				<div className="mt-2 sm:mt-0">
					<button className="flex items-center text-white bg-blue-600 rounded px-2 py-1 hover:bg-blue-500 focus:outline-none focus:shadow-outline">
						<svg
							className="h-5 w-5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						<span className="ml-1 text-sm">Collaborate</span>
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center mt-4">
				<div>
					<h4 className="text-gray-600 text-sm">Rating</h4>
					<span className="mt-2 text-xl font-medium text-gray-800">
						127274
					</span>
				</div>
				<div>
					<h4 className="text-gray-600 text-sm">Submissions</h4>
					<span className="mt-2 text-xl font-medium text-gray-800">
						2
					</span>
				</div>
				<div>
					<h4 className="text-gray-600 text-sm">Reviews</h4>
					<span className="mt-2 text-xl font-medium text-gray-800">
						35
					</span>
				</div>
			</div>
			<div className="mt-3">
				<h4 className="text-gray-600 text-sm">Efficiency</h4>
				<span className="mt-2 text-xl font-medium text-gray-800">
					71%
				</span>
			</div>
			<div className="mt-4">
				<h4 className="text-sm text-gray-600">1209 Followers</h4>
				<div className="flex items-center overflow-hidden mt-2">
					<Image
						className="inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
						alt=""
						width="50"
						height="50"
					/>
				</div>
			</div>
			<div className="mt-4">
				<h4 className="text-sm text-gray-600">250 Following</h4>
				<div className="flex items-center overflow-hidden mt-2">
					<Image
						className="inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
						alt=""
						width="50"
						height="50"
					/>
					<Image
						className="-ml-2 inline-block h-6 w-6 rounded-full text-white border-2 border-white object-cover object-center"
						src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
						alt=""
						width="50"
						height="50"
					/>
				</div>
			</div>
			<a className="block mt-4 text-blue-400 hover:underline" href="#">
				3 Collections
			</a>
		</div>
	);
}

export default CollaboratorCard;
