import backgroundImage from './images/background2.jpg'

import Game from './components/main.js'
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${backgroundImage})`}}>
     
     <Game />
    </div>
  );
}

export default App;
