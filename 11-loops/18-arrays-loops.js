const nums = [-1, 1, 3, 0, 2, 6, 8];  

// Please find the first even number from the array -> 0

let firstEven;

for(const num of nums) {
  if(num % 2 === 0) {
    firstEven = num;
    break;
  }
}

console.log(firstEven);

// for(let i = 0; i < nums.length; i++) { 
//   if(nums[i] % 2 === 0) {
//     firstEven = nums[i];
//     break;
//   }
// }