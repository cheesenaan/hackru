"use client";
import Logo from "./logo";
import Link from "next/link";

export default function NavBar({ isdark }) {
	return (
		<nav
			className={
				(isdark === "true" ? "bg-stone-800" : "") + " px-24 py-10"
			}
		>
			<Link href="/">
				<Logo isdark={isdark} />
			</Link>
		</nav>
	);
}
