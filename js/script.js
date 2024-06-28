function keypressed(eventObj) {
  head.innerText = eventObj.key;
}
document.addEventListener('keydown', keypressed);
head = document.querySelector('#keyOutput');
