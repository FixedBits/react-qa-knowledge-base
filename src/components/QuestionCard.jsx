export default function QuestionCard({ question, answer }) {
  return (
    <div className="question-card">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
}
