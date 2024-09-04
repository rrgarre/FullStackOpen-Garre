const Notification = ({message, isError}) => {
  if(message === null)
    return null
  return(
    <div className={isError ? 'error' : 'confirm'}>
      {message}
    </div>
  )
}

export default Notification