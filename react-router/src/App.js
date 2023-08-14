/*
To use router, we need to import a component named'BrowserRouter' which routes our entire application.
'Link' is also a component which is used to link between different pages.

To create anchor tags or links between 





*/

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
//  pages
import Home from './pages/Home.js';
import About from './pages/About.js'


function App() {
  return (
    /*  Here we want to route our entire application with the component 'BrowserRouter' Component and
        inside this component, we can set our different routes and decides which component should be rendred 
        for each route.
    */
  <BrowserRouter>
      <main>
        {/* The 'Routes' is a parent component for multiple different route component and we set 
        a Route component for every route in our application. */}
        <Routes>
          {/* The following Route component is for homepage. In the elemtn, the component name goes. */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />


        </Routes>
    </main>
  </BrowserRouter>
  );
}


export default App;
