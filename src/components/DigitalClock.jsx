import React, { useState } from 'react';
import css from './DigitalClock.module.css'

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);


  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-gray-300 mb-4">Live Digital Clock</h1>
      {/* <h1 className={css.heading}>Live Digital Clock</h1> */}
      <h1 className="text-6xl text-white font-mono">{time}</h1>
    </div>
  )
}

export default DigitalClock
