import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import BoxPlanner from './BoxPlanner'
import Shipper from './Shipper'
import ShipperDetails from './ShipperDetails'
import Planner from './Planner'
import Pack from './Pack'
import SendBox from './SendBox'
import Contact from './Contact'
import OurStory from './OurStory'
import Footer from './Footer'

function App() {
    
  return (
    <div className='app'>
    <Header />
    <Routes>
      <Route path='/'>
        <Route index element={<Landing />} />

        <Route path='/boxplanner' element={<BoxPlanner />} />
        <Route path='/shipper' element={<Shipper />} />
        <Route path='/shipperdetails' element={<ShipperDetails />} />
        <Route path='/planner' element={<Planner />} />
        <Route path='/pack' element={<Pack />} />
        <Route path='/sendbox' element={<SendBox />} />
        <Route path='/ourstory' element={<OurStory />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
