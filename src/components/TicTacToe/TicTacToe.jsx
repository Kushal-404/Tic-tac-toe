import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { calculateWinner } from "../../constants/ticTacToe";
import BoardSVG from "./BoardSVG";
import ScoreBoard from "./ScoreBoard";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [roundStarter, setRoundStarter] = useState("X");
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const isDraw = !winner && squares.every(Boolean);

  // Tally the result exactly once, the moment a game ends.
  useEffect(() => {
    if (winner) {
      setScores((s) => ({ ...s, [winner]: s[winner] + 1 }));
    } else if (isDraw) {
      setScores((s) => ({ ...s, draws: s.draws + 1 }));
    }
  }, [winner, isDraw]);

  function handleClick(i) {
    if (squares[i] || winner) return;
    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function newRound() {
    const nextStarter = roundStarter === "X" ? "O" : "X";
    setRoundStarter(nextStarter);
    setXIsNext(nextStarter === "X");
    setSquares(Array(9).fill(null));
  }

  function resetMatch() {
    setScores({ X: 0, O: 0, draws: 0 });
    newRound();
  }

  let status;
  if (winner) status = `${winner} wins the round`;
  else if (isDraw) status = "Nobody wins this one";
  else status = `${xIsNext ? "X" : "O"} to move`;

  const statusColor = winner === "X" ? "var(--x)" : winner === "O" ? "var(--o)" : isDraw ? "var(--accent)" : "var(--ink)";

  return (
    <div className="ttt-wrap">
      <div className="ttt-card">
        <h1 className="ttt-title">Tic Tac Toe</h1>
        <p className="ttt-status" style={{ color: statusColor }}>{status}</p>

        <BoardSVG
          squares={squares}
          onClickCell={handleClick}
          winnerInfo={winnerInfo}
        />

        <ScoreBoard scores={scores} />

        <button className="btn-reset" onClick={newRound}>
          <RotateCcw size={16} />
          New round
        </button>
        <button className="btn-link" onClick={resetMatch}>Reset match</button>
      </div>
    </div>
  );
}