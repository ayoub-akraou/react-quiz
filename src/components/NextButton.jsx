import React from "react";

export default function NextButton({ dispatch, answer, index,  maxIndex }) {
	if (answer === null || index === maxIndex) return null;
	return <button onClick={() => dispatch({type: "nextQuestion"})} className="px-5 py-2 text-2xl font-medium">next</button>;
}
