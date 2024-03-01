"use client";

import Home from "./routes/Home";
import List from "./routes/list";
import Student from "./routes/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<Student />} />
                    <Route path="/list" element={<List />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
