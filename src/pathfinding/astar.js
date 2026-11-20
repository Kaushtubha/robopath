/**
 * A* (A-Star) Pathfinding Algorithm.
 * Uses Manhattan distance heuristic for optimal 4-directional pathfinding.
 *
 * @param {Array<Array<Object>>} grid - The 2D grid of cell objects
 * @param {{row: number, col: number}} startPos - Start coordinates
 * @param {{row: number, col: number}} goalPos - Goal coordinates
 * @returns {{visitedNodesInOrder: Array<{row: number, col: number}>, shortestPath: Array<{row: number, col: number}>, found: boolean}}
 */
export function astar(grid, startPos, goalPos) {
  const rows = grid.length
  const cols = grid[0].length
  const visitedNodesInOrder = []

  const heuristic = (r, c) => Math.abs(r - goalPos.row) + Math.abs(c - goalPos.col)

  const gScore = Array.from({ length: rows }, () => Array(cols).fill(Infinity))
  const fScore = Array.from({ length: rows }, () => Array(cols).fill(Infinity))
  const parent = Array.from({ length: rows }, () => Array(cols).fill(null))
  const closedSet = Array.from({ length: rows }, () => Array(cols).fill(false))

  // Open set array
  const openSet = [{ row: startPos.row, col: startPos.col }]
  gScore[startPos.row][startPos.col] = 0
  fScore[startPos.row][startPos.col] = heuristic(startPos.row, startPos.col)

  const directions = [
    [-1, 0], // Up
    [0, 1],  // Right
    [1, 0],  // Down
    [0, -1], // Left
  ]

  let found = false

  while (openSet.length > 0) {
    // Find node with lowest fScore in openSet
    let lowestIdx = 0
    for (let i = 1; i < openSet.length; i++) {
      const cur = openSet[i]
      const best = openSet[lowestIdx]
      if (
        fScore[cur.row][cur.col] < fScore[best.row][best.col] ||
        (fScore[cur.row][cur.col] === fScore[best.row][best.col] &&
          heuristic(cur.row, cur.col) < heuristic(best.row, best.col))
      ) {
        lowestIdx = i
      }
    }

    const current = openSet.splice(lowestIdx, 1)[0]
    closedSet[current.row][current.col] = true
    visitedNodesInOrder.push(current)

    if (current.row === goalPos.row && current.col === goalPos.col) {
      found = true
      break
    }

    for (const [dr, dc] of directions) {
      const nRow = current.row + dr
      const nCol = current.col + dc

      if (nRow < 0 || nRow >= rows || nCol < 0 || nCol >= cols) continue
      if (closedSet[nRow][nCol] || grid[nRow][nCol].isObstacle) continue

      const tentativeG = gScore[current.row][current.col] + 1

      if (tentativeG < gScore[nRow][nCol]) {
        parent[nRow][nCol] = current
        gScore[nRow][nCol] = tentativeG
        fScore[nRow][nCol] = tentativeG + heuristic(nRow, nCol)

        const inOpen = openSet.some((n) => n.row === nRow && n.col === nCol)
        if (!inOpen) {
          openSet.push({ row: nRow, col: nCol })
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
