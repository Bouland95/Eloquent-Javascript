/*
Write a program that creates a string that represents an n×n grid. Each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this (for a 4x4 grid):

 # # # #
# # # #
 # # # #
# # # #

*/

// solution 1

function grid(n) {

  for (let i = 0; i < n; i++) {
    let line = '';

    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        if (j % 2 === 0) line += ' ';
        if (j % 2 === 1) line += '#';
      }
    } else {
      for (let j = 0; j < n; j++) {
        if (j % 2 === 0) line += '#';
        if (j % 2 === 1) line += ' ';
      }
    }
    console.log(line);
  }
}

// solution 2

function grid(n) {
  var line = '';

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if ((x + y) % 2 === 0) {
        line += ' ';
      } else {
        line += '#';
      }
    }
    line += '\n';
  }
  console.log(line);
}