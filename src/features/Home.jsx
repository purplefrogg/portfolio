import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { jsIcon, nextIcon, reactIcon, reduxIcon } from "../assets"

const Home = () => {
  const [message, setMessage] = useState([])
  const [message2, setMessage2] = useState([])
  const [message3, setMessage3] = useState([])
  const [message4, setMessage4] = useState([])

  useEffect(() => {
    let text = "Hello world!"
    let text2 = "My name is Kuanysh"
    let text3 = "I'm a front-end"
    let text4 = "Developer"
    if (message.length < text.length) {
      setTimeout(() => {
        setMessage([...message, text[message.length]])
      }, 100)
    }
    if (message.length === text.length && message2.length < text2.length) {
      setTimeout(() => {
        setMessage2([...message2, text2[message2.length]])
      }, 100)
    }
    if (message2.length === text2.length && message3.length < text3.length) {
      setTimeout(() => {
        setMessage3([...message3, text3[message3.length]])
      }, 100)
    }
    if (message3.length === text3.length && message4.length < text4.length) {
      setTimeout(() => {
        setMessage4([...message4, text4[message4.length]])
      }, 100)
    }
  }, [message, message2, message3, message4])

  return (
    <>
      <div className='content_conteiner'>
        <div id='Home' className='Home'>
          <Message
            key={1}
            message={message}
            messageIndex={1}
            imageSrc={jsIcon}
          />

          <Message
            key={2}
            message={message2}
            messageIndex={2}
            imageSrc={nextIcon}
            letterStep={12}
          />
          <Message
            key={3}
            message={message3}
            messageIndex={3}
            imageSrc={reduxIcon}
            letterStep={30}
          />
          <Message
            key={4}
            message={message4}
            messageIndex={4}
            imageSrc={reactIcon}
            letterStep={45}
          />
        </div>
      </div>
    </>
  )
}

export default Home

const Message = ({ message, messageIndex, imageSrc, letterStep = 0 }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  })
  return (
    <span className={`message${messageIndex} message-content`}>
      <span className='message-text'>
        {message.map((value, index) => (
          <span key={index} className={`letter-${index + letterStep}`}>
            {value}
          </span>
        ))}
      </span>
      <div ref={ref} className={inView ? "imageWrap inView" : "imageWrap"}>
        <img src={imageSrc} alt='' />
      </div>
    </span>
  )
}
