export default function ScoreBoard({ scores }) {
  return (
    <div className="score-row">
      <div className="score-item">
        <span className="score-num x">{scores.X}</span>
        <span className="score-label">X</span>
      </div>
      <div className="score-divider" />
      <div className="score-item">
        <span className="score-num draws">{scores.draws}</span>
        <span className="score-label">Draws</span>
      </div>
      <div className="score-divider" />
      <div className="score-item">
        <span className="score-num o">{scores.O}</span>
        <span className="score-label">O</span>
      </div>
    </div>
  );
}