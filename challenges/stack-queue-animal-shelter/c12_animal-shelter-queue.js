class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class AnimalShelter {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(animal) {
        let newNode = new Node(animal)
        if (this.back === null) {
            this.back = newNode;
            this.front = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
    }

    dequeue(pref) {
        if (pref === "dog" || "cat") {
            let current = this.front;
            let prev = null;
            while (current) {
                if (current.value === pref) {
                    if (!prev) {
                        this.front = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    if (!current.next) {
                        this.back = prev;
                    }
                    return current.value;
                }
                prev = current;
                current = current.next;
            }
            return null;
        } else {
            return null;
        }
    }
        
    
    toString() {
        let str = ""
        let current = this.front;
        while (current != null) {
          str += `{ ${current.value } } -> `;
      
          current = current.next;
        }
      
    str += "NULL";
    return str;
    }
}

module.exports = AnimalShelter;