//Multiple of 3 print "Fizz", multiple of 5 print "Buzz", multiples of 3 & 5 print "FizzBuzz"

function result(n) {

    const ar = [];
    for (i = 1; i <= n; i++) {
        if (i % 15 === 0) ar.push("FizzBuzz");
        else if (i % 3 === 0) ar.push("Fizz");
        else if (i % 5 === 0) ar.push("Buzz");
        else ar.push(i);
    }
    return ar;

};
console.log(`${result(100)}`);

//Function accepts a number in parameter and checks is prime or not

function isPrime(num) {
    if (num == 2) {
        console.log(`${num} is a prime`);
        return true;
    }
    if (num % 2 === 0) {
        console.log(`${num} is not a prime`);
    } else {
        console.log(`${num} is a prime`);
    }
}
isPrime(7);


//Function to find count of given string

const count = (charCount) => {
    const totalCount = [];
    for (const char of charCount) {
        totalCount[char] = (totalCount[char] || 0) + 1;
    }
    return totalCount;
};

const charCount = "Find the count of given string";
console.log(count(charCount));
