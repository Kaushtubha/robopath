#include <iostream>
#include <vector>
#include "astar.hpp"

int main() {
    // 15x15 grid test benchmark
    const int ROWS = 15;
    const int COLS = 15;
    std::vector<std::vector<int>> grid(ROWS, std::vector<int>(COLS, 0));

    // Sample obstacles
    grid[5][5] = 1;
    grid[5][6] = 1;
    grid[5][7] = 1;

    Point start{3, 3};
    Point goal{11, 11};

    std::vector<Point> path = aStarSearch(grid, start, goal);

    std::cout << "RoboPath C++ Pathfinding Core" << std::endl;
    std::cout << "Computed path length: " << path.size() << " steps." << std::endl;

    for (const auto& pt : path) {
        std::cout << "(" << pt.row << ", " << pt.col << ") -> ";
    }
    std::cout << "GOAL REACHED" << std::endl;

    return 0;
}
