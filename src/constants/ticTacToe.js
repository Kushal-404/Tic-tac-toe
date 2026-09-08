// All 8 ways to win, and the coordinates (in the 300x300 board) to draw
// a strike-through line for each one.
export const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],           // diagonals
];

export const WIN_COORDS = [
  { x1: 15, y1: 50, x2: 285, y2: 50 },
  { x1: 15, y1: 150, x2: 285, y2: 150 },
  { x1: 15, y1: 250, x2: 285, y2: 250 },
  { x1: 50, y1: 15, x2: 50, y2: 285 },
  { x1: 150, y1: 15, x2: 150, y2: 285 },
  { x1: 250, y1: 15, x2: 250, y2: 285 },
  { x1: 25, y1: 25, x2: 275, y2: 275 },
  { x1: 275, y1: 25, x2: 25, y2: 275 },
];

// Slightly irregular paths so the grid reads as chalk, not a ruled line.
export const GRID_PATHS = {
  v1: "M 102 15 C 98 80, 104 150, 99 285",
  v2: "M 198 18 C 203 90, 197 160, 202 282",
  h1: "M 15 98 C 90 103, 160 97, 285 102",
  h2: "M 18 202 C 88 197, 165 203, 282 198",
};

export function calculateWinner(squares) {
  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: LINES[i], coords: WIN_COORDS[i] };
    }
  }
  return null;
}