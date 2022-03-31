import '@styles/global.sass'
import { useEffect } from 'react';
import { ThemeProvider } from '@context/ThemeContext'
import Navigation from '@src/components/navigation';
import Footer from '@src/components/footer';
import Head from 'next/head';

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
    <Head>
      <meta name="description" content="A portfolio site of Jonathan Lam, a front-end developer and UI/UX designer." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ThemeProvider>
      <Navigation/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  </>)
}

export default MyApp
