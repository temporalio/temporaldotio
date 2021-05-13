import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Not Found - Temporal.io</title>
      </Head>
      <Nav />
      <main className="min-h-[1080px] container mx-auto p-4 sm:p-4">
        <h1 className="text-4xl font-bold my-8">404 - Page not found</h1>
        <p className="mb-4">
          Check out our{' '}
          <a className="text-temporalblue hover:text-white" href="/blog">
            Blog
          </a>
          ,{' '}
          <a className="text-temporalblue hover:text-white" href="https://docs.temporal.io">
            Docs
          </a>
          , or{' '}
          <a className="text-temporalblue hover:text-white" href="/">
            our landing page
          </a>
          !
        </p>
        <p>
          If we have broken a link, please let us know at{' '}
          <a className="text-temporalblue hover:text-white" href="mailto:support@temporal.io">
            support@temporal.io
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
