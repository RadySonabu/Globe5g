import React from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";
import InventoryItems from "../components/InventoryItems";
function inventory() {
	return (
		<div>
			<div className="bg-white h-screen">
				<div className="grid grid-cols-6">
					<Sidebar className="col-span-1" />
					<div className="col-span-5 gap-x-8 m-5">
						<Breadcrumbs currentLocation="Inventory" />
						<div className="col-span-5">
							<InventoryItems />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default inventory;
