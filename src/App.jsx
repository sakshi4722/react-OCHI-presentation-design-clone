import React from 'react'
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import Marquee from './component/Marquee';
import About from './component/About';
import RoundedEyes from './component/RoundedEyes';
import FeaturedProjects from './component/FeaturedProjects';
import Cards from './component/Cards';
import Footer from './component/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import ReadyToStart from './component/ReadyToStart';
// nav bar
// landing page
//marquee
//about
//playful
//cards
//cards
//ready to start
//foooter
const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

return (
    <div className=' w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <RoundedEyes/>
      <FeaturedProjects/>
      <Cards/>
      <ReadyToStart/>
      <Footer/>
    </div>
  )
}

export default App