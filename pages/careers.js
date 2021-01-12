import Nav from '../components/nav';
import Footer from '../components/Footer';
import React from 'react';
import Head from 'next/head';

export default function CareersPage() {
  return (
    <div>
      <div className="mx-4 sm:mx-16">
        <Nav />
        <div>
          <Head>
            <title>Temporal.io Careers</title>
            <meta property="title" content="Temporal.io Careers: Help Us Build Invincible Apps" />
            <meta
              property="og:title"
              content="Temporal.io Careers: Help Us Build Invincible Apps"
            />
            <meta
              property="description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta
              property="og:description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
            <meta property="og:url" content="http://temporal.io" />
            <meta
              property="twitter:title"
              content="Temporal.io Careers: Help Us Build Invincible Apps"
            />
            <meta
              property="twitter:description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta
              property="twitter:image"
              content="https://temporal.io/logo-font-straight-dark.svg"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@temporaltech" />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.leverJobsOptions = {accountName: 'temporal', includeCss: true};`
              }}
            />
            <script
              async
              type="text/javascript"
              src="https://andreasmb.github.io/lever-jobs-embed/index.js"></script>
          </Head>
          <h1 className="text-3xl sm:w-800 sm:mt-12 leading-lg sm:text-4xl sm:leading-4xl font-bold mb-4">
            Help us deliver a new way to build scalable and reliable applications!
          </h1>
          <h2 className="text-xl leading-tight italic">
            If none of these positions are a fit, email{' '}
            <a
              href="careers@temporal.io"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              careers@temporal.io
            </a>{' '}
            describing your dream job.
          </h2>
        </div>
        <div className="container sm:p-8 rounded-lg my-16 sm:ml-16">
          <div id="lever-jobs-container">Loading... (contact us if this message persists)</div>
        </div>
      </div>
      <hr />
      <div className="mx-4 sm:mx-16">
        <h1
          id="external-jobs"
          className="text-3xl sm:w-800 sm:mt-12 leading-lg sm:text-4xl sm:leading-4xl font-bold mb-4">
          Temporal Developer Jobs
        </h1>
        <ul className="container list-disc rounded-lg my-16 sm:ml-16">
          <li className="test">
            If you are a company that uses Temporal, you can{' '}
            <a
              href="careers@temporal.io"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              advertise a job with us here
            </a>{' '}
            for free.
          </li>
          <li className="test">
            If you are a developer that loves Temporal, you can{' '}
            <a
              href="http://eepurl.com/hhcaaX"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              sign up for our mailing list
            </a>{' '}
            to hear when jobs are advertised.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
