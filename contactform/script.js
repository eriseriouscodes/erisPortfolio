function validateForm(event) {
    event.preventDefault();  // Verhindert das automatische Absenden des Formulars
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    let valid = true;
  
    // Name Validierung
    if (name.value.trim() === '') {
      name.classList.add('is-invalid');
      valid = false;
    } else {
      name.classList.remove('is-invalid');
    }
  
    // E-Mail Validierung
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('is-invalid');
      valid = false;
    } else {
      email.classList.remove('is-invalid');
    }
  
    // Betreff Validierung
    if (subject.value.trim() === '') {
      subject.classList.add('is-invalid');
      valid = false;
    } else {
      subject.classList.remove('is-invalid');
    }
  
    // Nachricht Validierung
    if (message.value.trim() === '') {
      message.classList.add('is-invalid');
      valid = false;
    } else {
      message.classList.remove('is-invalid');
    }
  
    if (valid) {
      // Simuliere das Senden der Nachricht
      document.getElementById('successMessage').classList.remove('d-none');
      document.getElementById('contactForm').reset();  // Setzt das Formular zurück
    }
  }
  