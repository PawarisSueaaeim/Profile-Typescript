import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar home={'Home'} title={{
        link1: 'About',
        link2: 'Experience',
        link3: 'Contact Us',
      }}/>
    </div>
  );
}

export default App;
