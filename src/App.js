import React from 'react'
import "./App.css"
import { Navbar , Hero , Features,Review,CTA,Footer} from "./components"
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Review />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
