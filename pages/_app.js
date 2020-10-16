import '../styles/index.css';
import 'react-image-lightbox/style.css';

import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/temporal-icon.png" />
        <meta name="theme-color" content="#317EFB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Temporal.io: Build Invincible Apps" />
        <meta property="title" content="Temporal.io: Build Invincible Apps" />
        <meta
          name="description"
          content="Temporal is the open source runtime for running mission critical code atop unreliable, distributed services at any scale."
        />
        <meta
          property="og:description"
          content="Temporal is the open source runtime for running mission critical code atop unreliable, distributed services at any scale."
        />
        <meta property="og:image" content="https://temporal.io/twitter-card.png" />
        <meta property="og:url" content="https://temporal.io" />
        <meta property="twitter:label2" content="Join us!" />
        <meta property="twitter:data2" content="👉temporal.io/careers" />
        <meta property="twitter:label1" content="Use us!" />
        <meta property="twitter:data1" content="👉docs.temporal.io" />
        <meta property="twitter:url" value="https://temporal.io" />
        <meta property="twitter:title" value="Temporal.io: Build Invincible Apps" />
        <meta
          property="twitter:description"
          value="Temporal is the open source runtime for running mission critical code atop unreliable, distributed services at any scale."
        />
        <meta property="twitter:image" content="https://temporal.io/twitter-card.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" value="https://temporal.io" />
        <meta name="twitter:site" content="@temporaltech" />

        {/* resource hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://yt3.ggpht.com" />
        <link rel="preconnect" href="https://static.doubleclick.net" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://s.ytimg.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '[Tracking ID]');
              `
          }}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
