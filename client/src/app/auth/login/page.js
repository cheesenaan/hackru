"use client";
import NavBar from "@/components/navbar";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import {useRouter} from 'next/navigation'

export default function LogIn() {
    const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleFormSubmission = async () => {
		const { data } = await axios.post(
			"https://1713-128-6-37-148.ngrok-free.app/login",
			{
				email: email,
				password: password,
			}
		);
		localStorage.setItem("userId", data.userId);
		console.log(data.userId);
        router.push("/")
	};
	return (
		<>
			<NavBar isdark="false" />
			<div className="flex items-center flex-col">
				<dir className="flex flex-col items-start p-24 justify-between w-1/2">
					<p className="font-light text-xl">Login to Diversions</p>
					<input
						className="mt-5 outline-none w-full  border-b-2 border-fuchsia-700 py-2"
						placeholder="Email"
						value={email}
						type="email"
						onChange={(e) => setEmail(e.target.value)}
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
							href="/auth/sign-up"
						>
							Need an account?
						</Link>
					</div>
				</dir>
			</div>
		</>
	);
}
