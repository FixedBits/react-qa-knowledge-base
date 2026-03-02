import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import QuestionCard from "./components/QuestionCard";
import { questions } from "./data/questions";
import "./styles/App.css";

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = questions.filter((q) => q.question.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app-container">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="content-area">
{filtered.length > 0 ? (
  filtered.map((q) => (
    <QuestionCard key={q.id} question={q.question} answer={q.answer} />
  ))
) : (
  <p style={{ color: "#aaa", marginTop: "20px" }}>
    No questions match your search.
  </p>
)}      </div>
    </div>
  );
}
