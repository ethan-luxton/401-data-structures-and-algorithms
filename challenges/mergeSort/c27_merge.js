function merge(leftArr, rightArr) {
    const resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        resultArr.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        resultArr.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < leftArr.length) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < rightArr.length) {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  
    return resultArr;
}

module.exports = merge