import React from "react";

function StatsCard({ title, amount, svgIcon }) {
	return (
		<div>
			<div className="flex flex-row m-auto bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 gap-8 rounded-lg border-2 border-purple-500">
				<div className="my-auto">
					<div className="text-lg text-purple-300">{title}</div>
					<div className="text-4xl text-purple-100">{amount}</div>
				</div>
				<div className="text-purple-300 my-auto mx-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-12 w-12"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d={svgIcon} />
					</svg>
				</div>
			</div>
		</div>
	);
}

export default StatsCard;
