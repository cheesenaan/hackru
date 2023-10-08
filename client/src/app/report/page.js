"use client";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import NavBar from "@/components/navbar";

export default function Report() {
	const nodes = [
		{
			title: "Emigrate",
			description:
				"bla bla about what happened to the user when you emigrated",
			alternateChoices: [
				"you stay in home country",
				"you leave for france to live with cousin",
				"you emigrate at a later point in your life and your stick to home country in hopes of local circumstances getting better",
			],
		},
		{
			title: "Passive in High School",
			description:
				"bla bla about what happened to the user when you emigrated",
			alternateChoices: [
				"you try hard in high school and burn out and end up just in community college",
				"you sweat in high school and secure a highly selective scholarship at princeton university",
			],
		},
		{
			title: "Rutgers",
			description:
				"bla bla about what happened to the user when you emigrated",
			alternateChoices: [
				"instead of studying computer science at rutgers, you study film and photography. you slowly raise as an upcoming photograph and you almost win National Geographic  photography contest for 20 under 20",
				"you study medicine and have a slightly stressful, extremely disciplined lifestyle at NYU. you have fun from time to times by going out with friends in the city",
			],
		},
	];
	const [activeNode, setActiveNode] = useState(-1);
	const [customNodeChange, setCustomNodeChange] = useState(
		nodes.map((n) => undefined)
	);

	const handleNodeClick = (i) => {
		setCustomNodeChange((old) => old.map((n) => undefined));
		setActiveNode(i);
	};

	const handleCustomNodeAdd = (e) => {
		setCustomNodeChange((old) => {
			const newArr = [...old];
			newArr[activeNode] = "";
			return newArr;
		});
	};
	const handleCustomNodeChange = (e) => {
		setCustomNodeChange((old) => {
			const newArr = [...old];
			newArr[activeNode] = e.target.value;
			return newArr;
		});
	};

	return (
		<>
			<NavBar isdark="true" />

			<div className="bg-stone-800 h-screen  p-24 w-full flex flex-col items-center">
				<div className="max-w-4xl">
					<h1 className="text-cyan-50 text-xl text-center">
						Explore your self in alternative realties
					</h1>
					<h2 className="text-stone-400 text-lg text-center">
						Backtrack through your decisions and figure out the what
						if...
					</h2>

					<div className="flex justify-center items-center mt-20 flex-wrap">
						{nodes.map(({ title, description }, i) => (
							<div key={i} className="flex items-center mb-10">
								<button
									className={`${
										activeNode === i
											? "text-green-300"
											: "text-stone-300"
									} text-lg relative ${
										i !== 0
											? "before:content-['_>_'] before:text-stone-500"
											: ""
									}`}
									onClick={() => handleNodeClick(i)}
								>
									{title}
								</button>
								{i !== nodes.length - 1 && (
									<span className="block w-32 h-1 bg-stone-700 mx-2" />
								)}
							</div>
						))}
					</div>
					<div className="mt-7 flex flex-col items-end">
						{nodes[activeNode]?.alternateChoices.map(
							(altChoiceStr, i) => (
								<div
									key={i}
									className="hover:bg-gradient-to-bl hover: from-green-500 hover:to-fuchsia-700  bg-stone-700 p-0.5 w-full"
								>
									<button className="text-left p-5  text-cyan-50  bg-stone-800 w-full">
										{altChoiceStr}
									</button>
								</div>
							)
						)}
						{customNodeChange[activeNode] !== undefined && (
							<TextareaAutosize
								placeholder="Enter an alternative choice. See how your life turns to be"
								className="bg-transparent text-cyan-50  p-5 w-full border-2  border-stone-700 outline-none"
								value={customNodeChange[activeNode]}
								onChange={handleCustomNodeChange}
							/>
						)}

						{activeNode !== -1 && (
							<button
								className="bg-fuchsia-700 text-cyan-50 p-4 py-1 font-semibold mt-10"
								onClick={handleCustomNodeAdd}
							>
								{customNodeChange[activeNode] !== undefined &&
								customNodeChange[activeNode] !== ""
									? "Submit & Explore"
									: "Custom decision + "}
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
