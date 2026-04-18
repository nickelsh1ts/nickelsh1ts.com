'use client';

import Router from 'next/router';
import Layout from '@components/Layout';
import PWAHeader from '@components/PWAHeader';
import ServiceWorkerSetup from '@components/ServiceWorkerSetup';
import '@app/globals.css';
import ProgressBar from '@badrap/bar-of-progress';
import { useEffect, useState } from 'react';

const applicationTitle = 'nickelsh1ts';

const progress = new ProgressBar({
  size: 2,
  color: '#38bdf8',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', () => progress.start());
Router.events.on('routeChangeComplete', () => progress.finish());
Router.events.on('routeChangeError', () => progress.finish());

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrolled);
    };
  }, []);

  return (
    <html lang="en-CA" data-theme="fox">
      <head>
        <PWAHeader applicationTitle={applicationTitle} />
      </head>
      <ServiceWorkerSetup />
      <body
        className={`flex flex-col min-h-dvh ${isScrolled ? 'activeScroll' : ''}`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
