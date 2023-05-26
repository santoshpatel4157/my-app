import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import './App.scss';
import Home from './component/Home/Home';
import MovieDetails from './component/MovieDetails/MovieDetails';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='container'>
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Movie/:imbdID" Component={MovieDetails} />
        <Route Component={PageNotFound} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
