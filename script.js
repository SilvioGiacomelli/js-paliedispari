/////////////////////////////////////////
//////////////Palindroma/////////////////
/////////////////////////////////////////


//Chiedo all'utente di inserire una parola minuscola
let parolaUser = prompt("Per favore inserisci una parola palindroma scritta in minuscolo.")

// Funzione per verificare se è palindroma alla stringa
function parolaPalindroma(stringa) {
  // Divide ribalta e unisce
  return stringa === stringa.split('').reverse().join('');
}

if (parolaUser !== null && parolaUser === parolaUser.toLowerCase()) {
  if (parolaPalindroma(parolaUser)) {
    alert("La parola è palindroma");
  } else {
    alert("La parola non è palindroma");
  }
} else if (parolaUser !== null) {
  alert ("Inserisci una parola scritta in minuscolo");
}  else if (parolaUser = (!isNaN)) {
  alert ("Hai inserito un numero");
}

/////////////////////////////////////////
//////////////Pari&Dispari///////////////
/////////////////////////////////////////

///Funzione per vedere se un numero è pari o dispari
function numPari(num) {
  return num % 2 === 0; 
}

