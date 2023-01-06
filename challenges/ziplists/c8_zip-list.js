'use strict';

const LinkedList = require('../linkedListKth/c7_linked-list-kth');

function zipLists(list1, list2) {
    let list3 = new LinkedList()
    
    let currentList1 = list1.head
    let currentList2 = list2.head
    
    while (currentList1 && currentList2 !== null) {

        if (currentList2) {
            list3.insert(currentList2.value)
            currentList2 = currentList2.next;
        }
        if (currentList1) {
            list3.insert(currentList1.value)
            currentList1 = currentList1.next;
        }
      
    }
    return list3.toString(); 
    
    
}

module.exports = { zipLists }