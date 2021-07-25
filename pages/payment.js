import React from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
function payment() {
	return (
		<div>
			<div className="bg-white h-screen">
				<div className="grid grid-cols-6">
					<Sidebar className="col-span-1" />
					<div className="grid grid-cols-auto col-span-5 gap-x-8 m-5">
						<Breadcrumbs currentLocation="Payment" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default payment;
