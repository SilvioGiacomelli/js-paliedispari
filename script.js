/////////////////////////////////////////
//////////////Palindroma/////////////////
/////////////////////////////////////////


//Chiedo all'utente di inserire una parola minuscola
let parolaUser = prompt("Per favore inserisci una parola palindroma scritta in minuscolo.")

// Funzione per verificare se è palindroma alla stringa


function parolaPalindroma(stringa) {
  //Divido la parola
  for (let i = 0; i < stringa.length / 2; i++) {
    //Controllo il contenuto se sbagliato
    if (stringa[i] !== stringa[stringa.length - 1 - i]) {
      
      return false;
    }
  }
  
  return true;
}



//
if (parolaUser !== null && parolaUser === parolaUser.toLowerCase()) {
  if (parolaPalindroma(parolaUser)) {
    alert("La parola è palindroma");
  } else {
    alert("La parola non è palindroma");
  }
} else if (parolaUser !== null) {
  alert ("Inserisci una parola scritta in minuscolo");
}

/////////////////////////////////////////
//////////////Pari&Dispari///////////////
/////////////////////////////////////////

///Funzione per vedere se un numero è pari o dispari
function numPari(num) {
  return num % 2 === 0; 
}

