//Target the form 
const noteForm = document.querySelector('#noteForm');
//Target the note header h3
const noteHead = document.querySelector('.noteHeader');

noteForm.style.background = '#9FAFDF';

function getNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  return notes;
};

function createNote(eventObj) {
  eventObj.preventDefault();

  const noteInput = document.querySelector('#noteInput');

  const dateObj = new Date();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();
  const minutes = dateObj.getMinutes();
  const objHours = dateObj.getHours();
  const hours = objHours > 12 ? objHours - 12 : objHours;

  const dateStr = `${month}/${date}/${year} ${hours}:${minutes}`;

  const note = {
    text: noteInput.value,
    date: dateStr
  }

  let notes = getNotes();
  notes.push(note);

  localStorage.setItem('notes', JSON.stringify(notes));

  noteInput.value = '';

  outputNotes();
}

function outputNotes() {
  const notes = getNotes();
  const container = document.querySelector('.container');

  if (notes.length) {
    noteHead.innerText = 'Your Notes';
  }

  container.innerHTML = '';

  for (const noteObj of notes) {
    container.insertAdjacentHTML('beforeend', `
      <article class="note">
       <p class="noteText">${noteObj.text}</p>
       <p class="noteDate">${noteObj.date}</p>
     </article>
    
`);
  }
}

outputNotes();
noteForm.addEventListener('submit', createNote);

// localStorage.setItem('name', 'Jay');
