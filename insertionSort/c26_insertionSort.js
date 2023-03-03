const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let x = i - 1
      let y = arr[i]
      
      while (x >= 0 && y < arr[x]) {
        arr[x + 1] = arr[x]
        x = x - 1
      }
      arr[x + 1] = y
    }
    return arr
}

module.exports = insertionSort