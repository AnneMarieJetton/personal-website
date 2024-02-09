//-------Files-----------
import './App.css';
import Home from './js-files/Home';

//-------Resources-------
import moonFavicon from './other-files/transparent_moon.png';

//-------Other-----------
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Main app
function App() {


  //------Function Calls-----

  setFavicon(moonFavicon);


  //----------Content--------

  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/personal-website" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );

}


//-------Function Definitions-------

//Changes the favicon to the specified image.
function setFavicon(url) {

  const link = document.querySelector("link[rel~='icon']");

  if (link) {
    link.href = url;
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = url;
    document.head.appendChild(newLink);
  }

}


//----------Export----------

export default App;