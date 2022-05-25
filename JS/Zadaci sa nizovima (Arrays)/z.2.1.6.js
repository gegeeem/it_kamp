// 2.1.6 Napisati program koji za učitani ceo broj ispisuje broj
// pojavljivanja svake od cifara u zapisu tog broja. Uputstvo: Za evidenciju broja
// pojavljivanja svake cifre pojedinačno, koristiti niz.

let unetiBroj = prompt('Unesite zljeni broj');

unetiBroj = parseInt(unetiBroj);
let pomocniBroj = unetiBroj;
const nizCifara = []; // niz cifara
const brPojavljivanjaCifara = [];
let ostatak = 0;

for (let i = 1; pomocniBroj > ostatak; i++) { /// 352 /10 = 35; 35 / 10 = 3; 3 < 10 prekini izvrsavanje 
    
    nizCifara[i] = (pomocniBroj % 10**i)  - ostatak;
    ostatak = pomocniBroj % 10**i;
    // for(let j = i + 1; j < nizCifara.length; j++){
    //     if(nizCifara[i]  === nizCifara[j]){
    //         brPojavljivanjaCifara[i] = 
    //     }
    // }

}