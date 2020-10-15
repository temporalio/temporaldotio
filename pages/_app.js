import '../styles/index.css'

import Head from 'next/head';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/white-icon-thick-black-bigger-circle-bg.png" />
        <meta property="title" content="Temporal.io: Build Invincible Apps" />
        <meta property="og:title" content="Temporal.io: Build Invincible Apps" />
        <meta name="description" content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services." />
        <meta property="og:description" content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services." />
        <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="og:url" content="http://temporal.io" />
        <meta property="twitter:title" content="Temporal.io: Build Invincible Apps" />
        <meta property="twitter:description" content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services." />
        <meta property="twitter:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@temporaltech" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '[Tracking ID]');
              `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
// {/* <link rel="icon" type="image/png" href="/white-icon-thick-black-bigger-circle-bg.png" /> */}
// {/* <script dangerouslySetInnerHTML={{
//       __html: `window.leverJobsOptions = {accountName: 'temporal', includeCss: true};` }} 
//   />
// <script async type='text/javascript' src='https://andreasmb.github.io/lever-jobs-embed/index.js'></script> */}

export default MyApp