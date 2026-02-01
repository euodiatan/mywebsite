import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const sections = ["home", "skills", "projects"];

  return (
    <>
      <Navbar categories={sections}/>
      <main className="container">
        <Home/>
        <Skills/>
        <Projects/>
      </main>
    </>
  )
}

export default App
