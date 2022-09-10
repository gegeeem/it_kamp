// // napravti fje za sva tri zadatka

// //1. Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.
 
// const miles = [15,20,1,60,45,120];

// function fja(mil){
//     const kilometres = mil.map((el, index, arr)=> el*1.6);
//    const  totalDistanceInKilometers = kilometres.reduce((acc, curr)=>acc + curr);
//    return totalDistanceInKilometers;

// }
// fja(miles);

//zadatak2 parni brojevi kvadarati i suma tih kvadrata
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumOfKV(num){
//     const parni = num.filter((el)=> el % 2 ===0).map((el)=> el**2).reduce((acc, prev)=> acc + prev);
//     return parni;
// }
// sumOfKV(numbers);

// 3.Create a new array whose elements is in uppercase of words present in the original array.
 
let strings = ["avengers", "captain america", "ironman", "black panther"];

function toUpper(str){
    const toUp =  str.map((el, index, arr)=>arr[index].toUpperCase());
    return toUp;

}


console.log(toUpper(strings));
