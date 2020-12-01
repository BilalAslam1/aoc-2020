var fs = require("fs");

const partOne = () => {
    fs.readFile("./day01-input.txt", function (num_array) {
        var num_array = fs.readFileSync("./day01-input.txt", "utf-8").split("\n").map(Number);
        dataSet = new Set();

        for (i in num_array) {

            if (dataSet.has(2020 - num_array[i])) {
                console.log("The two numbers that add up to 2020 are: ", num_array[i], ",", 2020 - num_array[i], "\nThere sum is: ", num_array[i] * (2020 - num_array[i]));

            }
            else
                dataSet.add(num_array[i]);
        }
    });
}

partOne();

// This soultion has time complexity of O(N) but a space complexity of O(N) in worst case scenario as well. 
// The space complixity can be reduced to O(1) at expense of increase time complexity to O(N^2)