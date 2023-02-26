// Pobieramy element DOM dla pola tekstowego, na którym chcemy działać
const validationInput = document.getElementById('validation-input');
// Dodajemy nasłuchiwanie zdarzenia 'blur' dla pola tekstowego
validationInput.addEventListener('blur', () => {
 // Pobieramy wartość atrybutu 'data-length' dla pola tekstowego  
   
    const length = validationInput.getAttribute('data-length');
  // Sprawdzamy, czy długość wprowadzonej wartości jest zgodna z wymaganą długością
    
    if (validationInput.value.length === parseInt(length)) {
    validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
        
        // Sprawdzamy, czy długość wprowadzonej wartości jest zgodna z wymaganą długością
    } else {
        // Jeśli nie, usuwamy klasę 'valid' i dodajemy klasę 'invalid'
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});