import { useState } from "react";

export default function QuestionCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="question-card" onClick={() => setOpen(!open)}>
      <h3>{question}</h3>
      {open && <p>{answer}</p>}
    </div>
  );
}
