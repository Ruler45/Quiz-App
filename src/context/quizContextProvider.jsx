import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import QuizContext from "./quizContext";

const QuizContextProvider = ({ children }) => {
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const [limit, setLimit] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");

  const navigate = useNavigate();

  const startQuiz = async () => {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${limit}&difficulty=${difficulty}&type=multiple`,
    );
    console.log(response.data.results);
    setQuestions(response.data.results);
    navigate(`/quiz/${1}`);
  };

  const contextValue = useMemo(
    () => ({
      currentQuestionNo,
      setCurrentQuestionNo,
      score,
      setScore,
      questions,
      setQuestions,
      error,
      setError,
      userAnswers,
      setUserAnswers,
      correctAnswers,
      setCorrectAnswers,
      limit,
      setLimit,
      difficulty,
      setDifficulty,
      showAnswer,
      setShowAnswer,
      startQuiz,
    }),
    [
      currentQuestionNo,
      setCurrentQuestionNo,
      score,
      setScore,
      questions,
      setQuestions,
      error,
      setError,
      userAnswers,
      setUserAnswers,
      correctAnswers,
      setCorrectAnswers,
      limit,
      setLimit,
      difficulty,
      setDifficulty,
      showAnswer,
      setShowAnswer,
      startQuiz,
    ],
  );

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};
export default QuizContextProvider;
