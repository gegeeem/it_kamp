import './App.css';
import Title from './components/Title/Title';
import Greeeting from './components/Greeting/Greeting';
import Card from './components/Card/Card';
import Form from './components/Form.js/Form';
import Counter from './components/Counter/Counter';
import {useState} from 'react';

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
const [component, setComponent] = useState(0);// number of komponents default iz one
const [stateBeetweenComp, setStateBetweenComp] =useState(0);
function addCom(number, comp, stateBeetweenComp){
   let componentsArr = [] ;
 for(let i = 0; i <= number; i++ ){
   componentsArr.push(<Counter key = {i} sharedState = {stateBeetweenComp}/>);
 }
// componentsArr = componentsArr.map(e=>e)
// const componentsArr = comp;
console.log(componentsArr);
return <>
        <button onClick={()=>setComponent(prev=>prev+1)}>Add new Counter{component}</button>
        <button onClick={()=>setStateBetweenComp(false)}>ALL Reset {stateBeetweenComp}</button>
          {componentsArr}
        </>;
}

return(
  <div className='card-container'>
    
    {addCom(component,<Counter />)}
  </div>
)
//counter end
  
}

export default App;
