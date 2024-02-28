/////////////////////////////////////////
//////////////Palindroma/////////////////


//Chiedo all'utente di inserire una parola minuscola
let parolaUser = prompt("Per favore inserisci una parola palindroma scritta in minuscolo.")

// Funzione per verificare se è palindroma alla stringa
function parolaPalindroma(stringa) {
  // Divide ribalta e unisce
  return stringa === stringa.split('').reverse().join('');
}


/////////////////////////////////////////
//////////////Pari&Dispari/////////////////