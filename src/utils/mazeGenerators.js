/**
 * Generates random obstacles across the grid while protecting start and goal nodes.
 *
 * @param {Array<Array<Object>>} grid
 * @param {number} [density=0.25] - Fraction of cells to populate with obstacles (0 to 1)
 * @returns {Array<Array<Object>>}
 */
export function generateRandomObstacles(grid, density = 0.25) {
  return grid.map((row) =>
    row.map((cell) => {
      if (cell.isStart || cell.isGoal) {
        return { ...cell, isObstacle: false }
      }
      return {
        ...cell,
        isObstacle: Math.random() < density,
      }
    })
  )
}

/**
 * Generates a structured maze using a recursive division algorithm.
 *
 * @param {Array<Array<Object>>} grid
 * @returns {Array<Array<Object>>}
 */
export function generateRecursiveDivisionMaze(grid) {
  const newGrid = grid.map((r) => r.map((c) => ({ ...c, isObstacle: false })))
  const rows = newGrid.length
  const cols = newGrid[0].length

  // Add outer boundary walls
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        if (!newGrid[r][c].isStart && !newGrid[r][c].isGoal) {
          newGrid[r][c].isObstacle = true
        }
      }
    }
  }

  function divide(rStart, rEnd, cStart, cEnd) {
    if (rEnd - rStart < 3 || cEnd - cStart < 3) return

    const horizontal = rEnd - rStart > cEnd - cStart

    if (horizontal) {
      // Choose horizontal split line (even row)
      const possibleRows = []
      for (let r = rStart + 1; r < rEnd; r++) {
        if (r % 2 === 0) possibleRows.push(r)
      }
      if (possibleRows.length === 0) return
      const splitRow = possibleRows[Math.floor(Math.random() * possibleRows.length)]

      // Choose passage column (odd col)
      const possibleCols = []
      for (let c = cStart; c <= cEnd; c++) {
        if (c % 2 !== 0) possibleCols.push(c)
      }
      const passageCol = possibleCols[Math.floor(Math.random() * possibleCols.length)]

      for (let c = cStart; c <= cEnd; c++) {
        if (c !== passageCol) {
          if (!newGrid[splitRow][c].isStart && !newGrid[splitRow][c].isGoal) {
            newGrid[splitRow][c].isObstacle = true
          }
        }
      }

      divide(rStart, splitRow - 1, cStart, cEnd)
      divide(splitRow + 1, rEnd, cStart, cEnd)
    } else {
      // Choose vertical split line (even col)
      const possibleCols = []
      for (let c = cStart + 1; c < cEnd; c++) {
        if (c % 2 === 0) possibleCols.push(c)
      }
      if (possibleCols.length === 0) return
      const splitCol = possibleCols[Math.floor(Math.random() * possibleCols.length)]

      // Choose passage row (odd row)
      const possibleRows = []
      for (let r = rStart; r <= rEnd; r++) {
        if (r % 2 !== 0) possibleRows.push(r)
      }
      const passageRow = possibleRows[Math.floor(Math.random() * possibleRows.length)]

      for (let r = rStart; r <= rEnd; r++) {
        if (r !== passageRow) {
          if (!newGrid[r][splitCol].isStart && !newGrid[r][splitCol].isGoal) {
            newGrid[r][splitCol].isObstacle = true
          }
        }
      }

      divide(rStart, rEnd, cStart, splitCol - 1)
      divide(rStart, rEnd, splitCol + 1, cEnd)
    }
  }

  divide(1, rows - 2, 1, cols - 2)
  return newGrid
}
