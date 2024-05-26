'use client'
import { useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export default function Aclock() {
  let time = new Date().toLocaleTimeString()

  const [ctime, setTime] = useState(time)

  function UpdateTime() {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return (
    <div className='bg-secondary flex items-center justify-center rounded-xl p-4'>
      <Clock value={ctime} size='45dvh' className={'text-white'} minuteHandWidth={5} secondHandWidth={5} locale='en-GB' />
    </div>
  );
}
