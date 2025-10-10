function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  let result = [];
  let leftCounter = 0;
  let rightCounter = 0;
  while ((leftCounter < left.length === 1) && (rightCounter < right.length === 1)) {
   if (left[leftCounter] < right[rightCounter]) {
     result.push(left[leftCounter++]);
   } else {
     resutl.push(right[rightCounter]);
   }
  }

  result.push(...left.slice(leftCounter));
  result.push(...right.slice(rightCounter));
  return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
