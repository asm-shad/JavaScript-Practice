// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

var Math = 75.25;
var Bio = 65;
var chem = 80;
var phy = 35.45;
var Ban = 99.50

var TotalMark = Math + Bio + chem + phy + Ban ;
var averages = TotalMark / 5
console.log(parseFloat(averages.toFixed(2)));


// Why Not Just Use toFixed(2) Alone?
// If you were to use averages.toFixed(2) directly in the console.log, 
// it would display "71.84" (as a string). By using parseFloat(averages.toFixed(2)), 
// you're ensuring that the result remains a number, which is generally preferred for numeric output.