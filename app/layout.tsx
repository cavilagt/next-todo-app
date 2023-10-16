import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import AppContextProvider from './context/AppContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next todo app',
  description: 'A todo next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
      </head>
      <body className={inter.className}>
        <div className="ui container">
          <AppContextProvider>
            <Header />
            {children}
          </AppContextProvider>
        </div>
      </body>
    </html>
  )
}
