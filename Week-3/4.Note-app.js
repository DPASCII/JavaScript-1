const notes = [];

//Note save function
function saveNote(content, id) {
  notes.push((object = { content: content, id: id }));
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Note retrieve function
function getNote(id) {
  let index = -1;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      index = i;
      break;
    }
  }
  return notes[index];
}

const firstNote = getNote(1);
console.log(firstNote);

//Log out all notes
function logOutNotesFormatted() {
  for (i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i]["id"]}, has the following note text: ${notes[i]["content"]}`
    );
  }
}

logOutNotesFormatted();

//Unique function delete note using ID
function deleteNote(id) {
  let index = -1;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      index = i;
      break;
    }
  }
  notes.splice(index, 1);
}

deleteNote(1);
logOutNotesFormatted();
