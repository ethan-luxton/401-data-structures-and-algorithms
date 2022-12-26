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

    newNode(value) {
        let newNode = new Node(value);
        return newNode;
    }

    insert(value) {
        if (this.head === null) {
            
            this.head = this.newNode(value);
        } else {
            let leash = this.newNode(value);
            leash.next = this.head;
            this.head = leash;
        }
    }

    append(value) {
        
        if (this.head === null) {
            
            this.head = this.newNode(value);
            return;
        };

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        };
        current.next = this.newNode(value);
    }

    insertBefore(value, tarVal) {
        let newNode = this.newNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        };

        if (this.head.value === tarVal) {
            newNode.next = this.head;
            this.head = newNode
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === tarVal) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        this.append(value);
    }

    insertAfter(value, tarVal) {
        let newNode = this.newNode(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        };

        let current = this.head;
        while (current.next !== null) {
            if (current.value === tarVal) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
        this.append(value);
    }

    includes(value) {
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