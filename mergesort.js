function split(wholeArray) {

  let half = Math.floor(wholeArray.length / 2);

  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge([arrA= [], arrB= []]) {
  let result = [];
  let i = 0;
  let j = 0;
  console.log('1',arrA, '2',arrB);
  let arr1 = arrA;
  let arr2 = arrB;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }else {
      result.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while(j <arr2.length) {
    result.push(arr2[j]);
    j++
  }
  return result;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  return merge(split(arr));
}
