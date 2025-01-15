import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Feature from '../components/Feature'
import Review from '../components/Review'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
    <Navbar /> 
    <main>
      <Hero />
      <About />
      <Feature />
      <Review />
      <Contact />
    </main>
    <Footer />
  </div>
  )
}

export default Home
