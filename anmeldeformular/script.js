// Formular Validierung und Weiterleitung zur Überprüfung
document.getElementById('anmeldeForm').addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();

  // Bootstrap Validierung
  if (this.checkValidity()) {
    const kursnummer = document.getElementById('kursnummer').value;
    const name = document.getElementById('name').value;
    const vorname = document.getElementById('vorname').value;
    const geburtsdatum = document.getElementById('geburtsdatum').value;
    const email = document.getElementById('email').value;
    const geschlecht = document.getElementById('geschlecht').value;
    const iban = document.getElementById('iban').value;

    // Daten zur Überprüfung anzeigen
    document.getElementById('reviewKursnummer').innerText = kursnummer;
    document.getElementById('reviewName').innerText = name;
    document.getElementById('reviewVorname').innerText = vorname;
    document.getElementById('reviewGeburtsdatum').innerText = geburtsdatum;
    document.getElementById('reviewEmail').innerText = email;
    document.getElementById('reviewGeschlecht').innerText = geschlecht;
    document.getElementById('reviewIban').innerText = iban;

    // Formular ausblenden und Überprüfungsbereich anzeigen
    this.style.display = 'none';
    document.getElementById('reviewSection').style.display = 'block';
  }

  this.classList.add('was-validated');
});

// Daten als .txt Datei herunterladen
document.getElementById('confirmBtn').addEventListener('click', function () {
  const kursnummer = document.getElementById('kursnummer').value;
  const name = document.getElementById('name').value;
  const vorname = document.getElementById('vorname').value;
  const geburtsdatum = document.getElementById('geburtsdatum').value;
  const email = document.getElementById('email').value;
  const geschlecht = document.getElementById('geschlecht').value;
  const iban = document.getElementById('iban').value;

  const data = `Kursnummer: ${kursnummer}\nName: ${name}\nVorname: ${vorname}\nGeburtsdatum: ${geburtsdatum}\nEmail: ${email}\nGeschlecht: ${geschlecht}\nIBAN: ${iban}`;

  // Datei erzeugen
  const blob = new Blob([data], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Anmeldung.txt';
  link.click();
});
