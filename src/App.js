import React from "react"
import "./App.scss"
import About from "./features/About"
import ContactMe from "./features/ContactMe"
import Footer from "./features/Footer"
import Header from "./features/Header"
import Home from "./features/Home"
import Projects from "./features/Projects"

function App() {
  return (
    <div>
      <div className={`App`}>
        <Header />
        <Home />
        <About />
        <Projects />
        <ContactMe />

        <Footer />
      </div>
    </div>
  )
}

export default App
