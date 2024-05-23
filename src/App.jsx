import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import QuizContextProvider from "./context/quizContextProvider";
import Result from "./pages/Result/Result";
// import About from "./pages/about/About";

function App() {
  return (
    <QuizContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:qNo" element={<Quiz />} />
          <Route path="/quiz/result" element={<Result />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        {/* <Home/> */}
      </div>
    </QuizContextProvider>
  );
}

export default App;
