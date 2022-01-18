import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Landing from './Landing'
import BoxPlanner from './BoxPlanner'
import Contact from './Contact'
import OurStory from './OurStory'
import Footer from './Footer'

function App() {
    
  return (
    <div className='app'>
    <Nav />
    <Routes>
      <Route path='/'>
        <Route index element={<Landing />} />

        <Route path='/boxplanner' element={<BoxPlanner />} />
        <Route path='/ourstory' element={<OurStory />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
