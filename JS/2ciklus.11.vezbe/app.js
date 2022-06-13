// object, skup osobina koje opisuju neku stvar

// const myCar = {
//     id: 1,
//     marka: 'Audi',
//     model: 'a4',
//     boja: 'crvena',
//     broj_sedista: 5,
//     //moze da bude i key: value , objkeat objekta i fja itd
//     kontakt: [062, 020],
//     servis: {
//         datum:'40. maj',
//         serviser: 'Pasovic',
//     },
//     udaran: true,
//     /// euro-motor nije dobra praksa sa srednjom crticom jer tada console smatra da je minus izmedjue dve reci
// };
// console.log('Moj auto je marke ' ,myCar.marka);
// console.log('Moj auto je marke ' ,myCar['marka']); //Drugi nacin

// console.log('Moj auto je servisirfan u ' ,myCar.servis.serviser);
// //ukoliko pristupimo nekom kljucu kji ne postoji u objektu onda consol vraca undefinied
// console.log('Moj auto je marke ' ,myCar['servis']['serviser']);

const radnik ={
    firstName: 'Bob',
    lastName: 'Euroblok',
    fullName: function(){ //metode na objektu
        console.log(this);
        return this.firstName + ' '+this.lastName  // this je referenca na dati objekat

    },
    age: 30,
    job: 'programer',
    contact: '062',
    adresa: 'Avnoja',
    radni_sati_mesecni: 170,
    dnevnica: 20,
    city: 'Novi Pazar',
    stanovanje: {
        function(){
            console.log(this);
    },
    }
    
};
console.log('Radnik ' + radnik.fullName()+', radi kao ' +radnik.job+ ', ima ' +radnik.age+ ' zivi u' +radnik.city + ' i prima platu ' +radnik.dnevnica * radnik.radni_sati_mesecni  );
console.log(this.window);

// call aplly bind()  kako menjamoo this



