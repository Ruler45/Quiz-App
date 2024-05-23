// import { useState } from "react";
import { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "./Home.module.scss";
import QuizContext from "@/context/quizContext";

const Home = () => {
  const levels = ["easy", "medium", "hard"];
  const { limit, setLimit, difficulty, setDifficulty, startQuiz } =
    useContext(QuizContext);

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };
  const handledifficulty = (level) => () => {
    setDifficulty(level);
  };

  return (
    <div className={styles.main}>
      <h1>Welcome to the Technical Quiz App</h1>
      <label htmlFor="difficulty">
        Please Select the level (default is easy) :
      </label>
      <div className={styles.difficulty} id="difficulty">
        {levels.map((level) => (
          <Button
            key={level}
            variant={difficulty === level ? "primary" : "secondary"}
            onClick={handledifficulty(level)}
          >
            {level}
          </Button>
        ))}
      </div>
      <div className={styles.limit}>
        <label htmlFor="limit">Total no of questions?</label>
        <Input
          type="number"
          id="limit"
          value={limit}
          onChange={handleLimitChange}
        />
      </div>
      <Button variant="secondary" onClick={startQuiz}>
        Start Quiz
      </Button>
    </div>
  );
};

export default Home;
