import '@styles/globals.sass'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'], variable: '--bodyFont' })

export const metadata: Metadata = {
  title: 'Jonathan Lam - Front-End Developer',
  description: 'Portfolio of Jonathan Lam, a front-end developer based in London.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(figtree.variable)}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
