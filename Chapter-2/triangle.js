/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function triangle(num) {
  for (let row = '#'; row.length <= num; row += '#') {
    console.log(row);
  }
}

triangle(7);