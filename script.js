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

let pariDispari;
let numGiocatore;

let validPariDispari = false;
let validNumber = false;

let numeroPc = numeroCasuale (1,5);


// fino a quando non è valido l'iserimento di pari/dispari ripropongo il prompt
while (!validPariDispari) {
  pariDispari = prompt('Scrivi "pari" oppure "dispari"')
  // verifico che la stringa inserita sia 'pari' o 'dispari'
  if(pariDispari.toLowerCase() === 'pari' || pariDispari.toLowerCase() === 'dispari'){
    // se la stringa è valita interrompo il ciclo quindi non chiedo un altrpo inserimento
    validPariDispari = true;
  }else{
    alert('Attenzione! Devi scrivere la parola "pari" o "dispari"')
  }
}


numGiocatore = parseInt(prompt('Scrivi un numero da 1 a 5'));
  if(isNaN(numGiocatore) === false){
  if(numGiocatore > 0 && numGiocatore <=5){
    validNumber = true;
    }else{
      alert('Attenzione! hai inserito un numero sbagliato')
    }
  }else{
    alert('Attenzione! hai inserito una stringa e non un numero')
  }


  let sommaNumRisultato = numGiocatore + numeroPc

  if (pariDispari === numPari(sommaNumRisultato)) {
    alert ("hai vinto")
  } else{
    alert ("hai perso")
  }
  
  console.log (parolaUser, numGiocatore, pariDispari, numeroPc, sommaNumRisultato)
////////////////////////////////////////////////
///////////////////Funzioni/////////////////////
////////////////////////////////////////////////

//Funzione per generare il numero random
function numeroCasuale(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

///Funzione per vedere se un numero è pari o dispari
function numPari(num) {
  if (num % 2 === 0){
    return "pari"
  } else {
    return "dispari"
  }
}


