function selectionSort(arr) {
  arr.join();
  arr.sort();
}

selectionSort([8, 1, 7, 5])
console.log(arr)

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// My function takes in an array and outputs a new array based on lowest to highest value
// create the new array element and set it equal to empty
// 


