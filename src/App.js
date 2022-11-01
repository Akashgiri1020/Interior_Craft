import React from 'react';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import AboutUS from './Pages/AboutUS';
import ContactUs from './Pages/ContactUs';
function App() {
	return (
		<BrowserRouter>
      <Navbar></Navbar>
      <Sidebar>
	  <Routes>
          <Route path="/" element={<Home />} />
		      <Route path="/AboutUs" element={<AboutUS />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Sidebar>
      
    </BrowserRouter>
	);
}

export default App;
