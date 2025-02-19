/*let a = 'Fizz';
let b = 'Buzz';
let c = 'FizzBuzz';

let n = 100;

for (i = 1; i <= n; i++) {
    if (i % 15 === 0) {
        console.log(c)
    }
    else if (i % 3 === 0){
        console.log(a);
    }
    else if (i % 5 === 0) {
        console.log(b);
    }
    else {
        console.log(i);
    }
} */

let a = 'Fizz';
let b = 'Buzz';
let c = 'FizzBuzz';

let n = 100;

for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log(c)
    }
    else if (i % 5 === 0) {
        console.log(b);
    }
    else if (i % 3 === 0){
        console.log(a);
    }
    else {
        console.log(i);
    }
}