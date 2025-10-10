// Iteration Fibbonaci
function fibs(n) {
 const arr = [];

 for (let i = 0; i <= n; i++) {
   if (i === 0) {
     arr.push(0);
   } else if (i === 1) {
     arr.push(1);
   } else {
     arr.push(arr[i - 1] + arr[i - 2]);
   }
 } 
  return arr;
}

console.log(fibs(8));

// Recursive version of the above:
function fibRec(n) {
  const arr = [];
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  const now = fibRec(n - 1);

  const prevy = now[now.length - 1];
  const nexty = now[now.length - 2];
  const future = prevy + nexty;

  return [...now, future];
}

console.log(fibRec(9));
