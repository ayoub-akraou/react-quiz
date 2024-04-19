import React from "react";

export default function Options({ question, dispatch, answer }) {
	const isAnswered = answer !== null;
   const hoverStyles = !isAnswered && "hover:bg-white/20 hover:translate-x-6";
	return (
		<div className="options">
			{question.options.map((option, index) => (
				<button
					disabled={isAnswered}
					onClick={() => dispatch({ type: "newAnswer", payload: index })}
					key={option}
					className={`block mb-4 bg-white/10 rounded-full w-full px-8 py-3 text-2xl text-start ${
						hoverStyles
					} transition-all ${answer === index && "translate-x-6"} ${
						isAnswered &&
						(question.correctOption === index
							? "bg-sky-600"
							: "bg-amber-500")
					}`}
				>
					{option}
				</button>
			))}
		</div>
	);
}
