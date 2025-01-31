'use client';

import Router from 'next/router';
import Layout from '@app/components/Layout';
import PWAHeader from '@app/components/PWAHeader';
import ServiceWorkerSetup from '@app/components/ServiceWorkerSetup';
import { InteractionProvider } from '@app/context/InteractionContext';
import 'styles/css/globals.css';
import ProgressBar from '@badrap/bar-of-progress';
import { useEffect, useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import packageJson from '@app/../package.json';

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
  const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

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
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
    >
      <html lang="en-CA" data-theme="fox">
        <InteractionProvider>
          <head>
            <PWAHeader applicationTitle={applicationTitle} />
          </head>
          <ServiceWorkerSetup />
        </InteractionProvider>
        <body
          className={`flex flex-col min-h-dvh ${isScrolled ? 'activeScroll' : ''}`}
        >
          <Layout>{children}</Layout>
        </body>
      </html>
    </Worker>
  );
}
