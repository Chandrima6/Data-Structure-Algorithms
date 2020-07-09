function projectsBuildOrder(graph) {
    // detect independant projects
    if(graph) {
        const nodes = [];
        const tempGraph = graph;
        const mostdependantProjects = [];
        for(let item in tempGraph) {
            if(tempGraph[item].parentsOf.length === 0) {
                mostdependantProjects.push(tempGraph[item].project);
                delete tempGraph[item];
            } else nodes.push(tempGraph[item].project);
        }
        if(mostdependantProjects.length === 0) throw Error("No Build Order");
        const start = tempGraph[nodes[0]];
        const breadthFirstTraversal = (start, func = console.log) => {
            if(start) {
                if(!(start.project in mostdependantProjects) && (nodes.indexOf(start.project) === -1)) nodes.push(start.project);
                if(tempGraph[start.project].parentsOf.length) {
                    tempGraph[start.project].parentsOf.forEach(element => {
                        if(!mostdependantProjects[element]) {
                            nodes.push(element);
                        }
                    });
                }
                nodes.shift();
                mostdependantProjects.push(start.project);
                if(nodes.length) breadthFirstTraversal(tempGraph[nodes[0]], func);
                return mostdependantProjects.reverse();
                
            }
        }
        return breadthFirstTraversal(start, func = console.log)
    }
    
}

// projects and dependant on
const graph = {
    "c": {
        project: "c",
        parentsOf: []
    },
    "d": {
        project: "d",
        parentsOf: []
    },
    "a": {
        project: "a",
        parentsOf: ["d"]
    },
    "b": {
        project: "b",
        parentsOf: ["d"]
    },
    "e": {
        project: "e",
        parentsOf: []
    },
    "f": {
        project: "f",
        parentsOf: ["b", "a"]
    }
}

console.log(projectsBuildOrder(graph));