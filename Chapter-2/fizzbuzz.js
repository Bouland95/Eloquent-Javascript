/*
Write a program that uses console.log to print all the numbers from 1 to 100. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

Then modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) {
  let word = '';
  if (i % 3 === 0) {
    word += 'Fizz';
  }
  if (i % 5 === 0) {
    word += 'Buzz';
  }
  console.log(word || i);
}