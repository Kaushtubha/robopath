/**
 * Breadth-First Search (BFS) Algorithm for 2D Grid.
 * Guarantees the shortest path on unweighted grids.
 *
 * @param {Array<Array<Object>>} grid - The 2D grid of cell objects
 * @param {{row: number, col: number}} startPos - Start coordinates
 * @param {{row: number, col: number}} goalPos - Goal coordinates
 * @returns {{visitedNodesInOrder: Array<{row: number, col: number}>, shortestPath: Array<{row: number, col: number}>, found: boolean}}
 */
export function bfs(grid, startPos, goalPos) {
  const rows = grid.length
  const cols = grid[0].length
  const visitedNodesInOrder = []
  const queue = []
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
  const parent = Array.from({ length: rows }, () => Array(cols).fill(null))

  queue.push({ row: startPos.row, col: startPos.col })
  visited[startPos.row][startPos.col] = true

  const directions = [
    [-1, 0], // Up
    [0, 1],  // Right
    [1, 0],  // Down
    [0, -1], // Left
  ]

  let found = false

  while (queue.length > 0) {
    const current = queue.shift()
    visitedNodesInOrder.push(current)

    if (current.row === goalPos.row && current.col === goalPos.col) {
      found = true
      break
    }

    for (const [dr, dc] of directions) {
      const nRow = current.row + dr
      const nCol = current.col + dc

      if (nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols) {
        if (!visited[nRow][nCol] && !grid[nRow][nCol].isObstacle) {
          visited[nRow][nCol] = true
          parent[nRow][nCol] = current
          queue.push({ row: nRow, col: nCol })
        }
      }
    }
  }

  // Reconstruct shortest path from goal back to start
  const shortestPath = []
  if (found) {
    let curr = { row: goalPos.row, col: goalPos.col }
    while (curr) {
      shortestPath.unshift(curr)
      curr = parent[curr.row][curr.col]
    }
  }

  return { visitedNodesInOrder, shortestPath, found }
}
