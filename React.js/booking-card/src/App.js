import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <Card nameOf={'Apartmani Bogdanovic'} grade ={'9.0'} typeOfAprtmnt = {'Studio'} price = {1.366} src = {'https://cf.bstatic.com/xdata/images/hotel/square200/300465225.webp?k=e356a459a01ae38ae8af27035f0393fb2e504899073808de780c3e2edc3c06a1&o=&s=1'} />
      <Card nameOf={'S&M Apartmani Zlatibor'} grade ={'9.0'} typeOfAprtmnt = {'Studio'} price = {1.366} src = {'https://cf.bstatic.com/xdata/images/hotel/square200/300465225.webp?k=e356a459a01ae38ae8af27035f0393fb2e504899073808de780c3e2edc3c06a1&o=&s=1'} />

    </div>
  );
}

export default App;
