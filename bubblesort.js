const bubbleSort = (array) => {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        swap(arr[j], arr[i]);
      }
    }

    return array;
  }
};

const swap = (val1, val2) => {
  let biggerNumber = val2;
  val2 = val1;
  val1 = biggerNumber;
};
