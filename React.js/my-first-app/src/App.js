import './App.css';
import Title from './components/Title/Title';
import Greeeting from './components/Greeting/Greeting';
import Card from './components/Card/Card';
import Form from './components/Form.js/Form';
import Counter from './components/Counter/Counter';
import {useState} from 'react';
import Team from './components/Team/TEam';

function App() {
  // return (
  //   // <div className="App">
  //   //   {/* <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <Title name = 'Emire' age = {21} nekiProp = {true}/>
  //   //     <Greeeting name = 'Emir' fontSize = {30}><p>children pasus</p></Greeeting>
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header> */}

  //   // </div>
  //   // <div className='card-container'>
  //   //   <Card verification name={'Emir'} src = {'https://www.w3schools.com/howto/img_avatar.png'} occupation = {'okupacija'}/>
  //   //   <Card verification={false} name={'Drugi'} src = {'https://www.w3schools.com/howto/img_avatar.png'} occupation = {'okupacija'}/>
  //   //   {/*  verification bez vrednosti je true*/}
  //   // </div>
    
  // );

  // const people = [
  //   'Creola Katherine Johnson: mathematician',
  //   'Mario José Molina-Pasquel Henríquez: chemist',
  //   'Mohammad Abdus Salam: physicist',
  //   'Percy Lavon Julian: chemist',
  //   'Subrahmanyan Chandrasekhar: astrophysicist'
  // ];
  // return(
  //     <div>
  //       {people.map((p)=>(
  //         <span><h3>{p}</h3></span>
  //       ))}
  //     </div>
  // )

  // const people = [
  //   {name:'Creola Katherine Johnson: mathematician'},
  //   {name: 'Mario José Molina-Pasquel Henríquez: chemist'},
  //   {name:'Mohammad Abdus Salam: physicist'}
  // ];
  // return(
  //   <>
  //     {people.map(p=>
  //       <Card name={p.name} />
  //       )}
  //   </>
  // )
  // 



// return(
//   <div className='card-container'>
//     <Form ></Form>
//   </div>
// )

/// counter
// const [component, setComponent] = useState(0);// number of komponents default iz one
// const [stateBeetweenComp, setStateBetweenComp] =useState(0);
// function addCom(number, comp, stateBeetweenComp){
//    let componentsArr = [] ;
//  for(let i = 0; i <= number; i++ ){
//    componentsArr.push(<Counter key = {i} sharedState = {stateBeetweenComp}/>);
//  }
// // componentsArr = componentsArr.map(e=>e)
// // const componentsArr = comp;
// console.log(componentsArr);
// return <>
//         <button onClick={()=>setComponent(prev=>prev+1)}>Add new Counter{component}</button>
//         <button onClick={()=>setStateBetweenComp(false)}>ALL Reset {stateBeetweenComp}</button>
//           {componentsArr}
//         </>;
// }

// return(
//   <div className='card-container'>
    
//     {addCom(component,<Counter />)}
//   </div>
// )
// //counter end


///upadate array
// const DATA = [
//   'Prva recenica',
//   'Druga recenica',
//   'Treca recenica',
//   'Cetvrta recenica'
// ];
// const n = [1, 3, 5, 6,];
// const [array, setArray] = useState(DATA);
// // function addArray(curr, sentence){
// //   curr.push(sentence)
// // }
// // const array = [...prev];
// //const rev_array = array.reverse(); nacin za rad sa nizom!!
// const generateNewWorld = ()=>Math.random().toString(36).slice(2,7)
// return(
//     <div className='card-container'>
//       <ul>
//       {array.map((el)=>(
//         <li key = {el}>{el}</li>
//       ))}
//       </ul>
//       <button onClick={()=>setArray((prev)=>[...prev,generateNewWorld()])}>Dodaj</button> {/*-- previ se kopija prethodnog state-a*/}
//       <button onClick={()=>setArray((prev) => {const rev = [...prev].reverse(); return rev;})}>Reverse</button>{/*reverse metoda menja dati array pa se ne moze primenjivati na state koji je trenutno array, jer valjda poslednji i pretposlednji se ne menjaju */}
//     </div>
//   )

//brisanje sa niza
const favoritesTeems = [
  {id: 0, name: 'Arsenal', points: 6},
  {id: 1, name: 'Man City', points: 6},
  {id: 3, name: 'PAzal', points: 4}
];
const [teams, setTeams] = useState(favoritesTeems);
const deleteTeam = (id) =>{
  const newTeams = teams.filter((team)=>team.id !== id);
  setTeams(newTeams);
}
return(
  <div className='card-container'>
    <button>Add new Team</button>
    {teams.map((e)=>
      <Team key = {e.id} name = {e.name} points = {e.points} onDelete = {()=>{deleteTeam(e.id)}}/>
    )}
  </div>
)
  
}

export default App;
