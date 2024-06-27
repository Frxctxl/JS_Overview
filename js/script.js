const lis = document.querySelectorAll('ul li');
const output = document.querySelector('#output');

function doSomething(eventObj) {

  output.innerText = eventObj.target.innerText;

  lis.forEach(function (li) {
    li.style.backgroundColor = 'gray';
  });

  eventObj.target.style.backgroundColor = 'red';
}
for (const li of lis) {
  li.addEventListener('click', doSomething);
}
