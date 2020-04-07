function bubbleSort(array) {
    if (array.length<2) {
        return array;
    }
    else {
        let count=1;
        while(count !==0){
            count = 0;
            for (let i = 0; i<array.length; i++) {
                if (array[i]>array[i+1]) {
                    let smallArr = swap(array[i], array[i+1]);
                    count++;
                    array[i] = smallArr[0];
                    array[i+1] = smallArr[1];
                }
            }
        }
        return array;
    }

  }

function swap(num1, num2) {
    return [num2, num1]
}