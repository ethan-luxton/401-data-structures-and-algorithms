const merge = require('./c27_merge')

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const leftArr = [];
    const rightArr = [];
  
    for (let i = 0; i < mid; i++) {
      leftArr.push(arr[i]);
    }
  
    for (let i = mid; i < arr.length; i++) {
      rightArr.push(arr[i]);
    }
  
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);
  
    return merge(sortedLeftArr, sortedRightArr);
}
  
module.exports = mergeSort
  