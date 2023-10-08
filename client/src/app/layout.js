import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "Diversions",
	description: "explore your alternative selfs",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className + " bg-white"}>
				{children}
			</body>
		</html>
	);
}
