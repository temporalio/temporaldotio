import '../styles/index.css'

import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/wildshore_favicon-dark.png" />
        {/* <link rel="icon" type="image/png" href="/white-icon-thick-black-bigger-circle-bg.png" /> */}
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp