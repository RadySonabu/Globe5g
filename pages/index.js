import Head from "next/head";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
export default function index() {
	return (
		<div className="bg-yellow-400 h-screen">
			<Login />
		</div>
	);
}
