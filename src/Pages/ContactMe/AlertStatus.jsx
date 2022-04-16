const AlertStatus = ({ status }) => {
  return (
    <div className={`messageStatus ${status === "OK" ? "" : "error"}`}>
      {status === "OK"
        ? "your message submitted successfully"
        : "Oops, something went wrong"}
    </div>
  )
}

export default AlertStatus
