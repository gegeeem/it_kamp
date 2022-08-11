import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title';
import Greeeting from './components/Greeting/Greeting';
import Card from './components/Card/Card';

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Title name = 'Emire' age = {21} nekiProp = {true}/>
    //     <Greeeting name = 'Emir' fontSize = {30}><p>children pasus</p></Greeeting>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    // </div>
    <div className='card-container'>
      <Card name={'Emir'} src = {'https://www.w3schools.com/howto/img_avatar.png'} occupation = {'okupacija'}/>
    </div>
  );
}

export default App;
