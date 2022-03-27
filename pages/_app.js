import '@styles/global.sass'
import { useEffect } from 'react';
import { ThemeProvider } from '@context/ThemeContext'
import Navigation from '@src/components/navigation';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Configure height
    const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    window.addEventListener('resize', appHeight)
    appHeight()
    // Setup Firebase Analytics
    // const analytics = getAnalytics(firebaseApp)
    // logEvent(analytics, 'page_view')
    return () => window.removeEventListener('resize', appHeight)
  }, []);

  return (<>
    <ThemeProvider>
      <Navigation/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>)
}

export default MyApp
