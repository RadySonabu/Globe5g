import React from "react";
import Sidebar from "../components/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs";
import ActionCard from "../components/ActionCard";

function sell() {
	return (
		<div>
			<div className="bg-white h-screen">
				<div className="grid grid-cols-6">
					<Sidebar className="col-span-1" />
					<div className="col-span-5 gap-x-8 m-5">
						<Breadcrumbs currentLocation="Sell" />
						<div className="grid grid-cols-3 gap-x-8">
							<ActionCard
								title="Products"
								content="Go to your products and update their details"
								actionButtonText="Go"
								image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVd1Pv0QgQ8b9tZ4PoxALIfyTKd6-gtTxFw&usqp=CAU"
							/>
							<ActionCard
								title="Go Live"
								content="Live stream selling on multiple platforms connected to this account."
								actionButtonText="Start Streaming"
								image="https://e7.pngegg.com/pngimages/251/232/png-clipart-red-and-blue-signal-logo-facebook-live-icon-icons-logos-emojis-tech-companies-thumbnail.png"
							/>
							<ActionCard
								title="Post Product"
								content="Update or Create a new product post and post on multiple channels."
								actionButtonText="Create Post"
								image="https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_960_720.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default sell;
