import { GRID_PATHS } from "../../constants/ticTacToe";

export default function BoardSVG({ squares, onClickCell, winnerInfo }) {
  return (
    <svg viewBox="0 0 300 300" className="board-svg" role="grid" aria-label="Tic tac toe board">
      <path d={GRID_PATHS.v1} className="grid-line" />
      <path d={GRID_PATHS.v2} className="grid-line" />
      <path d={GRID_PATHS.h1} className="grid-line" />
      <path d={GRID_PATHS.h2} className="grid-line" />

      {squares.map((val, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const cx = col * 100 + 50;
        const cy = row * 100 + 50;
        const disabled = !!val || !!winnerInfo;
        return (
          <g key={i}>
            <rect
              x={col * 100}
              y={row * 100}
              width={100}
              height={100}
              className="cell-hit"
              style={{ cursor: disabled ? "default" : "pointer" }}
              onClick={() => onClickCell(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClickCell(i);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Row ${row + 1}, column ${col + 1}${val ? ", " + val : ", empty"}`}
            />
            {val === "X" && (
              <g>
                <line x1={cx - 28} y1={cy - 28} x2={cx + 28} y2={cy + 28} className="mark-x" style={{ "--len": 79 }} />
                <line x1={cx + 28} y1={cy - 28} x2={cx - 28} y2={cy + 28} className="mark-x" style={{ "--len": 79, animationDelay: "0.08s" }} />
              </g>
            )}
            {val === "O" && (
              <circle cx={cx} cy={cy} r={30} className="mark-o" style={{ "--len": 188.5 }} />
            )}
          </g>
        );
      })}

      {winnerInfo && (
        <line
          x1={winnerInfo.coords.x1}
          y1={winnerInfo.coords.y1}
          x2={winnerInfo.coords.x2}
          y2={winnerInfo.coords.y2}
          className="win-line"
          style={{ "--len": Math.hypot(winnerInfo.coords.x2 - winnerInfo.coords.x1, winnerInfo.coords.y2 - winnerInfo.coords.y1) }}
        />
      )}
    </svg>
  );
}