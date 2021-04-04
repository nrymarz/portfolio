import About from './components/about.js'
import MainNav from './components/mainNav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav/>
      <About/>
    </div>
  );
}

export default App;
