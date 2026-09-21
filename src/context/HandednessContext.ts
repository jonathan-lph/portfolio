import { createContext, useContext } from 'react'

export type HandednessContextValue = {
  /** When true, the layout is mirrored for left-handed use (hand ↔ nav, back-to-top side). */
  leftHanded: boolean
  toggle: () => void
}

export const HandednessContext = createContext<HandednessContextValue | undefined>(undefined)

export function useHandedness() {
  const context = useContext(HandednessContext)
  if (!context) {
    throw new Error('useHandedness must be used within a HandednessProvider')
  }
  return context
}
