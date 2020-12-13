import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import StarShipResult from './components/StarShipResult';
import StarShips from './components/StarShips';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <p>Star Wars Ships</p>
          <Route exact path='/starship' render={({location}) => 
          <StarShipResult location={location}/>
          }/>
          <Route exact path='/' render={({location}) => 
          <StarShips location={location}/>
          }/>
        </div>
      </Switch>
    </BrowserRouter>
  );
}
    
    

export default App;
       
