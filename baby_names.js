function babyNames(names, synonyms) {
    const namesListGraph = {};
    for(let item in synonyms) {
        console.log(namesListGraph);
        console.log('item', item);
        console.log('item value', synonyms[item]);
        if(!namesListGraph[item]) namesListGraph[item] = [synonyms[item]];
        else namesListGraph[item].push(synonyms[item]);
        if(!namesListGraph[synonyms[item]]) namesListGraph[synonyms[item]] = [item];
        else namesListGraph[synonyms[item]].push(item);
    }
    console.log(namesListGraph);

    // function depthFirstTraversal(startingNode, func = console.log) {
    //     console.log('SN', startingNode);
    //     if (startingNode) {
    //         startingNode = startingNode.toString();
    //         nodes.push(startingNode);
    //         visited[startingNode] = names[startingNode];
    //         if (nodes.length > 0) {
    //             if (synonyms[startingNode]) {
    //                 console.log('SN synonym', synonyms[startingNode]);
    //                 if(nodes.indexOf(synonyms[startingNode].toString()) === -1) depthFirstTraversal(synonyms[startingNode], func);
    //             } else {
    //                 nodes.pop();
    //             }
    //         } 
    //         return visited;
    //     }
    // }
    // return depthFirstTraversal(root)
    
}

const namesList = {
    "John": 15,
    "Jon": 12,
    "Jo": 13,
    "Chris": 13,
    "Kris": 4,
    "Christopher": 19
};

const synonyms = {
    "Jon": "John",
    "John": "Johnny",
    "Jo": "Johnny",
    "Chris": "Kris",
    "Chris": "Christopher"
}

console.log(babyNames(namesList, synonyms));