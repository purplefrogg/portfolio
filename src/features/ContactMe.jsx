import React, { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const ContactMe = () => {
  const form = useRef()
  const [messageStatus, setMessageStatus] = useState("")
  useEffect(() => {
    setTimeout(() => {
      setMessageStatus("")
    }, 5000)
  }, [messageStatus])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_73n9zzv",
        "template_w8ffq8n",
        form.current,
        "9cWWgcarON1NEc9A0"
      )
      .then(
        (result) => {
          setMessageStatus(result.text)
        },
        (error) => {
          setMessageStatus(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div className='Contact'>
      {messageStatus && <AlertStatus status={messageStatus} />}
      <form ref={form} onSubmit={sendEmail} id='ContactMe'>
        <div className='Contact_title'>Send A Message</div>
        <div className='Contact_input'>
          <input
            className='input100'
            type='text'
            name='name'
            placeholder='Full Name'
          />
        </div>
        <div className='Contact_input'>
          <input
            className='input100'
            type='text'
            name='email'
            placeholder='E-mail'
          />
        </div>
        <div className='Contact_input'>
          <textarea
            className='input100'
            name='message'
            placeholder='Your Message'
          />
        </div>
        <input type='submit' value='Send' className='submit' />
      </form>
    </div>
  )
}

export default ContactMe

const AlertStatus = ({ status }) => {
  return (
    <div className={`messageStatus ${status === "OK" ? "" : "error"}`}>
      {status === "OK"
        ? "your message submitted successfully"
        : "Oops, something went wrong"}
    </div>
  )
}
