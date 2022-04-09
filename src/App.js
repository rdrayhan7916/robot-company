import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Mission from './Components/Mission/Mission';
import Rockets from './Components/Rockets/Rockets';

function App() {
  return (
    <div className="App">
     <Banner></Banner>
     <Mission></Mission>
     <Rockets></Rockets>
     <Footer></Footer>
    </div>
  );
}

export default App;
