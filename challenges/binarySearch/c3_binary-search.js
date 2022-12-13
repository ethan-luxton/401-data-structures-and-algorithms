const binarySearch = (arr, value, start, end) => {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > value) {
        return binarySearch(arr, value, start, mid - 1)
    } else if (arr[mid] < value){
        return binarySearch(arr, value, mid+1, end)
    } else if (arr[mid] === value) {
        return mid
    } else if (arr[mid] != value) {
        return -1
    }
}

module.exports = binarySearch;