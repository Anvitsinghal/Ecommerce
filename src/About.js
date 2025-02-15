import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext } from './context/productcontext';

const About = () => {
  const variable = useContext(AppContext);
  return (
    <div>
      {variable}
      <HeroSection name="Anvit Ecommerce"/>
    </div>
  )
}

export default About
