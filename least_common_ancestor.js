/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function differentSide(results, root, node1, node2) {
    const indexNode1 = results.indexOf(node1);
    const indexNode2 = results.indexOf(node2);
    const indexRoot = results.indexOf(root);
    
    if((indexRoot > indexNode1 && indexRoot < indexNode2) ||
       (indexRoot > indexNode2 && indexRoot < indexNode1)) return true;
    else {
        if(indexNode1 < indexRoot && indexNode2 < indexRoot) return 'left';
        return 'right';
    }
}
/**
 * have to improve performance
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root) {
        if(root.val === p || root.val === q) return root.val;
        // do in order traversal in root
        const results = [];
        const inOrderTraversal = (root) => {
            if(root.left !== null) inOrderTraversal(root.left);
            results.push(root.val);
            if(root.right !== null) inOrderTraversal(root.right);
        }
        inOrderTraversal(root);
        // check if both nodes are in same or different side of root of tree in array results
        const flag = differentSide(results, root.val, p, q);
        // console.log('sides', p, root.val, q, flag);
        if(flag===true) return root.val;
        else if(flag === 'left') {
            return lowestCommonAncestor(root.left, p, q);
        }
        else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }
};

// should try to implement without though root
function getMaxPathThroughRoot(root) {
    let results = [];
    let level = 1;
    const traversal = (root,level) => {
        console.log(root.val, level);
        results.push(level);
        if(root.left!== null) traversal(root.left, level+1);
        if(root.right!==null) traversal(root.right, level +1);
        return level; 
    }
    if(root.left)traversal(root.left, level);
    const leftResults = results.sort((a,b)=>b-a);
    results = [];
    level = 1;
    if(root.right)traversal(root.right, level);
    const rightResults = results.sort((a,b)=>b-a);
    
    if(leftResults.length && rightResults.length) console.log(leftResults[0] + rightResults[0]);
    else if(leftResults.length) console.log(leftResults[0]);
    else if(rightResults.length) console.log(rightResults[0]);
}


const tree = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
}

console.log('LCA 5 0', lowestCommonAncestor(tree, 5,0));
console.log('LCA 3 7', lowestCommonAncestor(tree, 3,7));
console.log('LCA 5 4', lowestCommonAncestor(tree, 5,4));
console.log('LCA 6 7', lowestCommonAncestor(tree, 6,7));
console.log('LCA 2 4', lowestCommonAncestor(tree, 2,4));

console.log(getMaxPathThroughRoot(tree));





