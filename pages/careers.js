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
          Other Companies on Temporal with open Developer Jobs
        </h1>
        <ul className="container rounded-lg">
          <li className="test">
            If you are a company that uses Temporal, you can{' '}
            <a
              href="mailto:careers@temporal.io"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              email us to advertise a job here
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
        <h3
          id="external-joblist"
          className="text-xl sm:w-800 sm:mt-12 leading-lg sm:text-xl sm:leading-4xl font-bold">
          Companies hiring Developers to work with Temporal:
        </h3>
        <ul className="container list-disc rounded-lg my-8 sm:ml-16">
          <li>
            Bolt - <a
              href="https://www.bolt.com/careers/software-engineer-platforms/f193e0fa-7cf0-42aa-8837-8bdd4dca3e22/"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Software Engineer
            </a> and
            <a
              href="https://www.bolt.com/careers/senior-software-engineer-platforms/ce0d1fe3-bb00-4b4a-99f0-848bbc5a87c3/"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Senior Software Engineer
            </a>  - Platforms{' '}
            - San Francisco
          </li>
          <li>
            <a
              href="https://www.datadoghq.com/careers/detail/?gh_jid=1825853"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Datadog - Software Engineer - Site Reliability
            </a>{' '}
            - NY/Paris Remote
          </li>
          <li>
            <a
              href="https://jobs.lever.co/nylas/d8788060-ef4f-48ea-8b7b-787c31ec4e46"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Nylas - Senior Software Engineer (Workflows)
            </a>{' '}
            - Toronto
          </li>
          <li>
            <a
              href="https://jobs.lever.co/nylas/50471019-fe86-4429-b857-98b17434d839"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Nylas - Senior Software Engineer (Workflows)
            </a>{' '}
            - Vancouver
          </li>
          <li>
            <a
              href="https://jobs.lever.co/nightfall/2284505f-49e4-48b6-a530-4e1869a68fe4"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Nightfall AI - Senior Backend Engineer
            </a>{' '}
            - US & Canada Remote
          </li>
          <li>
            <a
              href="https://www.linkedin.com/jobs/view/senior-software-engineer-cloud-database-infra-cash-app-at-cash-app-2315548952/"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Square - Senior Software Engineer (Cloud Database Infra), Cash App
            </a>{' '}
            - US Remote
          </li>
          <li>
            <a
              href="https://stripe.com/jobs/listing/infrastructure-engineer-developer-productivity-workflow-engine/2964407"
              className="font-bold underline text-blue-400 hover:text-blue-200">
              Stripe - Infrastructure Engineer, Developer Productivity (Workflow Engine)
            </a>{' '}
            - North America Remote
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
