class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (this.top === null) {
            throw new Error("Stack is Empty");
        }
        let removedNode = this.top;
        this.top = removedNode.next;
        return removedNode.value;
    }

    peek() {
        if (this.top === null) {
            throw new Error("Stack is Empty");
        }
        return this.top.value;
    }

    is_empty() {
        return this.top === null;
    }

    toString() {
        let str = ""
        let current = this.top;
        while (current != null) {
          str += `{ ${current.value } } -> `;
      
          current = current.next;
        }
      
    str += "NULL";
    return str;
    }
}


module.exports = Stack