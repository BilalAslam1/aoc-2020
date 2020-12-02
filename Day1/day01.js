const fs = require("fs");
const num_array = fs.readFileSync("./day01-input.txt", "utf-8").split("\n").map(Number);

const partOne = (num_array) => {

    dataSet = new Set();
    for (i in num_array) {
        if (dataSet.has(2020 - num_array[i]))
            console.log("The two numbers that add up to 2020 are: ", num_array[i], ",", 2020 - num_array[i], "\nThere sum is: ", num_array[i] * (2020 - num_array[i]));
        else
            dataSet.add(num_array[i]);
    }
}

const partTwo = (num_array) => {
    dataSet = new Set();
    for (var x = 0; x < num_array.length - 1; x++) {
        for (var y = x + 1; y < num_array.length - 1; y++) {
            if (dataSet.has(2020 - num_array[x] - num_array[y])) {
                return console.log("Three numbers that add up to 2020 are: ", num_array[x], ",", num_array[y], ",", 2020 - num_array[x] - num_array[y]
                    , "\nTheir sum is: ", num_array[x] * num_array[y] * (2020 - num_array[x] - num_array[y]))
            }
            else {
                dataSet.add(num_array[x]);
                dataSet.add(num_array[y]);
            }
        }
    }
}


// This soultion has time complexity of O(N) but a space complexity of O(N) in worst case scenario as well. 
// The space complixity can be reduced to O(1) using brute force at expense of increase time complexity to O(N^2)
partOne(num_array);

// This solution loops through O(N^2) times using same approach of hash tables to reduce time complexity but increase space complexity to O(N). 
// The space complixity can be reduced to O(1) at expense of increase time complexity to O(N^3) using 3 for loops 
partTwo(num_array);
