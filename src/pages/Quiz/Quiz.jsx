import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizContext from "@/context/quizContext";
import { Button } from "@/components/ui/button";
import styles from "./Quiz.module.scss";

const Quiz = () => {
  const { qNo } = useParams();
  const navigate = useNavigate();

  const {
    questions,
    currentQuestionNo,
    setCurrentQuestionNo,
    userAnswers,
    setUserAnswers,
    limit,
  } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
      window.location.reload();
    }
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      if (newAnswers.length < parseInt(qNo, limit + 1)) {
        newAnswers.push("");
      }
      return newAnswers;
    });
    setCurrentQuestion(questions[currentQuestionNo]);
    setOptions(
      [
        ...questions[currentQuestionNo].incorrect_answers,
        questions[currentQuestionNo].correct_answer,
      ].sort(),
    );
  }, [questions, navigate]);

  const handleNext = () => {
    if (parseInt(qNo, 10) >= limit) {
      navigate(`/quiz/result`);
      return;
    }
    setCurrentQuestionNo((prev) => prev + 1);
    navigate(`/quiz/${parseInt(qNo, 10) + 1}`);
  };

  const handlePrev = () => {
    if (parseInt(qNo, 10) === 1) {
      return;
    }
    setCurrentQuestionNo((prev) => prev - 1);
    navigate(`/quiz/${parseInt(qNo, 10) - 1}`);
  };

  const handleSelect = (e) => {
    // console.log(e.target.value);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionNo] = e.target.value;
    setUserAnswers(newAnswers);
  };

  return (
    <div className={styles.Quiz}>
      <h1>Quiz</h1>
      <p className={styles.question}>{currentQuestion.question}</p>
      <div className={styles.option}>
        {options.map((option, i) => {
          return (
            <div>
              {i + 1}. {option}
            </div>
          );
        })}
      </div>
      <div>
        <select
          name="options"
          id="options"
          onChange={handleSelect}
          value={userAnswers[currentQuestionNo]}
        >
          <option value="">Choose an option</option>
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.buttonContainer}>
        {currentQuestionNo > 0 && <Button onClick={handlePrev}>Prev</Button>}
        <Button onClick={handleNext}>{qNo < limit ? "Next" : "Submit"}</Button>
      </div>
    </div>
  );
};

export default Quiz;
