import './globals.css';
import { Poppins, Libre_Caslon_Display } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['200', '300', '400', '600'],
});

const caslon = Libre_Caslon_Display({ 
  subsets: ['latin'],
  variable: '--font-caslon',
  weight: '400',
});

export const metadata = {
  title: 'Shanis Homemade Delights',
  description: 'Your Local Bakery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${caslon.variable}`}>
      <body>{children}</body>
    </html>
  )
}
