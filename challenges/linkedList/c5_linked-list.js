'use stict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
    };

    insert(value) {
        if (this.head === null) {
            let newNode = new Node(value);
            this.head = newNode;
        } else {
            let leash = new Node(value);
            leash.next = this.head;
            this.head = leash;
        }
    }
    includes(value) {
        // if (!this.head) return false;
        let current = this.head;
        while (current !== null) {
            if (value === current.value) return true;
            current = current.next;
        }
        return false;
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
};

module.exports = LinkedList;