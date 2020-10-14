import '../styles/index.css'

import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/white-icon-thick-black-bigger-circle-bg.png" />
        <meta property="title" content="Temporal.io: Build Invincible Apps" />
        <meta property="og:title" content="Temporal.io: Build Invincible Apps" />
        <meta property="description" content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services." />
        <meta property="og:description" content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services." />
        <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="og:url" content="http://temporal.io" />
        <meta property="twitter:title" content="Temporal.io: Build Invincible Apps" />
        <meta property="twitter:description" content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services." />
        <meta property="twitter:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@temporaltech" />
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