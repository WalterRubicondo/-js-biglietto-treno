alert("Benvenuto su BooleanTrain. Prego inserire i dati richiesti per calcolore il prezzo del Suo del biglietto");

var codiceFiscale = prompt("Prego inserisca il Suo Codice Fiscale");

document.getElementById('cf') .innerHTML = "Buon Viaggio " + codiceFiscale;

var chilometri = parseFloat(prompt("Numero di Km per cui desidera viaggiare?"));

var eta = parseInt(prompt("Età?"));

var prezzo = 0.21;

var biglietto = chilometri * prezzo;

// console.log(biglietto);

if (eta < 18) {
  // console.log(biglietto - ((biglietto * 20) /100) + " €");
  // alert("Il totale del suo biglietto è pari a " + (biglietto - ((biglietto * 20) /100)).toFixed(2) + "€");
  document.getElementById('totalebiglietto') .innerHTML = "Totale: " + (biglietto - ((biglietto * 20) /100)).toFixed(2) + "€";
} else if (eta >= 65) {
  // console.log(biglietto - (biglietto * 40) /100 + " €");
  // alert("Il totale del suo biglietto è pari a " + (biglietto - ((biglietto * 40) /100)).toFixed(2) + "€");
    document.getElementById('totalebiglietto') .innerHTML = "Totale: " + (biglietto - ((biglietto * 40) /100)).toFixed(2) + "€";
} else {
  // console.log(biglietto + " €");
  // alert("Il totale del suo biglietto è pari a " + biglietto.toFixed(2) + "€");
    document.getElementById('totalebiglietto') .innerHTML = "Totale: " + biglietto.toFixed(2) + "€";
}

alert("Si prega di stampare il biglietto");
