/*
 *When a page loads, show a button that the user clicks
When clicked, it prompts for first name and last name and age
store within an object
 */

const gatherBtn = document.querySelector('#gather-button')

function gatherInfo() {
  let firstName, lastName, age;

  while (true) {
    if (!firstName) {
      firstName = prompt('Enter your first name');
      continue;
    }
    if (!lastName) {
      lastName = prompt('Enter your last name');
      continue;
    }
    if (!age || isNaN(age)) {
      age = +prompt('Enter your age');
      continue;
    }
    break;
  }
}

gatherBtn.addEventListener('click', gatherInfo);
