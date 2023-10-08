"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextareaAutosize from "react-textarea-autosize";
import NavBar from "@/components/navbar";
import axios from "axios";

export default function Form() {
	const questions = [
		"Please share some details about your educational background, such as the schools you attended and any significant or noteworthy events that took place during your time there?",
		"How is your current employment situation and how you feel about it? Additionally, I'd like to hear about your past employment experiences and if there's anything you wish you had done differently.",
		"How is your social life? What are some recent notable events?",
		"How is your love life? What are some recent notable events?",
		"What do you wish you never did?",
	];

	const [answers, setAnswers] = useState(questions.map((q) => ""));
	const [questionCursor, setQuestionCursor] = useState(0);
	const router = useRouter();

	const decreaseCursor = () => {
		setQuestionCursor((old) => Math.max(0, --old));
	};

	const increaseCursor = () => {
		if (questionCursor === questions.length - 1) {
			handleFormSubmission();
			// router.push("report");
		}
		setQuestionCursor((old) => Math.min(questions.length - 1, ++old));
	};

	const handleTextAreaChange = (e) => {
		setAnswers((old) => {
			let newAnswers = [...old];
			newAnswers[questionCursor] = e.target.value;
			return newAnswers;
		});
	};

	const handleFormSubmission = async () => {
		// const { data } = await axios.post(
		// 	"https://1713-128-6-37-148.ngrok-free.app",
		// 	{
		// 		education: answers[0],
		// 		employment: answers[1],
		// 		socialLife: answers[2],
		// 		loveLife: answers[3],
		// 		wishYouNeverDid: answers[4],
		// 	},
		// 	{
		// 		headers: {
		// 			"User-Id": localStorage.getItem("userId"),
		// 		},
		// 	}
		// );
		router.push("/report")
	};
	return (
		<>
			<NavBar isdark="false" />
			<div className="flex items-center flex-col">
				<dir className="flex flex-col items-start p-24 justify-between w-1/2">
					<p className="font-light text-xl">
						{questions[questionCursor]}
					</p>
					<TextareaAutosize
						className="mt-5 outline-none w-full  border-b-2 border-fuchsia-700 py-2"
						placeholder="Share your experiences"
						value={answers[questionCursor]}
						onChange={handleTextAreaChange}
					/>
					<div className="flex flex-row justify-between w-full items-baseline mt-10">
						<button
							className="bg-fuchsia-700 text-white p-4 py-1 "
							onClick={increaseCursor}
						>
							{questionCursor === questions.length - 1
								? "Submit"
								: "Next ->"}
						</button>
						{questionCursor !== 0 && (
							<button
								className="text-fuchsia-700"
								onClick={decreaseCursor}
							>
								&lt;----
							</button>
						)}
					</div>
				</dir>
			</div>
		</>
	);
}
