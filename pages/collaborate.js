import React from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import CollaboratorCard from "../components/CollaboratorCard";
function collaborate() {
	return (
		<div>
			<div className="bg-white h-screen">
				<div className="grid grid-cols-6">
					<Sidebar className="col-span-1" />
					<div className="col-span-5 gap-x-8 m-5">
						<Breadcrumbs currentLocation="Collaborate" />
						<div className="grid grid-cols-3 gap-x-8">
							<CollaboratorCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default collaborate;
