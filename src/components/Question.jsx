import React from "react";
import Options from './Options'
export default function Question({ question, dispatch, answer }) {
	// console.log(question);
	return (
		<div className="">
			<h3 className="text-[1.6rem] mb-6 font-medium">{question.question}</h3>
			<Options question={question} dispatch={dispatch} answer={answer}/>
		</div>
	);
}
