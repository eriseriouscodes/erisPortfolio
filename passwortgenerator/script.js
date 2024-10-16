function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
  
    let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numberChars = '0123456789';
    let symbolChars = '!$%&';
  
    let charPool = lowerCaseChars;
    if (includeUppercase) charPool += upperCaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }
  
    document.getElementById('generatedPassword').value = password;
  }
  
  function copyPassword() {
    const passwordField = document.getElementById('generatedPassword');
    passwordField.select();
    document.execCommand('copy');
    alert('Passwort kopiert!');
  }
  