// const DATA1 = [2, 26, 38, 75, 11, 29];
// const  DATA2 = ['a', 'b','c', 'd', 'e'];
// //prvi deo napraviti pomocni niz koji ce da sardi ova dva niza spojena
// //2. pravimo drugi pomocni niz i iz pomocni niz sto smo prethodno napravili u u njemu smestimo sve parna brojeve
// //3. u taj niz parnih brojeva umetnuti broj 10 i broj 20 ivratimo dva prva niza
// // sve to da bude jedna funkcija
// function fja (dat1, dat2){
//     const pomocni1 = dat1.concat(dat2);
//     const pomocni2 = [];
//     for(const key of pomocni1){
//         if(key % 2 === 0){
//             pomocni2.unshift(key);
//         }
//     }
//     pomocni2.push(10, 20);
//     return [pomocni1, pomocni2];
// }
// console.log(fja(DATA1, DATA2));

///Filter metoda filter();

// const words = ['televizor', 'daljinski', 'telefon', 'voda', 'ranac', 'stolica'];
// const filteredArray = words.filter(el=>el.length < 6);


// const numbers = [2, 3, 6, 78, 100, 145];
// const filteredNumbers = words.concat(numbers).filter(Number);/// vezane metode moguce je...


/// map() metoda

// const numbers = [2, 5, 3, 1, 10, 8, 7]
// const squareNumbers = num.map((el,index, array) => {
//     if(index === 0 || index === 1 || index ===5){
//         return el*el;
//     }else {
//         return el;
//     }
   
// });
// console.log(squareNumbers);


///ZADATAk. napisati fju dogAgeToHuman, u ovoj fji da napravimo niz godina koji ce data1 pretvoriti u ljudske godine
//ako el > 2 onda ima el * 7
//ako el >2  i manji od 8 = (el * 4) / 2
// i da su godine manje od 10 na kraju niza

const DATA1 =  [1, 3, 4, 7, 14];
const dogAgeToHuman = (ages)=>{
    const humanAge =ages.map((el) => { ///map() MORA DA VRATI ISTU VELICINU NIZA BROJEVA
        if(el > 2 && el < 8){
            return (el*4)/2;
        }else if(el > 2){
            return el*7;
        }
    })
    const lessThan10HumanAge = humanAge.filter(el => el < 10);
    return lessThan10HumanAge;
};
console.log(dogAgeToHuman(DATA1))

//zadaci za vezbu codesource freecodecamp