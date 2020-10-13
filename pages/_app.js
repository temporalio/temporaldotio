import '../styles/index.css'

import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/wildshore_favicon-dark.png" />
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