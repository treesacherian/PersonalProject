import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'constellation/dist';
import {  Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home'
import AboutMe from './components/AboutMe'
import Jobs from './components/Jobs'
import Reskill from "./components/Reskill"
import UpdateJob from './components/UpdateJob'
import Project1 from './components/Project1'
import IncProject2 from './components/IncProject2'


function App() {
  return (
    <div style={{backgroundColor:"#012613", position:"sticky", }}>
      <Router>
        <nav >

          <Link to='/' style={{margin:"5px", color:"#0d8aff"}}>Home</Link>
          <Link to='/aboutme' style={{margin:"5px",color:"#0d8aff"}}>AboutMe</Link>
          <Link to='/jobs' style={{margin:"5px",color:"#0d8aff"}}>Jobs</Link>
          <Link to='/reskilling' style={{margin:"5px",color:"#0d8aff"}}>Reskilling</Link>
        </nav>



        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/reskilling' element={<Reskill />} />
          <Route path='/update/:id' element={<UpdateJob />} />
          <Route path='/project1' element={<Project1 />} />
          <Route path='/incproj2' element={<IncProject2 />} />
          
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
