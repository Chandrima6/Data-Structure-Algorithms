//instead of left and right as seperate properties of the binary tree
// we are representing them in an array children
const son = {
    name: "lucky",
    children:[{
        "name": "kathy",
        children: []
    }, {
        "name": "gross",
        children: []
    }]
}
const daughter = {
    name: "misha",
    children: []
}
const mother = {
    name: "happy",
    children: [son, daughter]
}

console.log('traverse', traverse(mother));

//preorder tree traversal
// printing only leaf nodes 
/*
{ name: 'kathy', children: [] }
{ name: 'gross', children: [] }
{ name: 'misha', children: [] }
*/
function traverse(tree) {
    
    if (tree.children.length) {
        tree.children.forEach(element => {
            traverse(element);
        });
    } else {
        console.log(tree);
    }
}