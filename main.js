// NumberDoubler function to double a number until it reaches 100.

function numberDoubler(num) {
    // Your code here
    while (num < 100) {
        num *= 2
    }

    return num;
}

console.log(numberDoubler(3));

// StringRepeater function to repeat a string a specified number of times.

function stringRepeater(str) {
    // Your code here
    while (str.length < 10) {
      str += str;        
    }
    return str;
}

console.log(stringRepeater("Renee"));

// MakeDivisible function to make a number divisible by another number.
function makeDivisible(x, y) {
    // Your code here
    while (x % y !== 0) {
        x++;
    }

    return x;

}

console.log(makeDivisible(16, 5));


// Export the functions for testing.

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};