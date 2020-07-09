class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
}

class Graph {
    constructor() {
      this.nodes = [];
      this.adjList = {};
      this.visited = {};
    }
  
    addNode(node) {
        this.adjList[node.value] = node;
    }
  
    addEdge(node1, node2) {
        if(this.adjList[node1.value] && this.adjList[node2.value]) {
            node1.edges.push(node2.value);
            node2.edges.push(node1.value);
        }
    }
  
    removeNode(node) {
        if(this.adjList[node.value].edges.length) {
            this.adjList[node.value].edges.map((value, index) => {
                console.log(value);
                if(this.adjList[value].edges.length) this.adjList[value].edges = this.adjList[value].edges.filter(value => value !== node.value);
            });
            delete this.adjList[node];
            return true;
        } else return false;
        
    }
  
    removeEdge(node1, node2) {
        this.adjList[node1.value].edges = this.adjList[node1.value].edges.filter(item => item !== node2.value);
        this.adjList[node2.value].edges = this.adjList[node2.value].edges.filter(item => item !== node1.value);
    }
  
    depthFirstTraversal(startingNode, func = console.log) {
        if (startingNode) {
            this.nodes.push(startingNode.value);
            this.visited[startingNode.value] = true;
            if (this.nodes.length > 0) {
                if (this.adjList[startingNode.value].edges.length) {
                    this.adjList[startingNode.value].edges.forEach(element => {
                        if(this.nodes.indexOf(element) === -1) this.depthFirstTraversal(this.adjList[element], func);
                    });
                } else {
                    this.nodes.pop();
                }
            } 
            return this.visited;
        }
    }
    
    // since recursive solution so space complexity is more but time complexity is linear as we are shifting an array 
    // so better to use linked list to make constant time
    breadthFirstTraversal(startingNode, func = console.log) {
        if(startingNode) {
            if(!this.visited[startingNode.value] && (this.nodes.indexOf(startingNode.value) === -1)) this.nodes.push(startingNode.value);
            if(this.adjList[startingNode.value].edges.length) {
                this.adjList[startingNode.value].edges.forEach(element => {
                    if(!this.visited[element]) {
                        this.nodes.push(element);
                    }
                });
            }
            this.nodes.shift();
            console.log(this.nodes);
            this.visited[startingNode.value] = true;
            if(this.nodes.length) this.breadthFirstTraversal(this.adjList[this.nodes[0]], func);
            return this.visited;
            
        }
    }
}

const myGraph = new Graph();
const node1 = new Node("1");
const node2 = new Node("2");
const node3 = new Node("3");
const node4 = new Node("4");
const node5 = new Node("5");
const node6 = new Node("6");
const node7 = new Node("7");
const node8 = new Node("8");
const node9 = new Node("9");
const node10 = new Node("10");
const node11 = new Node("11");


// myGraph.addNode(node1);
// myGraph.addNode(node4);
// myGraph.addNode(node7);
// myGraph.addNode(node8);
// myGraph.addNode(node3);
// myGraph.addNode(node2);
// myGraph.addNode(node5);
// myGraph.addNode(node6);
// // console.log(JSON.stringify(myGraph));
// myGraph.addEdge(node1, node2);
// myGraph.addEdge(node3, node6);
// myGraph.addEdge(node2, node5);
// myGraph.addEdge(node2, node4);
// myGraph.addEdge(node3, node7);
// myGraph.addEdge(node4, node8);
// myGraph.addEdge(node1, node3);
myGraph.addNode(node1);
myGraph.addNode(node4);
myGraph.addNode(node7);
myGraph.addNode(node9);
myGraph.addNode(node10);
myGraph.addNode(node2);
myGraph.addNode(node5);
myGraph.addNode(node11);
myGraph.addEdge(node1, node7);
myGraph.addEdge(node7, node11);
myGraph.addEdge(node4, node5);
myGraph.addEdge(node2, node11);
myGraph.addEdge(node7, node4);
myGraph.addEdge(node7, node5);
myGraph.addEdge(node1, node9);
myGraph.addEdge(node11, node10);
// myGraph.removeNode(node11);
// myGraph.removeEdge(node7, node5);
console.log(JSON.stringify(myGraph));
// console.log(myGraph.depthFirstTraversal(node1));
console.log('visisted nodes end', myGraph.breadthFirstTraversal(node1));
  
  