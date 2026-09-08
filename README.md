# Tic Tac Toe

A small, accessible two-player Tic Tac Toe game built as a React component. The board uses SVG for the hand-drawn grid, animated marks, and winning-line highlight.

## Features

- Local two-player gameplay for X and O
- Win detection for rows, columns, and diagonals
- Draw detection
- Match scoreboard for X wins, O wins, and draws
- Alternating starting player between rounds
- Separate controls for starting a new round or resetting the full match
- Keyboard-accessible board cells
- Reduced-motion support for users who prefer less animation
- Responsive chalkboard-inspired styling

## Project Structure

```text
src/
├── components/
│   └── TicTacToe/
│       ├── BoardSVG.jsx       # SVG board and cell interactions
│       ├── ScoreBoard.jsx     # Match score display
│       ├── TicTacToe.css      # Layout, theme, and animations
│       └── TicTacToe.jsx      # Game state and main component
└── constants/
    └── ticTacToe.js           # Winning lines and winner calculation
```

## Requirements

- Node.js and npm
- A React application created with a bundler such as Vite, Create React App, or Next.js
- `lucide-react` for the reset icon

The repository includes a Vite application shell and npm scripts, so it can be run directly from the project root.

## Installation

Install the project dependencies from the repository root:

```bash
npm install
```

## Usage

The application entrypoint already renders the component. To use it from another React application, import it like this:

```jsx
import TicTacToe from "./components/TicTacToe/TicTacToe";

export default function App() {
  return <TicTacToe />;
}
```

The stylesheet loads the `Kalam` and `Inter` fonts from Google Fonts. For an offline deployment, replace that import with locally hosted fonts.

## How To Play

1. X starts the first round.
2. Select an empty cell to place the current player's mark.
3. The first player to complete a row, column, or diagonal wins the round.
4. A full board with no winner is recorded as a draw.
5. Select **New round** to clear the board. The other player starts next.
6. Select **Reset match** to clear the scoreboard and start a fresh round with the other player.

Board cells can be focused and activated with `Enter` or `Space`.

## Development

Run the development server from the project root:

```bash
npm install
npm run dev
```

Vite will print the local URL, usually `http://localhost:5173`.

Create a production build with:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

## License

No license has been specified for this project.
