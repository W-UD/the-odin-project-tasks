function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  //Check if the next move is inside the 8 x 8 squares.
  const isInThe8x8Squares = (x, y) => {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  };

  // Queue for looping available moves
  let queue = [
    {
      position: start,
      path: [start],
    },
  ];

  // Set for storing already visited position
  let visited = new Set([start.toString()]);

  // Loop through the queue and make each item get their potential path
  while (queue.length > 0) {
    let { position, path } = queue.shift();
    let [x, y] = position;

    // Check if the x and y from `position' is the same as index 0 and 1 from 'end' parameter.
    if (x === end[0] && y === end[1]) {
      console.log(path);
      return path;
    }

    // Loop throug each moves from each position
    for (let [dirX, dirY] of moves) {
      let nextX = x + dirX;
      let nextY = y + dirY;

      if (
        isInThe8x8Squares(nextX, nextY) &&
        !visited.has(`${nextX},${nextY}`)
      ) {
        visited.add(`${nextX},${nextY}`);
        queue.push({
          position: [nextX, nextY],
          path: [...path, [nextX, nextY]],
        });
      }
    }
  }
}

// Test
const path = knightMoves([0, 0], [3, 3]);
path.forEach((post) => console.log(post));

// The Odin Testing
knightMoves([0, 0], [3, 3]); // may return [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]].
knightMoves([3, 3], [0, 0]); // may return [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]].
knightMoves([0, 0], [7, 7]); // may return [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]].
