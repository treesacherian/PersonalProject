import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'constellation/dist';
import {  Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home'
import AboutMe from './components/AboutMe'
import Jobs from './components/Jobs'
import Reskill from "./components/Reskill"


function App() {
  return (
    <div style={{backgroundColor:"#012613", position:"sticky"}}>
      <Router>
        <nav >

          <Link to='/' style={{margin:"5px"}}>Home</Link>
          <Link to='/aboutme' style={{margin:"5px"}}>AboutMe</Link>
          <Link to='/jobs' style={{margin:"5px"}}>Jobs</Link>
          <Link to='/reskilling' style={{margin:"5px"}}>Reskilling</Link>
        </nav>



        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/reskilling' element={<Reskill />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
