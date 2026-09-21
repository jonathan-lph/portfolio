import { useState } from 'react'
import type { ReactNode } from 'react'
import { HandednessContext } from './HandednessContext'

function HandednessProvider({ children }: { children: ReactNode }) {
  const [leftHanded, setLeftHanded] = useState(false)
  const toggle = () => setLeftHanded((value) => !value)

  return (
    <HandednessContext.Provider value={{ leftHanded, toggle }}>
      {children}
    </HandednessContext.Provider>
  )
}

export default HandednessProvider
