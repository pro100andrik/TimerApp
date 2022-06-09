function Time(props) {
  return (
    <div className='time'> {props.formatTime(props.time)} </div>
  )
}

export default Time
