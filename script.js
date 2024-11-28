/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
  - va applicato uno sconto del 20% per i minorenni
  - va applicato uno sconto del 40% per gli over 65.
  - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 Buon lavoro! 
 */

 // si chiede all'utente di inserire i km da percorrere //
 const km = parseFloat(prompt("inserire numero di chilometri che si vuole percorrere"));
// si chiede all'utente di inserire l'età del passegero //
 const age = parseInt(prompt("inserire età passegero"));

 console.log('numero chilometri =', km);
 console.log('eta passeggero =',age);
// calcolo prezzo del biglietto senza sconto //
let price = km * 0.21;
// prima condizione (se il passegero ha meno di 18 anni si applica uno sconto del 20%) //
 if (age < 18) {
    discountprice = price * 20 / 100;
    discountprice = price - discountprice 
    console.log('Il prezzo del biglietto è =', discountprice.toFixed(2) + " " + "€");
} 
// seconda condizione (se il passegero ha più di 65 anni si applica uno sconto del 40%) //
else if (age > 65) {
    discountprice = price * 40 / 100;
    discountprice = price - discountprice 
    console.log('Il prezzo del biglietto è  =', discountprice.toFixed(2) + " " + "€");
}
// se nessuna condizione risulta vera si stampa il prezzo del biglietto senza sconto //
else {
    console.log('Il prezzo del biglietto è  =', price.toFixed(2) + " " + "€");
}

