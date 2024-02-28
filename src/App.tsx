"use client";

import Home from "./routes/Home";
import DocumentWrite from "./_components/documentWrite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<DocumentWrite />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
