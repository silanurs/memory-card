import backgroundImage from './images/background2.jpg'
import Header from './components/header.js'
import Game from './components/main.js'
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${backgroundImage})`}}>
     <Header />
     <Game />
    </div>
  );
}

export default App;
