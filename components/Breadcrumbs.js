import React from "react";

function Breadcrumbs({ currentLocation }) {
	return (
		<div className="w-full">
			<div className="py-3 px-5 mb-4 bg-purple-800 text-white text-sm rounded-md border border-blue-200">
				<ul className="flex">
					<li>
						<a href="dashboard" className="underline font-semibold">
							Home
						</a>
					</li>

					<li>
						<span className="mx-2">/</span>
					</li>
					<li>{currentLocation}</li>
				</ul>
			</div>
		</div>
	);
}

export default Breadcrumbs;
