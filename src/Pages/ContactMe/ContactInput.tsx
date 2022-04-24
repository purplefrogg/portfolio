import style from './ContactMe.module.scss'

interface ContactInputProps {
  name: string
  placeholder: string
}

const ContactInput = ({ name, placeholder }: ContactInputProps) => {
  return (
    <div className={style.Contact_input}>
      <input
        className={style.input100}
        type='text'
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default ContactInput
