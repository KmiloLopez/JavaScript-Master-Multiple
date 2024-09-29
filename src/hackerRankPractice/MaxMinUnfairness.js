//Week 2 MaxMin
// You will be given a list of integers, arr , and a single integer k . You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array newArr. Unfairness of an array is calculated as max(newArr)-min(newArr) where, max denotes the largest integer in newArr and min denotes the smallest integer in newArr. Example: arr = [1,4,7,2] k = 2,Pick any two elements, say newArr = [4,7]. Th unfariness = 7-4 = 3. Testing for all pairs, the solution [1,2] provides the minimum unfairness.

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);

  let minUnfairness = Infinity;

  // Step 2: Sliding window to find the subarray with the minimum unfairness
  for (let i = 0; i <= arr.length - k; i++) {
    const currentUnfairness = arr[i + k - 1] - arr[i];
    minUnfairness = Math.min(minUnfairness, currentUnfairness);
  }

  return minUnfairness;

  //This is how I attempt to find the minimum before.
  // const organizedArray = [...arr];
  // organizedArray.sort((a, b) => a - b);
  // console.log(organizedArray);

  // const arrayofArrays = organizedArray.map((number, index) => {
  //   let arrN = [];
  //   for (let i = index; i < k + index; i++) {
  //     arrN.push(organizedArray[i]);
  //   }
  //   const diff = organizedArray.length - k;
  //   console.log("diff", diff);
  //   console.log("index", index);

  //   if (index > diff) {
  //     let passed = index - (organizedArray.length - k);
  //     console.log("passed", passed);
  //     for (let i = 0; i < passed; i++) {
  //       arrN[k - i - 1] = organizedArray[i];
  //     }
  //   }
  //   return arrN;
  // });
  // console.log("arrayofArrays", arrayofArrays);

  // let responseMin = 5000;
  // arrayofArrays.forEach((arr) => {
  //   const max = Math.max(...arr);
  //   const min = Math.min(...arr);
  //   const difference = max - min;
  //   if (difference < responseMin) {
  //     responseMin = difference;
  //   }
  // });

  // return responseMin;
}
const myArray = [10, 100, 300, 200, 1000, 20, 30];
console.log(maxMin(3, myArray));

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(maxMin(4, myArray));

// const myArray = [
//   1399, 6925, 3074, 6733, 6608, 6919, 8712, 8438, 8221, 3352, 8493, 1417, 2157,
//   1798, 7964, 5543, 2924, 9261, 5280, 781, 8314, 7891, 5900, 4578, 1908, 1593,
//   7272, 7497, 9059, 8763, 7724, 6810, 2040, 7150, 3543, 8648, 421, 8607, 3438,
//   8642, 8311, 8284, 6412, 468, 6434, 728, 2363, 9359, 9989, 7643, 6492, 4656,
//   5535, 2393, 9234, 7443, 3986, 6506, 1292, 9397, 1621, 9016, 6207, 3661, 2518,
//   6102, 8661, 9291, 4709, 2100, 7934, 3020, 384, 698, 9840, 6818, 1426, 2204,
//   2529, 1416, 9847, 9022, 6072, 5382, 1415, 1658, 9178, 1753, 8164, 470, 1151,
//   6137, 5839, 3710, 9798, 8357, 9813, 4811, 7649, 874,
// ];

// console.log(maxMin(25, myArray));

//k = 3
// const myArray = [7, 8, 9, 10, 11];
//myArray.length = 5;
//5-3=2  2 is the max index
//if(index > 2){index = index-k}

//7 8 9
//8 9 10
//9 10 11
//10 11 7
