'use client'
import { useState } from "react"
export default function Dclock() {
  let time = new Date().toLocaleTimeString()

  const [ctime, setTime] = useState(time)

  function UpdateTime() {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)

  return (
    <div className="flex flex-row items-center justify-center py-6 mt-4 rounded-xl bg-info text-white text-7xl">{ctime}</div>
  )
}
