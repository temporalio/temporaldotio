import '../styles/index.css';
import 'react-image-lightbox/style.css';

import Head from 'next/head';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

const PROXIMITY_RATIO = 0.1;

const StarCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const starsRef = useRef(null);
  const scaleRangerRef = useRef(null);
  const alphaRangerRef = useRef(null);
  useEffect(() => {
    contextRef.current = canvasRef.current.getContext('2d');
    const LOAD = () => {
      const VMIN = Math.min(window.innerWidth, window.innerHeight);
      scaleRangerRef.current = gsap.utils.mapRange(0, VMIN * PROXIMITY_RATIO, 4, 1);
      alphaRangerRef.current = gsap.utils.mapRange(0, VMIN * PROXIMITY_RATIO, 1, 0.25);
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      const STAR_COUNT = Math.abs(Math.sqrt(Math.pow(VMIN, 2)));
      starsRef.current = new Array(STAR_COUNT).fill().map(() => ({
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
        size: gsap.utils.random(1, 3),
        scale: 1,
        alpha: 0.3
      }));
    };

    LOAD();

    const UPDATE = ({ x, y }) => {
      for (const STAR of starsRef.current) {
        const DISTANCE = Math.sqrt(Math.pow(STAR.x - x, 2) + Math.pow(STAR.y - y, 2));
        gsap.to(STAR, {
          scale: scaleRangerRef.current(
            Math.min(DISTANCE, Math.min(window.innerWidth, window.innerHeight) * PROXIMITY_RATIO)
          ),
          alpha: alphaRangerRef.current(
            Math.min(DISTANCE, Math.min(window.innerWidth, window.innerHeight) * PROXIMITY_RATIO)
          )
        });
      }
    };

    const EXIT = () => {
      gsap.to(starsRef.current, {
        scale: 1,
        alpha: 0.3
      });
    };

    const RENDER = () => {
      contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      for (const STAR of starsRef.current) {
        contextRef.current.fillStyle = `hsla(0, 0%, 100%, ${STAR.alpha})`;
        contextRef.current.beginPath();
        contextRef.current.arc(STAR.x, STAR.y, STAR.size * STAR.scale, 0, 2 * Math.PI);
        contextRef.current.fill();
      }
    };

    document.addEventListener('pointermove', UPDATE);
    document.addEventListener('pointerleave', EXIT);
    window.addEventListener('resize', LOAD);

    gsap.ticker.add(RENDER);
    gsap.ticker.fps(24);

    return () => {
      document.removeEventListener('pointermove', UPDATE);
      document.removeEventListener('pointerleave', EXIT);
      gsap.ticker.remove(RENDER);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full fixed inset-0 bg-spaceblack -z-1" />;
};

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
        <meta property="twitter:data2" content="https://temporal.io/careers" />
        <meta property="twitter:label1" content="Use us!" />
        <meta property="twitter:data1" content="https://docs.temporal.io" />
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
      <StarCanvas />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
