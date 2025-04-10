import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Cricket from './components/cricket.jsx';
import Contact from './components/contact.jsx';
import Tennis from './components/tennis.jsx';
import Football from './components/footbal.jsx';
//import Navigation from './components/navigation.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/football" element={<Football />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

//app.css
///#header{
  //background-color: rgb(69, 49, 49);
//}
//h1{
  //color:rgb(20, 0, 72);
//}
//header{
//background-color: rgb(153, 149, 149)
//}
//h2{
  //background-color: rgb(10, 10, 10);
//}