import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
// import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:query" element={<Quiz />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
