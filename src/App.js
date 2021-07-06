import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';
import { action, recommended } from './Urls'
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost url={recommended} title='Recomended' />
    <Rowpost url={action} title='Action' isMedium/>
    
    
    </div>
  );
}

export default App;
