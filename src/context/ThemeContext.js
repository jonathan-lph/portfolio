// import { getAnalytics, logEvent } from 'firebase/analytics'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true)

  const toggleTheme = e => {
    // logEvent(getAnalytics(), 'theme_change', {theme: _theme})
    setDark(!dark)
  }

  useEffect(() => {
    const localPref = localStorage.getItem('site-dark-theme')
    if (localPref) {
      setDark(Boolean(localPref))
      return
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('site-dark-theme', dark)
    if (document) document.body.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ThemeContext.Provider value={{
      dark,
      toggleTheme,
    }}>
      <div id="themed-app" data-theme={dark ? 'dark' : 'light'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}