// U prodavnici je organizovana akcija da svaki kupac dobije
// najjeftiniji od tri artikla za jedan dinar. Napisati program koji za unete cene
// tri artikla izračunava ukupnu cenu, kao i koliko dinara se uštedi zahvaljujući
// popustu. Cene artikala su pozitivni celi brojevi. U slučaju neispravnog unosa,
// ispisati odgovarajuću poruku o grešci.

let a1 = prompt('Unesite prvi broj');
a1 = parseInt(a1)
while(a1 <= 0){
    a1 =prompt('Uneli ste negativan prvi broj! Molimo vas unesite broj ponovo:');
    a1 = parseInt(a1)
}
let a2 = prompt('Unesite drugi broj');
a2 = parseInt(a2)
while(a2 <= 0){
    a2 =prompt('Uneli ste negativan drugi broj! Molimo vas unesite broj ponovo:');
    a2 = parseInt(a2)
}
let a3 = prompt('Unesite treci broj');
a3 = parseInt(a3)
while(a3 <= 0){
    a3 = prompt('Uneli ste negativan treci broj! Molimo vas unesite broj ponovo:');
    a3 = parseInt(a3)
}

if(a1 < a2 && a1 < a3){
    console.log('Cena sa popustom je: ' + (a2+a3));
    console.log('Usteda je:' + a1)
}else if(a2 < a1 && a2 < a3){
    console.log('Cena sa popustom je: ' + (a1+a3));
    console.log('Usteda je:' + a2)
}else if(a3 < a1 && a3 < a2){
    console.log('Cena sa popustom je: ' + ( a1+a2));
    console.log('Usteda je:' + a3)
}else if(a1 === a2 && a1 === a3){
    console.log('Cena sa popustom je: ' + ( a1+a2));
    console.log('Usteda je:' + a3)
}else if(a1 === a2 && a1 < a3){
    console.log('Cena sa popustom je: ' + ( a3+a1));
    console.log('Usteda je:' + a1)
}else if(a1 === a3 && a1 < a2){
    console.log('Cena sa popustom je: ' + ( a2+a1));
    console.log('Usteda je:' + a1)
}else if(a2 === a3 && a2 < a1){
    console.log('Cena sa popustom je: ' + ( a2+a1));
    console.log('Usteda je:' + a2)
}
