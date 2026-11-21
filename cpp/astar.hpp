#ifndef ASTAR_HPP
#define ASTAR_HPP

#include <vector>
#include <queue>
#include <cmath>
#include <algorithm>
#include <unordered_map>

struct Point {
    int row;
    int col;

    bool operator==(const Point& other) const {
        return row == other.row && col == other.col;
    }
};

struct PointHash {
    std::size_t operator()(const Point& p) const {
        return std::hash<int>()(p.row) ^ (std::hash<int>()(p.col) << 1);
    }
};

struct Node {
    Point point;
    int gScore;
    int fScore;

    bool operator>(const Node& other) const {
        return fScore > other.fScore;
    }
};

inline int manhattanDistance(const Point& a, const Point& b) {
    return std::abs(a.row - b.row) + std::abs(a.col - b.col);
}

inline std::vector<Point> aStarSearch(
    const std::vector<std::vector<int>>& grid,
    const Point& start,
    const Point& goal
) {
    int rows = static_cast<int>(grid.size());
    int cols = static_cast<int>(grid[0].size());

    std::priority_queue<Node, std::vector<Node>, std::greater<Node>> openSet;
    std::unordered_map<Point, Point, PointHash> parentMap;
    std::vector<std::vector<int>> gScore(rows, std::vector<int>(cols, 1e9));

    gScore[start.row][start.col] = 0;
    openSet.push({start, 0, manhattanDistance(start, goal)});

    const int dr[4] = {-1, 0, 1, 0};
    const int dc[4] = {0, 1, 0, -1};

    bool reached = false;

    while (!openSet.empty()) {
        Node current = openSet.top();
        openSet.pop();

        if (current.point == goal) {
            reached = true;
            break;
        }

        for (int i = 0; i < 4; ++i) {
            int nRow = current.point.row + dr[i];
            int nCol = current.point.col + dc[i];

            if (nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols) {
                if (grid[nRow][nCol] == 1) continue; // Obstacle

                int tentativeG = gScore[current.point.row][current.point.col] + 1;
                if (tentativeG < gScore[nRow][nCol]) {
                    gScore[nRow][nCol] = tentativeG;
                    Point neighbor{nRow, nCol};
                    parentMap[neighbor] = current.point;
                    int f = tentativeG + manhattanDistance(neighbor, goal);
                    openSet.push({neighbor, tentativeG, f});
                }
            }
        }
    }

    std::vector<Point> path;
    if (reached) {
        Point curr = goal;
        while (!(curr == start)) {
            path.push_back(curr);
            curr = parentMap[curr];
        }
        path.push_back(start);
        std::reverse(path.begin(), path.end());
    }

    return path;
}

#endif // ASTAR_HPP
