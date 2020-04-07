function bubbleSort(array) {
    if (array.length<2) {
        return array;
    }
    else {
        for (let i = 0; i<array.length; i++) {
            if (array[i]>array[i+1]) {
                swap(array[i], array[i+1]);
            }
        }
    }
  
  }

function swap(num1, num2) {
    return [num2, num1]
}