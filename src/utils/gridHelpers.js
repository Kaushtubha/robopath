/**
 * Default dimensions for the square grid (15x15).
 */
export const DEFAULT_GRID_SIZE = 15

/**
 * Creates a 2D grid matrix of size rows x cols.
 * Structure: Array of rows, where each row is an array of cell objects:
 * { row: number, col: number, isObstacle: boolean }
 *
 * @param {number} rows - Number of rows
 * @param {number} cols - Number of columns
 * @returns {Array<Array<{row: number, col: number, isObstacle: boolean}>>} 2D array of cell objects
 */
export function createGrid(rows, cols) {
  const grid = []
  for (let r = 0; r < rows; r++) {
    const currentRow = []
    for (let c = 0; c < cols; c++) {
      currentRow.push({
        row: r,
        col: c,
        isObstacle: false,
      })
    }
    grid.push(currentRow)
  }
  return grid
}
