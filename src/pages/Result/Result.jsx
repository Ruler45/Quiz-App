import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "@/context/quizContext";
import styles from "./Result.module.scss";
import { Button } from "@/components/ui/button";

const Result = () => {
  const { userAnswers, questions, limit } = useContext(QuizContext);

  const correctAnswers = questions.map((question) => question.correct_answer);
  const [score, setScore] = useState(0);
  useEffect(() => {
    setScore(0);
    calculateScore();
  }, []);
  const calculateScore = () => {
    correctAnswers.forEach((answer, index) => {
      if (answer === userAnswers[index]) {
        setScore((prev) => prev + 1);
      }
    });
  };

  const navigate = useNavigate();
  const playAgain = () => {
    navigate("/");
  };

  return (
    <div className={styles.result}>
      <h1>Result</h1>
      <h3>
        Your score: {score}/{limit}
      </h3>
      <div className={styles.overview}>
        <h3>Overview</h3>
        <div className={styles.questions}>
          {questions.map((question, index) => (
            <div className={styles.question} key={question.question}>
              <p className={styles.question_title}>
                {index + 1}.{question.question}
              </p>
              <p className={styles.question_answer}>
                Correct answer: {question.correct_answer}
              </p>
              <p className={styles.question_answer}>
                Your answer: {userAnswers[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={playAgain} className={styles.button}>
        Play Again
      </Button>
    </div>
  );
};

export default Result;
