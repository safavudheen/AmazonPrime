import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Rowpost from './Components/Rowpost/Rowpost';
import { action, recommended } from './Urls'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
   
    <Banner/>
    <Rowpost url={recommended} title='Recomended' />
    <Rowpost url={action} title='Action' isMedium/>
    
    
    </div>
  );
}

export default App;
