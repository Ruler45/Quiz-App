import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
  const levels = ["easy", "medium", "hard"];
  const [limit, setLimit] = useState(5);
  const [difficulty, setDifficulty] = useState(levels[0]);

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
  };
  const handledifficulty = (level) => () => {
    setDifficulty(level);
  };

  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz/difficulty=${difficulty}&limit=${limit}`);
  };

  return (
    <div>
      <h1>Welcome to the Technical Quiz App</h1>
      <h3>Please Select the level (default is easy) :</h3>
      <div>
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
      <div>
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
