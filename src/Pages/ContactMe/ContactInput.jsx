import style from "./ContactMe.module.scss"

const ContactInput = ({ name, placeholder }) => {
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
