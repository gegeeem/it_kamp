///FizzBuzz chanlange

for(let i = 1; i <= 100; i++ ){
    if(!(i % 3) && !(i % 5)){ //!(i mod 3 = 0) and !(i mod 5 = 0)=>!(0) and !(0)=>a and 1=> 1 true
        console.log('FizzBuzz');
    }else if(!(i % 3)){         // !(i mod 3 = 0) => !(0) => true
        console.log('Fizz');
    }else if (!(i % 5)){        // !(i mod 5 = 0) => !(0) => true
        console.log('Buzz');
    }else {
        console.log(i);
    }
    
}