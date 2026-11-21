export default function Cell({
  row,
  col,
  isStart,
  isGoal,
  isObstacle,
  isVisited,
  isPath,
  isRobot,
  onClick,
  onMouseDown,
  onMouseEnter,
}) {
  let cellStyle = 'bg-slate-900 border-slate-800 hover:bg-slate-750'
  let labelText = `Cell ${row},${col}`
  let cellContent = null

  if (isRobot) {
    cellStyle = 'bg-amber-400 border-amber-300 text-slate-950 font-bold z-20 ring-2 ring-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)] scale-105'
    labelText = `Robot at ${row},${col}`
    cellContent = '🤖'
  } else if (isStart) {
    cellStyle = 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold hover:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
    labelText = `Start Cell ${row},${col}`
    cellContent = 'S'
  } else if (isGoal) {
    cellStyle = 'bg-rose-500 border-rose-400 text-white font-bold hover:bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.4)]'
    labelText = `Goal Cell ${row},${col}`
    cellContent = 'G'
  } else if (isPath) {
    cellStyle = 'bg-amber-500/80 border-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.6)] z-10'
    labelText = `Path Cell ${row},${col}`
  } else if (isVisited) {
    cellStyle = 'bg-indigo-900/60 border-indigo-700/50'
    labelText = `Visited Cell ${row},${col}`
  } else if (isObstacle) {
    cellStyle = 'bg-slate-600 border-slate-500 hover:bg-slate-500'
    labelText = `Obstacle Cell ${row},${col}`
  }

  return (
    <button
      type="button"
      aria-label={labelText}
      onClick={() => onClick && onClick(row, col)}
      onMouseDown={() => onMouseDown && onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter && onMouseEnter(row, col)}
      className={`w-full aspect-square border ${cellStyle} text-[10px] sm:text-xs flex items-center justify-center select-none transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:z-10`}
    >
      {cellContent}
    </button>
  )
}
