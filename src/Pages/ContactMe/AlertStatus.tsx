import style from './ContactMe.module.scss'

interface AlertStatusProps {
  status: string
}

const AlertStatus = ({ status }: AlertStatusProps) => {
  return (
    <div className={style.messageStatus}>
      {status === 'OK'
        ? 'your message submitted successfully'
        : 'Oops, something went wrong'}
    </div>
  )
}

export default AlertStatus
