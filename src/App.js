import React from 'react';
import './App.css';
import Videobg from './components/Videobg';

function App() {
  return (
    <div className="App">
     
      <nav className="navbar">
        <h1 className="logo">Anime World</h1>
        <ul className="nav-links">
        <li><a href='https://personal-myportfolio.netlify.app/'>Home</a></li>
          <li><a href='https://www.linkedin.com/in/praveen-p-r-15-09-2004-ttp/'>Update</a></li>
          <li><a href='https://github.com/PRAVEEN-PR-2004'>Trend</a></li>
        </ul>
      </nav>

      
      <Videobg/>

     
      <div className="content">
        <h2 className='heading'>Welcome to Anime World</h2>
        <p className='para'>You can watch any kind of anime on this website completely for free.</p>
        <div className="buttons">
          <button className="cbtn" >watch</button>
          <button className="btn">login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
