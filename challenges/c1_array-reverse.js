

function reverseArray(arr) {
    let output = []
    for (let i = 0; i < arr.length; i++){
      const d = arr.length - i - 1;
      output[d] = arr[i];
    }
    return console.log(output);
}

