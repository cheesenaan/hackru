import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navbar";

export default function Home() {
	return (
		<>
			<NavBar isdark="false" />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<dir>
					<h1 className="text-4xl max-w-3xl text-center font-light">
						Walk back to your life&#39;s change points and ponder
						alternative selfs
					</h1>
					<h2 className="text-center text-xl font-light mt-6">
						<span className="after:inline-block after:h-3 after:w-20  after:bg-gradient-to-r after:from-fuchsia-700 after:to-transparent">
							what if I studied{" "}
						</span>
						<span className="after:inline-block after:h-3 after:w-20  after:bg-gradient-to-r after:from-green-500 after:to-transparent">
							{" "}
							instead of{" "}
						</span>
					</h2>

					<div className="bg-gradient-to-bl  from-green-500 to-fuchsia-700 p-0.5 w-80 mt-20 ml-auto mr-auto">
						<Link
							href="./form"
							className="bg-white w-full block text-center p-4 font-medium"
						>
							Explore Your Diversions
						</Link>
					</div>
				</dir>
			</main>
		</>
	);
}
