import { useState } from 'react'
import Cell from './Cell'
import { createGrid, DEFAULT_GRID_SIZE } from '../utils/gridHelpers'

export default function GridBoard({ size = DEFAULT_GRID_SIZE }) {
  const [grid] = useState(() => createGrid(size, size))

  const handleCellClick = (row, col) => {
    // Phase 4: handle start, goal, and obstacles
  }

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] rounded-lg border border-slate-700 p-4 bg-slate-900/50 shadow-sm">
        <div
          className="w-full max-w-[480px] aspect-square grid"
          style={{
            gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
          }}
        >
          {grid.map((row) =>
            row.map((cell) => (
              <Cell
                key={`${cell.row}-${cell.col}`}
                row={cell.row}
                col={cell.col}
                isObstacle={cell.isObstacle}
                onClick={handleCellClick}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
