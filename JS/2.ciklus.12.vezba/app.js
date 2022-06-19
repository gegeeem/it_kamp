// zadatak

// const students= [
//     {name: 'Faris', grade: 8, year: 2},
//     {name: 'Isko', grade: 10, year: 4},
//     {name: 'Aldin', grade: 8, year: 2},
//     {name: 'Amina', grade: 9, year: 4},
//     {name: 'Sabina', grade: 9, year: 3},
//     {name: 'Denis', grade: 7, year: 4},
//     {name: 'SEnad', grade: 6, year: 1}

// ];
// //u fji treba da napravimo niz koji ce sadrzati samo ocene i da nadjemo prsoecnu vr tih ocena, map reduce koristimo

// function getAvgGrade(array){
//     const grade = array.map(el=>el.grade);
//         const avgGrade = grade.reduce((acc, el, array) =>{console.log(acc);
//                                                           return (acc + el)}, 0)
        
//         return parseFloat((+(avgGrade/grade.length)).toFixed(2));
//     }
//     getAvgGrade(students);


    ///ako zelimo da od niza objekata odvojimo npr sva imena onda koristimo map()

    const person = {
        name: 'Jonh'
    };
    const car = {
        name: 'Audi'
    };
    function sayHello() {
        console.log(`Hello ${this.name}`);
    };
    sayHello.call(person); ///call prima objekat
    sayHello.call(car);

   const hrana = {food: 'Piza'};
    function favFood(text, rating){
        return `${this.food} ${text} ${rating}`;
    }
    console.log(favFood.call(hrana, 'je ukusna', 9));
    console.log(favFood.apply(hrana, ['je ukusna', 9]));
    const bindFuncReturnValue = favFood.bind(hrana);// bind() vraca celu fukciju i zato je potrebno opet da se pozove sa varijable
    console.log(bindFuncReturnValue('nije nesto', 9));


    