Find the minimm and maximum in an array

function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  let i = arr.length;
    
  while (i--) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }
  return { min, max, arr };
}
console.log(getMinMax([9,1,2,1,5]))
-------------------------------------------------------
function maxValue(arr) {
  let max = arr[0];

  for (let val of arr) {
    if (val > max) {
      max = val;
    }
  }
  return max;
}
console.log(maxValue([9,1,2,1,5]))
