//Napisati program koji ispisuje najmanji od tri uneta cela broja, tj ne moraju biti uneti
//Zadatak pokrenuti u konzoli!!

let a1 = prompt('Unesite prvi broj');
let a2 = prompt('Unesite drugi broj');
let  a3 = prompt('Unesite treci broj');
console.log('Uneli ste brojeve:' + a1 + ', ' + a2 + ', ' + a3)
if(+a1 < +a2 && +a1 < +a3){
    console.log('Najmanji broj od prethodnih je broj' + a1);
}else if(+a2 < +a3 && +a2 < +a1){
    console.log('Najmanji broj od prethodnih je broj' + a2);
}else if (+a3 < +a1 && +a3 < +a2){
    console.log('Najmanji broj od prethodnih je broj' + a3);
}