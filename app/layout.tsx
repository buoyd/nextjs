import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './ui/dashboard/overview/loading';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-buoyds-projects.vercel.app/'),
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [
    { name: 'PonyNguyen', url: 'https://nextjs-buoyds-projects.vercel.app/' },
  ],
  creator: 'PonyNguyen',
  publisher: 'PonyNguyen',
  manifest: 'https://nextjs-buoyds-projects.vercel.app/',
  archives: ['https://nextjs-buoyds-projects.vercel.app/'],
  bookmarks: ['https://nextjs-buoyds-projects.vercel.app/'],
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    // images: '/pn.jpg',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs-buoyds-projects.vercel.app/',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs-buoyds-projects.vercel.app/pn.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs-buoyds-projects.vercel.app/pn.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'ponynguyen',
      },
    ],
    // locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/pn.jpg',
    shortcut: '/pn.jpg',
    apple: '/pn.jpg',
    other: {
      rel: 'pn.jpg',
      url: '/pn.jpg',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    // siteId: '1467726470533754880',
    creator: '@PonyNguyen',
    // creatorId: '1467726470533754880',
    images: ['https://nextjs-buoyds-projects.vercel.app/pn.jpg'], // Must be an absolute URL
  },
  other: {
    custom: 'meta',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
