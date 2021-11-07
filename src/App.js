import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Hero";
import FullCard from "./FullCard";

function App() {
  const data = [
    {
      title: "HTML",
      description: "This is HTML",
    },
    {
      title: "CSS",
      description: "This is CSS",
    },
    {
      title: "JavaScript",
      description: "This is JavaScript",
    },
    {
      title: "React",
      description: "This is React",
    },
    {
      title: "Vue",
      description: "This is Vue",
    },
    {
      title: "Angular",
      description: "This is Angular",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero data={data} />} />
        <Route path="/cards/:title" element={<FullCard data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
