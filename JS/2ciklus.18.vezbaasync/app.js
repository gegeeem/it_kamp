// /// calback from medium website
// function arrayMap(arr, callback){
//     res = [];
//     for(let i=0; i< arr.length; i++){
//         newEl = callback(arr[i]);
//         res.push(newEl);
//     }
//     return res;
// }

// niz = arrayMap([1,2 ,2 ,5], function(arg1){
//     return arg1 * 2;
// });

// ///ili drugacije
// function myFunc(el){
//     rerturn el*2;
// }
// re = [1, 2, 3, 5,4].map(myFunc);
// console.log(res)


// /Promises
posao = new Promise((resolve, reject)=>{
    response = 400;
    if(response === 200){
        resolve();
    }else {
        reject();
    }
});
posao
.then(()=>{// se veze za uspesno tj ako je zadovoljen uslov gore u if(response === 200) i i izvrasava resolve()
    console.log('Uspesno ste uradili posao');
})
.catch((err)=>{
console.log('neuspesno povukao podatke');// izvrsava reject() iz elsa gore
});
/// pored then 