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
