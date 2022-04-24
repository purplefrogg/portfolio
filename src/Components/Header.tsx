import React, { useState, useEffect } from 'react'
import { menuIcon } from '../assets/index'

const Header = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState(true)
  const [toggleMenu, setToggleMenu] = useState(true)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    if (screenSize <= 599) setShowMenu(false)
    else setShowMenu(true)
  }, [screenSize])
  return (
    <header className='Header'>
      <div className='content_conteiner'>
        <button
          className='menu_button menu_item'
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <img alt='' src={menuIcon} />
        </button>

        <div
          onClick={() => setToggleMenu(!toggleMenu)}
          className={showMenu || toggleMenu ? 'menu' : 'horizontal-menu'}
        >
          <a className='menu_item' href='#Home'>
            HOME
          </a>
          <a className='menu_item' href='#About'>
            ABOUT
          </a>
          <a className='menu_item' href='#Projects'>
            PROJECTS
          </a>
          <a className='menu_item' href='#ContactMe'>
            CONTACTME
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
