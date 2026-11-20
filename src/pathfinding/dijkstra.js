/**
 * Dijkstra's Shortest Path Algorithm for 2D Grid.
 * Explores nodes uniformly by path distance from the start node.
 *
 * @param {Array<Array<Object>>} grid - The 2D grid of cell objects
 * @param {{row: number, col: number}} startPos - Start coordinates
 * @param {{row: number, col: number}} goalPos - Goal coordinates
 * @returns {{visitedNodesInOrder: Array<{row: number, col: number}>, shortestPath: Array<{row: number, col: number}>, found: boolean}}
 */
export function dijkstra(grid, startPos, goalPos) {
  const rows = grid.length
  const cols = grid[0].length
  const visitedNodesInOrder = []

  const distances = Array.from({ length: rows }, () => Array(cols).fill(Infinity))
  const parent = Array.from({ length: rows }, () => Array(cols).fill(null))
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))

  distances[startPos.row][startPos.col] = 0

  const unvisitedNodes = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!grid[r][c].isObstacle) {
        unvisitedNodes.push({ row: r, col: c })
      }
    }
  }

  const directions = [
    [-1, 0], // Up
    [0, 1],  // Right
    [1, 0],  // Down
    [0, -1], // Left
  ]

  let found = false

  while (unvisitedNodes.length > 0) {
    // Sort unvisited nodes by distance
    unvisitedNodes.sort((a, b) => distances[a.row][a.col] - distances[b.row][b.col])
    const closest = unvisitedNodes.shift()

    // If smallest distance is infinity, remaining nodes are unreachable
    if (distances[closest.row][closest.col] === Infinity) break

    visited[closest.row][closest.col] = true
    visitedNodesInOrder.push(closest)

    if (closest.row === goalPos.row && closest.col === goalPos.col) {
      found = true
      break
    }

    for (const [dr, dc] of directions) {
      const nRow = closest.row + dr
      const nCol = closest.col + dc

      if (nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols) {
        if (!visited[nRow][nCol] && !grid[nRow][nCol].isObstacle) {
          const alt = distances[closest.row][closest.col] + 1
          if (alt < distances[nRow][nCol]) {
            distances[nRow][nCol] = alt
            parent[nRow][nCol] = closest
          }
        }
      }
    }
  }

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
