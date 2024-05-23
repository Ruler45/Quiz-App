import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Quiz = () => {
  const { query } = useParams();
  const difficulty = query.split("&")[0].split("=")[1];
  const limit = query.split("&")[1].split("=")[1];

  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const answer = new Array(2).fill(null);

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${limit}&difficulty=${difficulty}`,
      )
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, []);

  const handleSelect = (e, i) => {
    answer[i] = e.target.value;
  };

  const handleSubmit = () => {
    setScore(0);
    answer.forEach((item, i) => {
      if (item === questions[i].correct_answer) {
        setScore((prev) => prev + 1);
      }
    });
    // setShowAnswer(true);
  };
  return (
    <div className="w-[80vw] flex my-2  ">
      <h1>Quiz Page</h1>
      {questions.map((item, i) => {
        const options = item.incorrect_answers.concat(item.correct_answer);
        options.sort();
        // console.log(options);
        let result = item.question.replace(/&quot;/g, '"');
        result = result.replace(/&#039;/g, "'");

        return (
          <div key={item.question}>
            <h3>{result}</h3>

            <select onChange={(e) => handleSelect(e, i)}>
              <option>Choose an answer</option>
              {options.map((option) => {
                let optionResult = option.replace(/&quot;/g, '"');
                optionResult = optionResult.replace(/&#039;/g, "'");
                return <option key={option}>{optionResult}</option>;
              })}
            </select>
          </div>
        );
      })}

      <Dialog>
        <DialogTrigger>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You have Successfully compeleted the quiz</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <p>
              Your total score is : {score}/{limit}
            </p>
            <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
            <Button onClick={() => window.location.reload()}>
              Try another quiz
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {showAnswer && (
        <div>
          <h3>Correct Answers: </h3>
          {questions.map((item) => {
            let result = item.question.replace(/&quot;/g, '"');
            result = result.replace(/&#039;/g, "'");
            return (
              <div key={item.question}>
                <h3>{result}</h3>
                <p>{item.correct_answer}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Quiz;
