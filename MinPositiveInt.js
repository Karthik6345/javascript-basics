Find the minimum positive integer.
input: [-1,-3]: result: 1
input: [6,4,1,2,1,3,2]: result:5

function solution(A) {
  // only positive values, sorted
  A = A.filter(x => x >= 1).sort((a, b) => a - b)

  let x = 1

  for(let i = 0; i < A.length; i++) {
      // if we find a smaller number no need to continue, cause the array is sorted
      console.log(x,"",A[i]);
      if(x < A[i]) {
          return x
      }
      x = A[i] + 1;
      console.log(x);
  }
  return x
}
