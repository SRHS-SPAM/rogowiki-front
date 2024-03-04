"use client";

import Home from "./routes/Home";
import DocumentWrite from "./_components/documentWrite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./routes/list";
import Student from "./routes/page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<DocumentWrite />} />
          <Route path="/students" element={<Student />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
