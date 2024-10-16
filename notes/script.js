function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteColor = document.getElementById('noteColor').value;
    const noteList = document.getElementById('noteList');
  
    if (noteInput.value.trim() === '') {
      alert('Bitte eine Notiz schreiben!');
      return;
    }
  
    const li = document.createElement('li');
    li.className = `list-group-item ${noteColor}`;
    
    li.innerHTML = `
      <span class="note-text">${noteInput.value}</span>
      <div>
        <button class="btn btn-success btn-sm" onclick="markAsCompleted(this)">Erledigt</button>
        <button class="btn btn-danger btn-sm" onclick="removeNote(this)">Löschen</button>
      </div>
    `;
  
    noteList.appendChild(li);
    noteInput.value = '';
  }
  
  function removeNote(button) {
    const li = button.parentElement.parentElement;
    li.remove();
  }
  
  function markAsCompleted(button) {
    const li = button.parentElement.parentElement;
    li.querySelector('.note-text').classList.toggle('completed');
  }
  