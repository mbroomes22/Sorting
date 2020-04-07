function split(wholeArray) {
//    let firstHalf = [];
//    let secondHalf = [];

    // for (let i=0; i< wholeArray.length/2;i++){
    //     firstHalf.push(i);
    // }

    // for (let i = wholeArray.length/2; i < wholeArray.length; i++) {
    //     secondHalf.push(i);
    // }

    let half = Math.floor(wholeArray.length/2);
    
    let firstHalf = wholeArray.slice(0, half);
    let secondHalf = wholeArray.slice(half);
  
    return [firstHalf, secondHalf];
  }