"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextareaAutosize from "react-textarea-autosize";
import NavBar from "@/components/navbar";
export default function Form() {
	const questions = [
		"Tell me about your education, including the schools you went to, and the important/notable events that have occurred there.",
		"Tell me about your employment situation. How do you feel about it? What about your past employment? What do you wish you did?",
		"What is your social life looking like? What are some notable events?",
		"What is your love life looking like? What are some your past loves? What went wrong, what did you wish would happen?",
		"What do you do in your free time? What do you enjoy?",
		"What is your religion and beliefs. Is there any outstanding beliefs you have you wish to share? Is these anything these beliefs have caused?",
		"What do you wish you never did?",
		"What do you wish you had done?",
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

	const handleFormSubmission = () => {
		
	}
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
						<button
							className="text-fuchsia-700"
							onClick={decreaseCursor}
						>
							&lt;----
						</button>
					</div>
				</dir>
			</div>
		</>
	);
}
