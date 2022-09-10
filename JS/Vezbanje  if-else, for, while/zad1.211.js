// Napisati program koji za uneti četvorocifreni broj ispisuje
// njegovu najveću cifru. U slučaju neispravnog unosa, ispisati odgovarajuću poruku
// o grešci.
let a = prompt('Unesite cetvorocifreni broj:');
while(a < 999 || a >=10000){
     a = prompt('Broj koji ste uneli nije cetvorocifren! Unesite broj ponovo');
     a  = parseInt(a);
}
let n = 0;
let max = 0;
let sum = 0;
// for (let i = 0; i <=3; i++) {
//      n[i] = a % Math.pow(10, i);
//      console.log(n[i]);
     
// }
let i = 10;
let j = 1;
let m;
while(sum < a){
     
     n = ((a - sum) % i);
    m = n / j;
     sum += n;
     if (m > max){
          max = n;
     }
    console.log(a-sum);
    console.log('n:' + n);
    console.log('i:' + i);
    console.log('sum:' + sum);
    console.log('m: ' + m);
    console.log('max:' + max);
    i *=10;
    j *=10;
    
}
console.log('Maximum je:' + max );