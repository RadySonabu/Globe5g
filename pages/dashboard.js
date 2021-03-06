import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
function dashboard() {
	return (
		<div className="bg-white h-screen">
			<div className="grid grid-cols-6 ">
				<Sidebar className="col-span-1" />
				<div className="grid grid-cols-3 col-span-5 gap-x-8 m-5">
					<StatsCard
						title="This month's revenue"
						amount="24,012.23"
						svgIcon="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
					/>
					<StatsCard
						title="Collaborating creators"
						amount="6"
						svgIcon="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
					/>
					<StatsCard
						title="Products Sold"
						amount="1,512"
						svgIcon="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
					/>
				</div>
			</div>
		</div>
	);
}

export default dashboard;
