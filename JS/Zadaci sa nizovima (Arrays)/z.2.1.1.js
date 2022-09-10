// Napisati program koji učitava dimenziju niza, elemente niza
// i zatim ispisuje:
// (a) elemente niza koji se nalaze na parnim pozicijama.
// (b) parne elemente niza.

let dimension = prompt('Unesite dimenziju zeljenog niza'); //Ucitavanje dimenzije niza
dimension = parseInt(dimension);

const niz = [];
const parnePozicije = [];
const parnaVrednost  = [];

for (let i = 0; i< dimension;i++) {
    niz[i] = prompt('Unesite '+(i+1)+'. clan niza');
    niz[i] = parseInt(niz[i]); // konvertuj u tip Number
    if(i%2 === 0){
        parnePozicije.push(niz[i]);
    }
    if(niz[i] % 2 === 0 ){
        parnaVrednost.push(niz[i])
    }
}
console.log('Parne pozicije niza su: ' + parnePozicije);
console.log('Parne vrednosti niza su: ' + parnaVrednost)
