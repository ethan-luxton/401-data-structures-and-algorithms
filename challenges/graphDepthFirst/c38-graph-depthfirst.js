function depthFirstTraversal(graph, startingNode) {
    let traversal = [];
    let visited = new Set();
    let stack = [startingNode];

    while (stack.length > 0) {
        const current = stack.pop();

        if (!visited.has(current)) {
            traversal.push(current);
            visited.add(current);

            const neighbors = graph.getNeighbors(current)
                .filter(neighbor => !visited.has(neighbor.node))
                .map(neighbor => neighbor.node);

            stack.push(...neighbors);
        }
    }
    return traversal;
}

module.exports = { depthFirstTraversal };