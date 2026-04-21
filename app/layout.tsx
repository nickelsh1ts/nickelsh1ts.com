import Layout from '@components/Layout';
import PullToRefresh from '@components/Layout/PullToRefresh';
import NextTopLoader from 'nextjs-toploader';
import PWAHeader from '@components/PWAHeader';
import ServiceWorkerSetup from '@components/ServiceWorkerSetup';
import '@app/globals.css';

export const applicationTitle = 'nickelsh1ts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en-CA" data-theme="fox">
      <head>
        <PWAHeader applicationTitle={applicationTitle} />
      </head>
      <body
        className={`flex flex-col min-h-dvh`}
      >
        <ServiceWorkerSetup />
        <NextTopLoader color={'#f58a07'} />
        <PullToRefresh />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
