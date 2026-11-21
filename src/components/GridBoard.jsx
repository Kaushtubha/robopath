import Cell from './Cell'
import { DEFAULT_GRID_SIZE } from '../utils/gridHelpers'

export default function GridBoard({
  grid,
  size = DEFAULT_GRID_SIZE,
  visitedCells = [],
  pathCells = [],
  robotPos = null,
  onCellClick,
  onCellMouseDown,
  onCellMouseEnter,
  onMouseUp,
}) {
  const visitedSet = new Set(visitedCells)
  const pathSet = new Set(pathCells)

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div
        className="w-full max-w-[480px] rounded-lg border border-slate-700 p-4 bg-slate-900/50 shadow-sm"
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div
          className="w-full max-w-[480px] aspect-square grid border border-slate-800 rounded overflow-hidden"
          style={{
            gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
          }}
        >
          {grid &&
            grid.map((row) =>
              row.map((cell) => {
                const key = `${cell.row}-${cell.col}`
                const isRobot = robotPos && robotPos.row === cell.row && robotPos.col === cell.col
                const isPath = pathSet.has(key)
                const isVisited = visitedSet.has(key)

                return (
                  <Cell
                    key={key}
                    row={cell.row}
                    col={cell.col}
                    isStart={cell.isStart}
                    isGoal={cell.isGoal}
                    isObstacle={cell.isObstacle}
                    isVisited={isVisited}
                    isPath={isPath}
                    isRobot={isRobot}
                    onClick={onCellClick}
                    onMouseDown={onCellMouseDown}
                    onMouseEnter={onCellMouseEnter}
                  />
                )
              })
            )}
        </div>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
            <span>Start</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-rose-500 inline-block" />
            <span>Goal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-slate-600 inline-block" />
            <span>Wall</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-indigo-900/70 inline-block" />
            <span>Visited</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-amber-500/80 inline-block" />
            <span>Path</span>
          </div>
        </div>
      </div>
    </div>
  )
}
