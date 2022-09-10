//Arrays je imutable, prvo se pravi njegova kopija pa u toj kopiji menjamo niz
// items -> clanovi niza
//indeksiran tipovi podataka, pocinju od nule 0;
const cars = ['BMW', false, 'Audi', true, 'VW', 'MB', 'Skoda', true, false];
//console.log(cars);
//console.log(cars.length);
//console.log(cars[1]);

//menjanje clanov niza, nije dobra praksa da se menja kao sledece

// cars[0] = 3;
// console.log(cars);
// cars.length = 0; //cars.length = 3 oduzima poslednje
// console.log(cars);

// for (let i = 0; i < cars.length; i++) {
//     if(!cars[i]){   ///if(Boolean(cars.[i])){}
//         console.log(cars[i]);
//     }
    
    
// }
for (let car in cars){
    console.log(cars[car]);
}