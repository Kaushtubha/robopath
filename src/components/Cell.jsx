export default function Cell({
  row,
  col,
  isStart,
  isGoal,
  isObstacle,
  onClick,
  onMouseDown,
  onMouseEnter,
}) {
  let cellStyle = 'bg-slate-900 border-slate-800 hover:bg-slate-700'
  let labelText = `Cell ${row},${col}`

  if (isStart) {
    cellStyle = 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold hover:bg-emerald-400'
    labelText = `Start Cell ${row},${col}`
  } else if (isGoal) {
    cellStyle = 'bg-rose-500 border-rose-400 text-white font-bold hover:bg-rose-400'
    labelText = `Goal Cell ${row},${col}`
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
      {isStart ? 'S' : isGoal ? 'G' : null}
    </button>
  )
}
