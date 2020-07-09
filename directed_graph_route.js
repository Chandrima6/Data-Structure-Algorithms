
// breadth first search O(n)(not sure about complexity)
// this breadth first search should be refactored using the algorithm of a queue data structure and a hashmap(visited)
// like implemented in graph_node_obj.js
function directedGraphRoute(graph, root, elem2) {
    if(graph[root].value === graph[elem2].value) return true;
    visited = {};
    function helper(root, elem2) {
        const children = graph[root].edges;
        for(let element=0; element<children.length; element++) {
            if (graph[elem2] && (graph[children[element]].value.toString() === graph[elem2].value.toString())) return true;
        }
        graph[root].edges.forEach(element => {
            if(!visited[element]) {
                visited[element] = true;
                root = element;
                return helper(root,elem2)
            } 
        });
        return false;
    }
    return helper(root, elem2);
}
const graph = {
    "7": {
        value: "7",
        edges: []
    },
    "3": {
        value: "3",
        edges: ["4","5"]
    },
    "4": {
        value: "4",
        edges: ["6","7"]
    },
    "5": {
        value: "5",
        edges: []
    },
    "6": {
        value: "6",
        edges: []
    }
}

console.log(directedGraphRoute(graph, "4", "5"));



