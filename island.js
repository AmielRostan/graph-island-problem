function getNeighbors(row, col, graph) {
  const neighbors = [];
  // Check top
  if(row - 1 >= 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Check bottom
  if(row + 1 < graph.length && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check left
  if(col - 1 >= 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check right
  if(col + 1 < graph[0].length && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add([row, col].toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while(stack.length > 0) {
    // Pop the first node
    const node = stack.pop();
    // DO THE THING (increment size by 1)
    size++;
    // Then push all the UNVISITED neighbors on top of the stack
    const neighbors = getNeighbors(node[0], node[1], graph);
    // and mark them as visited
    for(let i = 0; i < neighbors.length; i++) {
      if(!visited.has(neighbors[i].toString())) {
        visited.add(neighbors[i].toString());
        stack.push(neighbors[i]);
      }
    }
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  }
  // return size
return size;
}

module.exports = [getNeighbors, islandSize];
