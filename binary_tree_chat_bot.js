class Tree {
    constructor(question, recommendation = null) {
      this.question = question;
      this.yes = null;
      this.no = null;
      this.recommendation = recommendation;
    }

    // when we know the parent node
    insertChild(type, question, recommendation = null) {
        console.log(this);
        const tree= new Tree(question, recommendation);
        type ? this.yes = tree : this.no =tree;
        return tree;
    }
    removeChild(value) {
        
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
        
    }
  
    remove(value) {

    }
  
    reorder(node1, node2) {
    }
  }
  

  const chatBot = new Tree("do you like cooking");
  const haveMilk = chatBot.insertChild(true, "Do you have milk?");
  const notLikeCook = chatBot.insertChild(false, "Have resturant nearby?");
  const haveResturant = notLikeCook.insertChild(true, null, "order food");
  
  console.log(JSON.stringify(chatBot));

