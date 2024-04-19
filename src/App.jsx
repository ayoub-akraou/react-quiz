import { useEffect, useReducer } from "react";
import "./App.css";
import {
	Header,
	Main,
	Loader,
	Error,
	StartScreen,
	Question,
	NextButton,
	Progress,
} from "./components/";

const initialState = {
	questions: [],
	// loading, error, ready, active, finished
	status: "loading",
	index: 0,
	answer: null,
	points: 0,
};


function reducer(state, action) {
	switch (action.type) {
		case "dataReceived":
			return {
				...state,
				questions: action.payload,
				status: "ready",
			};
		case "dataFailed":
			return { ...state, status: "error" };
		case "start":
			return { ...state, status: "active" };
		case "newAnswer":
			const question = state.questions.at(state.index);
			return {
				...state,
				answer: action.payload,
				points:
				action.payload === question.correctOption
				? state.points + question.points
						: state.points,
					};
		case "nextQuestion":
			return { ...state, index: state.index + 1, answer: null };
		default:
			throw new Error("Unkown action!");
	}
}
export default function App() {
	const [{ questions, status, index, answer, points }, dispatch] = useReducer(
		reducer,
		initialState
	);
	const maxPoints = questions.reduce((acc, current) => acc + current.points, 0)

	useEffect(function () {
		(async () => {
			try {
				const response = await fetch("http://localhost:8000/questions");
				const data = await response.json();
				dispatch({ type: "dataReceived", payload: data });
				console.log(data);
			} catch (error) {
				console.error(error);
				dispatch({ type: "dataFailed" });
			}
		})();
	}, []);

	return (
		<>
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && (
					<StartScreen
						dispatch={dispatch}
						numberOfQuestions={questions.length}
					/>
				)}
				{status === "active" && (
					<>
						<Progress answer={answer} index={index} numOfQuestions={questions.length} points={points} maxPoints={maxPoints}/>
						<Question
							question={questions[index]}
							dispatch={dispatch}
							answer={answer}
						/>
						<NextButton
							dispatch={dispatch}
							answer={answer}
							index={index}
							maxIndex={questions.length - 1}
						/>
					</>
				)}
			</Main>
		</>
	);
}
// change the color of progress bar
// fix the width in the start screen and main
// style the next button