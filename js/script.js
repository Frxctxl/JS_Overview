//Target the form 
const noteForm = document.querySelector('#noteForm');
//Target the note header h3
const noteHead = document.querySelector('.noteHeader');

noteForm.style.background = '#9FAFDF';

function createNote(eventObj) {
  eventObj.preventDefault();

  const noteInput = document.querySelector('#noteInput').value;

  const dateObj = new Date();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();
  const dateStr = `${month}/${date}/${year}`;

  const note = {
    text: noteInput,
    date: dateStr
  }

  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(note);

  localStorage.setItem('notes', JSON.stringify(notes));
}
noteForm.addEventListener('submit', createNote);

// localStorage.setItem('name', 'Jay');
