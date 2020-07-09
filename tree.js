class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
    insertChild(value) {
        const tree= new Tree(value)
        this.children.push(tree);
        return tree;
    }
    removeChild(value) {
        let deletedItem = false;
        this.children = this.children.filter(item => {
            if(item.value === value) {
                deletedItem = item;
            }
            return item.value !== value;
        });
        return deletedItem.value;
    }
  
    // Uses a Depth-First Traversal
    static traverse(tree, func = console.log) {
    }
  
    contains(searchValue) {
    }
  
    static size(tree) {
    }
  
    static find(tree, value) {
    }
  
    insert(parentTree, value) {
        if(this.value === parentTree.value) {
            return parentTree.insertChild(value);
        } else {
            const parent = this.children.find(item => item.value === parentTree.value);
            return parent.insertChild(value);
        }
    }
  
    remove(value) {

    }
  
    reorder(node1, node2) {
    }
  }
  

  const myFamily = new Tree("food");
  
  console.log(JSON.stringify(myFamily));
  const myFamily1 = myFamily.insertChild("veg");
  const myFamily2 = myFamily.insertChild("non-veg");
  const myFamily3 = myFamily1.insertChild("fruits");
  const myFamily4 = myFamily.insert(myFamily2, "meat");
  myFamily4.insertChild("chicken");
  myFamily.insert(myFamily2, "fish");
  console.log(JSON.stringify(myFamily));
  console.log(myFamily2.removeChild("meat"));


  console.log(JSON.stringify(myFamily));

