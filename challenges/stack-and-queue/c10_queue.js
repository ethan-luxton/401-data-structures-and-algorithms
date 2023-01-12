class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.head = null;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.back === null) {
            this.back = newNode;
            this.front = newNode;
            this.head = newNode;
        } 
        else {
            this.back.next = newNode;
            this.back = newNode;
        }

    }

    dequeue() {
        if (this.front === null) {
            throw new Error("Queue is Empty");
        }
        let removedNode = this.front;
        this.front = removedNode.next;
        this.head = this.front;
        if (this.front === null) {
            this.back = null;
        }
        return removedNode.value;
    }

    peek() {
        if (this.front === null) {
            throw new Error("Queue is Empty");
        }
        return this.front.value;
    }

    is_empty() {
        return this.front === null;
    }

    toString() {
        let str = ""
        let current = this.head;
        while (current != null) {
          str += `{ ${current.value } } -> `;
      
          current = current.next;
        }
      
    str += "NULL";
    return str;
    }

}

module.exports = Queue;