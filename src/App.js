import About from './components/about.js'
import MainNav from './components/mainNav.js'
import BlogPosts from './containers/blogPosts.js'
import Contact from './components/contact.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav/>
      <About/>
      <BlogPosts/>
      <Contact/>
    </div>
  );
}

export default App;
