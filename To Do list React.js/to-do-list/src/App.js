import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import AddItems from './components/AddItms/AddItems';
import LiItem from './components/LiItem/LiItem';

function App() {
  return (
    <div className="App">
      <header class="bg-success text-white p-4 mb-3">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
                <h1 id="header-title">Item Lister</h1>
            </div>
            <Search />
          </div>
        </div>
      </header>
      <div class="container">
       <div id="main" class="card card-body">
        <AddItems />
        <h2 class="title">Items</h2>
        <ul id="items" class="list-group">
          <LiItem content={'New Item1'} />
          <LiItem content={'New Item2'} />
          <LiItem content={'New Item3'} />
          
        </ul>
       </div>
      </div>
    </div>
  );
}

export default App;
