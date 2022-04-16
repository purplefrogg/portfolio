import React from "react"
import Popup from "reactjs-popup"
import { facebookIcon, telegramIcon, twitterIcon } from "../assets"
const Footer = () => {
  return (
    <div className='footer-basic'>
      <footer>
        <div className='social'>
          <a href='https://t.me/Wwefil' target='_blank' rel='noreferrer'>
            <i className='icon ion-social-instagram'>
              <img src={telegramIcon} alt='' />
            </i>
          </a>
          <Popup
            trigger={
              <a>
                <i className='icon ion-social-twitter'>
                  <img src={twitterIcon} alt='' />
                </i>
              </a>
            }
            position='bottom center'
          >
            <div>I do not use Twitter</div>
          </Popup>
          <Popup
            trigger={
              <a>
                <i className='icon ion-social-facebook'>
                  <img src={facebookIcon} alt='' />
                </i>
              </a>
            }
            position='bottom center'
          >
            <div>I do not use Facebook</div>
          </Popup>
        </div>

        <ul className='list-inline'>
          <li className='list-inline-item'>
            {" "}
            <a href='#Home'>HOME</a>
          </li>
          <li className='list-inline-item'>
            {" "}
            <a href='#Projects'>PROJECTS</a>
          </li>
          <li className='list-inline-item'>
            {" "}
            <a href='#ContactMe'>CONTACTME</a>
          </li>
        </ul>
        <p className='copyright'>Kuanysh © 2022</p>
      </footer>
    </div>
  )
}

export default Footer
