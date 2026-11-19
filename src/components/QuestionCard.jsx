import { useState } from "react";

export default function QuestionCard({ question, answer, style }) {
  const [open, setOpen] = useState(false);

  return (
    <button className="question-card" style={style} onClick={() => setOpen(!open)}>
      <h3>{question}</h3>
      {open && <p>{answer}</p>}
    </button>
  );
}
