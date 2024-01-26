import { Route,Routes } from 'react-router-dom';
import './App.css';
//import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Skills } from './Components/Skills';
import { Resume } from './Components/Resume';
import { Projects } from './Components/Projects';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Skills' element={<Skills/>}></Route>
          <Route path='/Resume' element={<Resume/>}></Route>
          <Route path='/Projects' element={<Projects/>}></Route>
        </Routes> 
    </div>
  );
}

export default App;
