import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'curz — Professional Developer',
  description: 'Professional developer specializing in web, bots, and automation. DM for custom work.',
  openGraph: {
    title: 'curz — Professional Developer',
    description: 'Professional developer specializing in web, bots, and automation.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
