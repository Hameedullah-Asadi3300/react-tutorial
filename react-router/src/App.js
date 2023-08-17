/*
To use router, we need to import a component named'BrowserRouter' which routes our entire application.
'Link' is also a component which is used to link between different pages.

To create anchor tags or links between 

*/

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
  
//  pages
import Home from './pages/Home.js';
import About from './pages/About.js'
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';


function App() {
  return (
    /*  Here we want to route our entire application with the component 'BrowserRouter' Component and
        inside this component, we can set our different routes and decides which component should be rendred 
        for each route.
    */
    <BrowserRouter>
      <header>
        <nav>
          <h1>Job Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
          

      
          </nav>
      </header>
      <main>
        {/* The 'Routes' is a parent component for multiple different route component and we set 
        a Route component for every route in our application. */}
        <Routes>
          {/* The following Route component is for homepage. In the elemtn, the component name goes. */}
          <Route path="/" element={<Home />} />              {/*We can also write the above code as follows: <Route index element=""{<Home />} />*/}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </main>
  </BrowserRouter>
  );
}


export default App;
