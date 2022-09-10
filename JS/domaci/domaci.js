function mnozenje (){
    let kolikoBrojeva = prompt('Unesite koliko brojeva zelite da pomnozite');
    kolikoBrojeva = parseInt(kolikoBrojeva);
    const nizBrojeva = [];
    let proizvod = 1;
    for(i=0; i < kolikoBrojeva; i++){
        nizBrojeva[i] = prompt('Unesite: '+ (i+1) + ' broj:');
        nizBrojeva[i] = parseInt(nizBrojeva[i]);
        proizvod = proizvod * nizBrojeva[i];
        // console.log(proizvod);
    }
    return prompt('Proizvod unesenih brojeva je: ' + proizvod);
}
console.log(mnozenje());