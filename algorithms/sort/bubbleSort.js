function bubbleSort(arr) {
    let i = -1
    while(++i < arr.length - 1) {
      let j = -1
      while(++j < arr.length - i - 1) {
        if(arr[j] > arr[j + 1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
      }
    }
    return arr
  }
