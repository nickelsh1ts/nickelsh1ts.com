'use client';

import Layout from '@app/components/Layout';
import LoadingBar from '@app/components/LoadingBar';
import PWAHeader from '@app/components/PWAHeader';
import ServiceWorkerSetup from '@app/components/ServiceWorkerSetup';
import { InteractionProvider } from '@app/context/InteractionContext';
import 'styles/css/globals.css';

const applicationTitle = 'nickelsh1ts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <InteractionProvider>
        <head>
          <title>{applicationTitle}</title>
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover, width=device-width"
          ></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          />
          <PWAHeader applicationTitle={applicationTitle} />
        </head>
        <ServiceWorkerSetup />
      </InteractionProvider>
      <body>
        <LoadingBar />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
