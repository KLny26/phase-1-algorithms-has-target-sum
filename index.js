function hasTargetSum(array, target) {
const seenNumbers = {};
for (const number of array) {
  // n steps
  const complement = target - number;
  if (complement in seenNumbers) return true;
  // 1 step
seenNumbers[number] = true;
}
return false

}
/* 
  Write the Big O time complexity of your function here
// Runtime : O(n^2)
// Space: O(n) 
we're taking input in array, so as array grows, the space needs will grows in a linear fashion. 
since we're not creating any auxiliary data structures or any additional nested arrays of arrays, 
so the space split will remain as O(n)
Old codes:
  function hasTargetSum(array, target) {
  for(let i = 0; i<array.length; i++) {
  const complement = target - array[i]
  for (let j = i +1; j < array.length; j++) {

  }
/* 
  Add your pseudocode here
*/

// create an object to keep track of numbers we've already seen
// iterate through each number in the array
    // for the current number, identify a complement that adds to the target (comp = target - numb)
   // check if any key on our object is the complement.
     // if so, return true
     // otherwise, add that number to the object
/*
  Add written explanation of your solution here
*/
// if sum of any paired numbers in array adds up to the target number, return true
//if I reach the end of the array, return false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
