import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UGD Sketch',
  description: 'Bring you ideas to life with UGD Sketch',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
