"use client";
import Logo from "./logo";
import Link from "next/link";

export default function NavBar({ isdark }) {
	return (
		<nav
			className={
				(isdark === "true" ? "bg-stone-800" : "") + " px-24 py-10 flex justify-between"
			}
		>
			<Link href="/">
				<Logo isdark={isdark} />
			</Link>

			<div>
			<Link className="mr-9 underline text-gray-700" href={"/auth/login"}>Login</Link>
			<Link className= "underline text-gray-700" href={"/auth/sign-up"}>Sign Up</Link>

			</div>
		</nav>
	);
}
