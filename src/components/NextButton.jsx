import React from "react";

export default function NextButton({ dispatch, answer, index,  maxIndex }) {
	if (answer === null) return null;
	console.log(answer);
	console.log(index, maxIndex);
	console.log(index === maxIndex);
	if(index < maxIndex)
	return <button onClick={() => dispatch({type: "nextQuestion"})} className="btn-primary">Next</button>;
	if(index === maxIndex) 
	return <button onClick={() => dispatch({type: "finish"})} className="btn-primary">Finish</button>;
}
