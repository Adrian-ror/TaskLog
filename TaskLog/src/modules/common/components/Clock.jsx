import { useEffect, useState } from 'react'

const Clock = () => {
  const [ctime, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  )

  const updateTime = () => {
    setTime(
      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    )
  }

  useEffect(() => {
    const update = () => {
      updateTime()
      requestAnimationFrame(update)
    }
    requestAnimationFrame(update)

    return () => cancelAnimationFrame(update) 
  }, [])

  return (
    <span className="inline-block mt-8 px-8 py-2 rounded-full text-xl font-bold text-white bg-red-800">
      {ctime}
    </span>
  )
}

export default Clock
