/**
 * Default dimensions for the square grid (15x15).
 */
export const DEFAULT_GRID_SIZE = 15

/**
 * Default coordinates for Start and Goal positions.
 */
export const DEFAULT_START_POS = { row: 3, col: 3 }
export const DEFAULT_GOAL_POS = { row: 11, col: 11 }

/**
 * Creates a 2D grid matrix of size rows x cols with start and goal positions initialized.
 * Structure: Array of rows, where each row is an array of cell objects:
 * { row: number, col: number, isStart: boolean, isGoal: boolean, isObstacle: boolean }
 *
 * @param {number} rows - Number of rows in the grid
 * @param {number} cols - Number of columns in the grid
 * @param {{row: number, col: number}} [startPos=DEFAULT_START_POS]
 * @param {{row: number, col: number}} [goalPos=DEFAULT_GOAL_POS]
 * @returns {Array<Array<{row: number, col: number, isStart: boolean, isGoal: boolean, isObstacle: boolean}>>}
 */
export function createGrid(
  rows = DEFAULT_GRID_SIZE,
  cols = DEFAULT_GRID_SIZE,
  startPos = DEFAULT_START_POS,
  goalPos = DEFAULT_GOAL_POS
) {
  const grid = []
  for (let r = 0; r < rows; r++) {
    const currentRow = []
    for (let c = 0; c < cols; c++) {
      const isStart = r === startPos.row && c === startPos.col
      const isGoal = r === goalPos.row && c === goalPos.col
      currentRow.push({
        row: r,
        col: c,
        isStart,
        isGoal,
        isObstacle: false,
      })
    }
    grid.push(currentRow)
  }
  return grid
}

/**
 * Toggles obstacle state for a cell at (row, col) without modifying start or goal cells.
 */
export function toggleObstacle(grid, row, col) {
  return grid.map((r, rIdx) => {
    if (rIdx !== row) return r
    return r.map((cell, cIdx) => {
      if (cIdx !== col) return cell
      if (cell.isStart || cell.isGoal) return cell
      return {
        ...cell,
        isObstacle: !cell.isObstacle,
      }
    })
  })
}

/**
 * Clears all obstacles from the grid while preserving start and goal locations.
 */
export function clearObstacles(grid) {
  return grid.map((r) =>
    r.map((cell) => ({
      ...cell,
      isObstacle: false,
    }))
  )
}

/**
 * Counts total obstacle cells in the grid.
 */
export function countObstacles(grid) {
  let count = 0
  for (const row of grid) {
    for (const cell of row) {
      if (cell.isObstacle) count++
    }
  }
  return count
}
