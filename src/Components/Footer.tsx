import Popup from 'reactjs-popup'
import { facebookIcon, telegramIcon, twitterIcon } from '../assets/index'
const Footer = () => {
  return (
    <div className='footer-basic'>
      <Social />
      <NavMenu />
      <p className='copyright'>Kuanysh © 2022</p>
    </div>
  )
}

export default Footer

const Social = () => (
  <div className='social'>
    <div className='link_wrap'>
      <a href='https://t.me/Wwefil' target='_blank' rel='noreferrer'>
        <i className='icon ion-social-instagram'>
          <img src={telegramIcon} alt='' />
        </i>
      </a>
    </div>
    <Popup
      trigger={
        <div className='link_wrap'>
          <i className='icon ion-social-twitter'>
            <img src={twitterIcon} alt='' />
          </i>
        </div>
      }
      position='bottom center'
    >
      <div>I do not use Twitter</div>
    </Popup>
    <Popup
      trigger={
        <div className='link_wrap'>
          <i className='icon ion-social-facebook'>
            <img src={facebookIcon} alt='' />
          </i>
        </div>
      }
      position='bottom center'
    >
      <div>I do not use Facebook</div>
    </Popup>
  </div>
)

const NavMenu = () => (
  <ul className='list-inline'>
    <li className='link_wrap'>
      {' '}
      <a href='#Home'>HOME</a>
    </li>
    <li className='link_wrap'>
      {' '}
      <a href='#Projects'>PROJECTS</a>
    </li>
    <li className='link_wrap'>
      {' '}
      <a href='#ContactMe'>CONTACTME</a>
    </li>
  </ul>
)
