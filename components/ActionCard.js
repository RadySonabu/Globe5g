import React from "react";
import Image from "next/image";
function ActionCard({ title, content, image, actionButtonText }) {
	return (
		<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
			<div className="flex justify-center md:justify-end -mt-16">
				<Image
					className="w-20 h-20 object-cover rounded-full "
					src={image}
					alt="image"
					width="50"
					height="50"
				/>
			</div>
			<div>
				<h2 className="text-gray-800 text-3xl font-semibold">
					{title}
				</h2>
				<p className="mt-2 text-gray-600">{content}</p>
			</div>
			<div className="flex justify-end mt-4">
				{/* <a href="#" className="text-xl font-medium text-indigo-500">
					{callToAction}
				</a> */}
				<button
					type="submit"
					className="text-xl font-medium text-indigo-500"
				>
					{actionButtonText}
				</button>
			</div>
		</div>
	);
}

export default ActionCard;
