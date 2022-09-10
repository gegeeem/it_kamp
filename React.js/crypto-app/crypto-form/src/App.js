import logo from './logo.svg';
import './App.css';
import CryptoForm from './components/CryptoForm/CryptoForm';
import React, {usestate} from 'react';

function App() {
  return (
    <div className="App">
      <CryptoForm />
    </div>
  );
}

export default App;
