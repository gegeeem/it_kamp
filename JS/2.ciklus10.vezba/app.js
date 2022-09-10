//primer
// const DATA = [100, 65, 76, 80, 99, 53, 1, 2, 44];
// const returnEven = (number) =>{
//     const evenNumber = number.filter(number => number % 2 === 0 && number <=50);
    
//     return evenNumber;
// }
// console.log(returnEven(DATA));


/// zadatak nadjimo kvadrat svakog broja i dad dodamo na svaki broj jos br 10 i vratimo niz

// const DATA = [5, 3, 2, 8, 7, 9];

// const returnPow = ( numbers) =>{
//     const pow = numbers.map((el) => el**2+10);
//     return pow;
// }

// console.log(returnPow(DATA));



// reduce()

// const DATA = [100, 200, 250, 400, 520]; //npr cena artikala u nizu

// const cartTotal = DATA.reduce(
//     (previousValue, currentValue) => previousValue +currentValue , 1000 //inicijalna vrednost  je nula a sad u nasem slucaju previousValue krece sad od 1000
// );
// console.log(cartTotal);

//reduce() vraca samo jednu vrednost number ili string(mada redje)


/// zadatak srednja vrednost godina vclanova niza

// const DATA = [26, 18, 16, 22, 30, 28];
// const sumAvgAge = (ages) =>{
//     const srednjaVr = ages.reduce((pret, sad )=> pret + sad);
//     return parseFloat((srednjaVr / ages.length).toFixed(2)); /// toFixed pretvara number u string na zadane vr decimale

// };
// console.log(sumAvgAge(DATA));

// some() evry();