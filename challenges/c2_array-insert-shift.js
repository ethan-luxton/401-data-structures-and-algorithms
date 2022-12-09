const insertShiftArray = (arr, value) => {
    let len = arr.length;
    let mid = len / 2;
    for (let i = len - 1; len > mid; i--) {
      arr[len] = arr[i];
      len--;
    }
    arr[len] = value;
    return arr
};

module.exports = insertShiftArray;