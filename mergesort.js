function split(wholeArray) {
  //    let firstHalf = [];
  //    let secondHalf = [];

  // for (let i=0; i< wholeArray.length/2;i++){
  //     firstHalf.push(i);
  // }

  // for (let i = wholeArray.length/2; i < wholeArray.length; i++) {
  //     secondHalf.push(i);
  // }

  let half = Math.floor(wholeArray.length / 2);

  let firstHalf = wholeArray.slice(0, half);
  let secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  if (!arr1.length && !arr2.length) return [];
  if ((arr1.length && !arr2.length) || (!arr1.length && arr2.length) || arr1.length === 1 && arr2.length === 1)
    return [...arr1, ...arr2];
  // if (arr1.length > 1) split(arr1);
  // if (arr2.length > 1) split(arr2);
  for(let i = 0; i< arr1.length ; i++) {
    merge(split(arr1))
  }
  for(let i = 0; i< arr2.length ; i++) {
    merge(split(arr2))
  }
}
