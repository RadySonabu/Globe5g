import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Breadcrumbs from "../components/Breadcrumbs";

function LinkAccount() {
	const { linkStatus, setLinkStatus } = useState("Link");
	return (
		<div className="bg-white h-screen">
			<div className="grid grid-cols-6">
				<Sidebar className="col-span-1" />
				<div className="col-span-5 gap-x-8 m-5">
					<Breadcrumbs currentLocation="Link Accounts" />
					<div className="grid grid-cols-3 gap-x-8">
						<Card
							title="Facebook"
							content="Keeping up with friends is faster and easier than ever. Share updates and photos, engage with friends and Pages, and stay connected to communities"
							callToAction="Link"
							image="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
						/>
						<Card
							title="Instagram"
							content="A simple, fun & creaive way to share your photos, stories, and videos with the friends and followers you care about."
							callToAction="Link"
							image="https://toppng.com/uploads/preview/instagram-logo-1155105798346ilx9kcc6.png"
						/>
						<Card
							title="Tiktok"
							content="Trends start here. On a device or on the web, viewers can watch and discover millions of personalized short videos"
							callToAction="Link"
							image="https://i.pinimg.com/originals/80/2a/19/802a19bdfaec18f714d44db59b456a6e.png"
						/>
						<Card
							title="Youtube"
							content="Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube."
							callToAction="Link"
							image="https://www.pngkit.com/png/full/2-21145_youtube-logo-transparent-png-pictures-transparent-background-youtube.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default linkAccount;
