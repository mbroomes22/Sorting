
const bubbleSort = (array) => {
   if (array.length <= 1) return array;

   for (let i = 0; i<array.length; i++) {
       for (let j = 0; j < array.length; j++) {
           if (array[j] > array[i]) {
               let biggerNumber =  array[j]
               array[j] = array[i]
               array[i] = biggerNumber
           }
       }
   }

   return array 
}