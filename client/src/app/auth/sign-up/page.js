"use client";
import NavBar from "@/components/navbar";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Auth() {
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const [password, setPassword] = useState("");
	// const router = useRouter();
	
	const handleFormSubmission = async () => {
		const { data } = await axios.post("https://1713-128-6-37-148.ngrok-free.app/register", {
			email: email,
			fullName: fullName,
			password: password,
		});
		// router.push("/auth/login")
	};
	return (
		<>
			<NavBar isdark="false" />
			<div className="flex items-center flex-col">
				<dir className="flex flex-col items-start p-24 justify-between w-1/2">
					<p className="font-light text-xl">Sign up for Diversions</p>
					<input
						className="mt-5 outline-none w-full  border-b-2 border-fuchsia-700 py-2"
						placeholder="Email"
						value={email}
						type="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="mt-5 outline-none w-full  border-b-2 border-fuchsia-700 py-2"
						placeholder="Name & Last Name"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>
					<input
						className="mt-5 outline-none w-full  border-b-2 border-fuchsia-700 py-2"
						placeholder="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div className="flex flex-row justify-between w-full items-baseline mt-20">
						<button
							className="bg-fuchsia-700 text-white p-4 py-1 "
							onClick={handleFormSubmission}
						>
							Sign Up
						</button>
						<Link
							className="text-gray-400 underline"
							href="/auth/login"
						>
							Already have an account
						</Link>
					</div>
				</dir>
			</div>
		</>
	);
}
