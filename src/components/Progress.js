import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, answer, points, numQuestions, maxPossiblePoints } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question: <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
