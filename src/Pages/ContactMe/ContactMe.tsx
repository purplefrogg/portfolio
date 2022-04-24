import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AlertStatus from './AlertStatus'
import ContactInput from './ContactInput'
import style from './ContactMe.module.scss'
export const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null)
  const [messageStatus, setMessageStatus] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setMessageStatus('')
    }, 5000)
  }, [messageStatus])

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_73n9zzv',
        'template_w8ffq8n',
        //@ts-ignore
        form.current,
        '9cWWgcarON1NEc9A0'
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
    <div className={style.Contact}>
      <div className={style.content_conteiner}>
        {messageStatus && <AlertStatus status={messageStatus} />}
        <form ref={form} onSubmit={sendEmail} id='ContactMe'>
          <div className={style.title}>Send A Message</div>
          <ContactInput name={'name'} placeholder={'Full Name'} />
          <ContactInput name={'email'} placeholder={'E-mail'} />
          <div className={style.Contact_input}>
            <textarea
              className={style.input100}
              name='message'
              placeholder='Your Message'
            />
          </div>
          <input type='submit' value='Send' className={style.submit} />
        </form>
      </div>
    </div>
  )
}
