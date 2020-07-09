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
  
    removeNode(node) {
        if(this.adjList[node].length) {
            this.adjList[node].map((value, index) => {
                console.log(value);
                if(this.adjList[value].length) this.adjList[value] = this.adjList[value].filter(value => value !== node);
            });
            delete this.adjList[node];
            return true;
        } else return false;
        
    }
  
    removeEdge(node1, node2) {
        this.adjList[node1] = this.adjList[node1].filter(item => item !== node2);
        this.adjList[node2] = this.adjList[node2].filter(item => item !== node1);
    }
    
    //depth first with recursion
    depthFirstTraversal(startingNode, func = console.log) {
        if (startingNode) {
            startingNode = startingNode.toString();
            this.nodes.push(startingNode);
            this.visited[startingNode] = true;
            if (this.nodes.length > 0) {
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


    // depth first with loop
    // depthFirstTraversal(startingNode, func = console.log) {
    //     if (startingNode === undefined) {
    //       return 'No starting node was provided';
    //     }
    //     let nodeStack = [];
    //     let visitedArr = [];
    
    //     nodeStack.push(startingNode);
    //     visitedArr[startingNode] = true;
    
    //     while (nodeStack.length) {
    //       const current = nodeStack.pop();
    //       const neighbors = this.adjList[current];
    //       func(current);
    
    //       neighbors.forEach(neighbor => {
    //         if (!visitedArr[neighbor]) {
    //           nodeStack.push(neighbor);
    //           visitedArr[neighbor] = true;
    //         }
    //       });
    //     }
    // }
  
    breadthFirstTraversal(startingNode, func = console.log) {
    }
}

const myGraph = new Graph();

myGraph.addNode(1);
myGraph.addNode(4);
myGraph.addNode(7);
myGraph.addNode(9);
myGraph.addNode(10);
myGraph.addNode(2);
myGraph.addNode(5);
myGraph.addNode(11);
myGraph.addEdge(1, 7);
myGraph.addEdge(7, 11);
myGraph.addEdge(4, 5);
myGraph.addEdge(2, 11);
myGraph.addEdge(7, 4);
myGraph.addEdge(7, 5);
myGraph.addEdge(1, 9);
myGraph.addEdge(11, 10);
// myGraph.removeNode(11);
// myGraph.removeEdge(7, 5);
console.log(myGraph);
// console.log(myGraph.depthFirstTraversal(1));

  
  