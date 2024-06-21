/*Create a function with 3 args
* 1st and 2nd are numbers
* 3rd is operation
 */

function calc(num1, num2, operation) {
  //checks each operation and does required math
  if (operation === '+') {
    return num1 + num2;
  }
  else if (operation === '-') {
    return num1 - num2;
  }
  else if (operation === '*') {
    return num1 * num2;
  }
  else if (operation === '/') {
    return num1 / num2;
  }
  //if no operation is done return an error message
  else {
    return 'Invalid operation'
  }
}


console.log(calc(39, 21, '/'));
