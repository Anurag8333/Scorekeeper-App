import './App.css';
import Scoreboard from './components/Scoreboard';
import {Header} from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Scoreboard></Scoreboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
