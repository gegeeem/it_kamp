///then(imefukcije) // bez zagrada jer ako je fja() onda ona vraca return iz , ovu fju smo definisali vanpoziva
// function mojaFunc(){
//     console.log('komande');
//     function drugafunc(){

//         console.log('druga');
//     }
//     return drugafunc;//ovo je referenca na fju drugafunc izostavili smo zagrade ali smo je dole pozvali
// }
// mojaFunc();
// res = mojaFunc();/// vratili smo referencu pomocu mojaFunc() to je referenca na drugfunc
// res();
   
// drugaciji primer malo sa argumentima
// function mojaFunc(){
//     console.log('komande');
//     function drugafunc(arg1){

//         console.log('druga',arg1);
//     }
//     return drugafunc;//ovo je referenca na fju drugafunc izostavili smo zagrade ali smo je dole pozvali
// }
// mojaFunc();
// res = mojaFunc();/// vratili smo referencu pomocu mojaFunc() to je referenca na drugfunc

// var1 = 45454;
// res(var1);











// closure, 
// function mojaFunc(b){
//     a= 10;
//     console.log(a + b);
//     function drugafunc(arg1){
    

//         console.log('druga');
//         console.log(arg1 +a);//koristimo a = 10, varijablu i ako se ona vise ne koristi u programu u
//     }
//     return drugafunc;//ovo je referenca na fju drugafunc izostavili smo zagrade ali smo je dole pozvali
// }
// mojaFunc();
// res = mojaFunc();/// vratili smo referencu pomocu mojaFunc() to je referenca na drugfunc
// res(5);

// fja()() kada pozivamo fju unutar fje

//hoisting scope and closure bitno je asynchronous
//currying u mdn






//--------------------------------------



fetch('https://catfact.ninja/facts')
.then((result)=>{
    result.result.json;


})

// nastvai sa slike



//------------

///HTTP-> 