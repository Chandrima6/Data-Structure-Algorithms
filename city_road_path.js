
// cities and roads in a tree with only one road between 2 cities

class Graph {
    constructor() {
      this.nodes = [];
      this.adjList = {};
      this.visited = {};
    }
  
    addNode(node) {
        // this.nodes.push(node);
        this.adjList[node] = [];
    }
  
    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    depthFirstTraversal(startingNode, end, func = console.log) {
        if (startingNode) {
            startingNode = startingNode.toString();
            end = end.toString();
            this.nodes.push(startingNode);
            this.visited[startingNode] = true;
            if (startingNode !== end) {
                if (this.adjList[startingNode].length) {
                    this.adjList[startingNode].forEach(element => {
                        if(this.nodes.indexOf(element.toString()) === -1) this.depthFirstTraversal(element, func);
                    });
                } else {
                    this.nodes.pop();
                }
            } 
            return this.visited;
        }
    }
    

}




function createGraph(T) {
    const graph = new Graph();
    let root;
    T.forEach((item, index) => {
        if(!graph.adjList[item]) graph.addNode(item);
        if(!graph.adjList[index]) graph.addNode(index);
        if(item!==index) graph.addEdge(item, index);
        else root = item;
    });
    for(let item in graph) {
        console.log(graph.depthFirstTraversal(root, item));
    }
    return {graph, root};
}

function solution(T) {
    const graphOutput = createGraph(T);
    // console.log(graphOutput);
    let graph = graphOutput.graph.adjList;
    let root = graphOutput.root;
    // console.log(graph);
    // console.log(root);
}

console.log(solution([9,1,4,9,0,4,8,9,0,1]));