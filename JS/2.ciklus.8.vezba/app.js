const cars = ['BMW', 'Audi', 'Smart'];
// cars.push('VW');
// cars.push('Audi', 'Toyota')
// console.log(cars);

// console.log('Nakon cars.pop=> '+ cars.pop());// na kraju niza

// const godine = [12, 76, 26, 6, 23, 21, 29, 16];
// function punoletni(a){ //niz godina
//     const  punGod = [];
//     for(let god of a){
//         if(god >= 18){
//             punGod.push(god);
//         }
//     }
//     return punGod;
// }
// punoletni(godine);

//Dodavanje na pocetku niza unshift(), skidanje sa pocetka niza shift()

// cars.unshift('Toyota');
// console.log('Nakon cars.unshift(Toyota)=>');
// console.log(cars);

// cars.shift();
// console.log('Nakon cars.shift()=>');
// console.log(cars);


// cars.reverse(); // premestanje clanova niza u suprotnom smeru
// console.log(cars);

//Spajanje dva niza concat()

// const imena = ['Faris', 'Isko', 'Aldin'];
// const age = [20, 100, 55];
// const spojeniNiz = imena.concat(age);
// console.log(spojeniNiz);

///trazena vrednost find()

// console.log(cars.find(el => el === 'Smart')); 

const age = [20, 100, 55];
// console.log(age.find(el => el > 30)); // vraca prvi element koji zadovoljova uslov u nizu


// array.findIndex();
//
// console.log(age.findIndex(el => el < 100)); // parametar je fja

console.log(age.findIndex((el, index) => el < 100 || index > 1))