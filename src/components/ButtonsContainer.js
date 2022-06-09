import Button from './Button';
function ButtonsContainer(props) {
  return(
    <div className='buttons-container'>
      <Button name='Start' onClick={props.handleStart}/>
      <Button name='Stop' onClick={props.handleStop} />
      <Button name='Restart' onClick={props.handleRestart} />
      <Button name='Lap' onClick={props.handleLap} />
      <Button name='Clear Laps' onClick={props.handleClear} />
    </div>
  )
}

export default ButtonsContainer
