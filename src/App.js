import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componenet/Home';
import Navbar from './Componenet/Navbar';
import About from './Componenet/About';
import Project from './Componenet/Project';
import Contact from './Componenet/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='/Contact' element={<Contact/>}/>




            
       </Routes>
    </div>
  );
}

export default App;
