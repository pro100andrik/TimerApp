import React from 'react';
import ButtonsContainer from './components/ButtonsContainer';
import Time from './components/Time';
import Laps from './components/Laps';

import './App.css';


//USING HOOKS

const { useState } = React;
const { useEffect } = React;

function App (){
  const [time, setTime] = useState(0);
  const [timerOn, setisTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);
  const handleStart = () => {
    setisTimerOn(true)
  }

  useEffect(() => {
    let timerInterval = null;

    if (timerOn) {
      timerInterval = setInterval(() => {
        setTime(time => time + 10)
      }, 10)
    }else{
      clearInterval(timerInterval)
    }
    return () => clearInterval(timerInterval)
  }, [timerOn]);


  const handleLap = () => {
    setLaps(prevLaps => [...prevLaps, formatTime(time)])
  }
  const handleStop = () => {
    setisTimerOn(false)
  }
  const handleRestart = () => {
    setisTimerOn(false);
    setTime(0);
    setLaps([])
  }
  const handleClear = () => {
    setLaps([])
  }

  return (
    <div className='mainContainer'> <span className='caption'> Stop Watch </span>
    <ButtonsContainer
    handleStart={handleStart}
    handleLap={handleLap}
    handleStop={handleStop}
    handleRestart={handleRestart}
    handleClear={handleClear}
    />
    <Time time={time} formatTime={formatTime}/>
    <Laps laps={laps}/>
     </div>
  )
}

function formatTime(time) {
  const minutes = ('0' + parseInt(time / 60 / 100 / 10 % 100)).slice(-2);
  const seconds = ('0' + parseInt(time / 100 / 10 % 60)).slice(-2);
  const miliseconds = ('0' + time / 10 % 100).slice(-2);
  return `${minutes}:${seconds}:${miliseconds}`
}


export default App;
