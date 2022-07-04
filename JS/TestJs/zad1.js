function powerOfNumber(){
    let unos = prompt('Insert number');

    unos = parseFloat(unos);
    const power = unos*unos;
    console.log(`The pow of ${unos} is ${power}`)
}
powerOfNumber();