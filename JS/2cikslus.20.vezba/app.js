// prom =new Promise((res, rej)=>{
//     res();
// })
// prom.then(()=>{
//     prom.then(()=>{
//         console.log('B');
//     });
//     console.log('A');
// })
// prom.then(()=>{
//     console.log('C');
// });
// /// output ACB

// gore naveden primer prmise za posao


// const getUsers = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=> response.json())
//     .then((res)=>{return console.log(res.map((el)=>el.address));});
// };
// getUsers();
//https://jsonplaceholder.typicode.com/users/userid endpoint

// query param(s) kod htttp adrese


// drugi primer

// const getUsers = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>response.json())
//     .then((res)=>{ const a = res.map((el)=>el.id); return a});
// };
// getUsers();

// async vraca promice


const obecanje  = async ()=>{
   
    
   
    try {
        const promise = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await promise.json();
        console.log(json);
        if(json){
            return json;
        }else{
            throw new Error('greska');
        }
    
    } catch (error) {
        console.log(error);
    }
    
};
obecanje();