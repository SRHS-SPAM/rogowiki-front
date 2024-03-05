"use client";

import Home from "./routes/Home";
import DocumentWrite from "./_components/documentWrite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./routes/list";
import Student from "./routes/page";
import Test from "./routes/test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<DocumentWrite />} />
          <Route path="/students" element={<Student />} />
          <Route path="/list" element={<List />} />
          <Route path="/test1" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
