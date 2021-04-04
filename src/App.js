import About from './components/about.js'
import MainNav from './components/mainNav.js'
import BlogPosts from './containers/blogPosts.js'
import Contact from './components/contact.js'
import Projects from './containers/projects.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'animate.css/animate.min.css'

function App() {
  return (
    <div className="App">
      <MainNav/>
      <About/>
      <Projects/>
      <BlogPosts/>
      <Contact/>
    </div>
  );
}

export default App;
