// const rec = "Sta ste danas radili";
// let suma = 0;
// for (let i = 0; i < rec.length; i++) {
//     if(rec[i] === ' '){
//         suma = suma + 1;
//     }
    
// }
// console.log(suma);


const string = "ovo je string";
let newString='';
for (let i = 0; i < string.length; i++) {
    const element = string[i];
    // if(string[i + 1] === " " ){
    //     newString +=element.toLocaleUpperCase();

    // }else if( i+1 === string.length){
    //     newString +=element.toLocaleUpperCase();
    // }
    // else{
    //     newString += element;
    // }
    if(string[i] === " " ){
        for(j = i; j = i - string.length; j++ ){
            element[j] = string[j+1];
        }
        
    }else{
    element[i] = string[i]; 
    }

    
}
console.log(newString);