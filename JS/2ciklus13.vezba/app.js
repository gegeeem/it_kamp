// const person ={
//     name: 'Jo Be good',
//     job: 'employed',
//     adress: 'Carolina USA',
//     kids: 4
// };
// person.phone = '066000000';
// console.log(person);
// Object.freeze(person);
// person.status = 'married';
// console.log(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));

// ///
// person.name = 'Jo you are not good'; /// ne moze jer smo freeyovali objekat
// console.log(person)

// const person2 ={
//     name: 'Fire on the storm',
//     job: 'employed',
//     adress: 'Carolina USA',
//     kids: 4
// };
// Object.seal(person2);
// person2.name = 'Don t';// Object.seal() omogucava menjanje vrednosti objekta
// person2.status = 'critics';// seal() ne dozvoljava dodavanje novih  key-> value
// console.log(person2);

// //Object.entries

// //Object.is

// Object.is(person, person2); // nisu isti samo jer dva ista objekta su samo ista ako pokazuju na isti objekat tj po referenci


//Spread operator ...
const imena = ['Jo', 'Smith', 'Paul'];

const novaImena =[...imena];
console.log(novaImena);

const dodajNaPRviNiz = ['Isko',...imena];
console.log(dodajNaPRviNiz);


//SEtovi I MAP=ovi

const  brojevi = [1, 2, 1, 5, 6, 8, 11];
const nemaDuplih = new Set(brojevi);
console.log(nemaDuplih);///nije itrabilan tj. ne mozemo da radimosa fja ma za nizove
// drugi nacin kako da fltriramo duple clanove niza
const bezDuplihNiz = [...new Set(brojevi)];
console.log(bezDuplihNiz);

///Spread radi izmedju[] i {} zagrada tj nizova i objekata;


const nacin={
    name:'ime',
    prezime: 'prezime'
}
const drugiNCIN = {
    ...nacin,
    status: 'dgdggd'
}
console.log(drugiNCIN);

///niz objekata, kako sa map()nkcijom da vraca niz objekata ali samo sa nekim odredjenim key=>value pairs=ima


const nizObj = [
                {firstName:"John", lastName:"Doe", age:46},  
                {firstName:"Smith", lastName:"Mark", age:46},  
                {firstName:"Bjorne", lastName:"Strauis", age:46}
            ];

const nizSaNekimKeyValuePairs = nizObj.map(el=>{
    return {firstName: el.firstName, age: el.age}
});

console.log(nizSaNekimKeyValuePairs)