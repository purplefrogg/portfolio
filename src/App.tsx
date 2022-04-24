import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader'

import './App.scss'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Loadingbar from './Components/Loadingbar'
import { About, ContactMe, Home, Projects } from './Pages'
WebFont.load({
  custom: {
    families: ['SquarePeg', 'Rubik', 'Comfortaa'],
  },
})
const App = () => {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      <div className={`App`}>
        {Loading ? (
          <Loadingbar />
        ) : (
          <React.Fragment>
            <Header />

            <Home />
            <About />
            <Projects />
            <ContactMe />

            <Footer />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default App
