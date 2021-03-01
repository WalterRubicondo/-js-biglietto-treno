alert("Benvenuto su BooleanTrain. Prego inserire i dati richiesti per calcolore il prezzo del Suo del biglietto");

var chilometri = parseFloat(prompt("Numero di Km per cui desidera viaggiare?"));

var eta = parseInt(prompt("Età?"));

var prezzo = 0.21;

var biglietto = chilometri * prezzo;

// console.log(biglietto);

if (eta < 18) {
  // console.log(biglietto - ((biglietto * 20) /100) + " €");
  alert("Il totale del suo biglietto è pari a " + (biglietto - ((biglietto * 20) /100) + "€"));
} else if (eta > 65) {
  // console.log(biglietto - (biglietto * 40) /100 + " €");
  alert("Il totale del suo biglietto è pari a " + (biglietto - (biglietto * 40) /100 + "€"))
} else {
  // console.log(biglietto + " €");
  alert("Il totale del suo biglietto è pari a " + biglietto + "€")
}
