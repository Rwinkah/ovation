import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ovation: Explore and Earn NFTs with Personalized Portfolios',
  description:
    'Discover a unique NFT marketplace where you can explore and earn NFTs through personalized portfolios. Experience the future of digital collectibles with Ovation.',
  authors: [{ name: 'Emmanuel Greg' }],
  openGraph: {
    title: 'Ovation: Explore and Earn NFTs with Personalized Portfolios',
    description:
      'Discover a unique NFT marketplace where you can explore and earn NFTs through personalized portfolios. Experience the future of digital collectibles with Ovation.',
    images: ['/og-image.jpg'],
    siteName: 'Ovation',
    url: 'https://www.ovation.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ovation: Explore and Earn NFTs with Personalized Portfolios',
    description:
      'Discover a unique NFT marketplace where you can explore and earn NFTs through personalized portfolios. Experience the future of digital collectibles with Ovation.',
    creator: '@EmmanuelGreg',
    images: ['/twitter-card.jpg'], // Add the path to your Twitter card image
  },
  icons: { shortcut: ['/favicon.ico'] },
  keywords:
    'nft marketplace, digital collectibles, personalized portfolios, explore nfts, earn nfts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
