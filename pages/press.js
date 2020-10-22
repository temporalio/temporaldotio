import Nav from '../components/nav';
import Footer from '../components/Footer';
import React from 'react';
import Head from 'next/head';
import Lightbox from 'react-image-lightbox';

export default function PressPage() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Nav />
        <div>
          <Head>
            <title>Temporal.io Press</title>
            <meta
              property="title"
              content="Temporal.io Press: Guidelines For People Writing/Speaking About Temporal"
            />
            <meta
              property="og:title"
              content="Temporal.io Careers: Guidelines For People Writing/Speaking About Temporal"
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
              content="Temporal.io Careers: Guidelines For People Writing/Speaking About Temporal"
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
          </Head>
          <h1 className=" text-60 leading-60 uppercase mt-8 mb-4 lg:mb-16">Press & Assets</h1>
          <p className="text-xl max-w-700">
            We LOVE it when developers and media talk about us! Please let us know when you do so we
            can share it with the community, and also be mindful of our guidelines (below). If in
            doubt, email <span className="font-bold">press@temporal.io</span> and we will be happy
            to work with you.
          </p>
        </div>

        <section
          id="guidelines"
          className={`
        border-b border-spaceblack
        container mx-auto
        bg-temporalblue text-spaceblack
        flex flex-col p-8 mt-8
        `}>
          <h1 className="sm:mb-8 mb-4 text-4xl sm:text-60 leading-48 sm:leading-72">
            Brand Guidelines
          </h1>
          <ul className="list-disc pl-4">
            <li className="">Only show the logo in black or white</li>
            <li className="">Don't alter, rotate or modify the logo</li>
            <li className="">Don't combine the logo with other art elements</li>
            <li className="">
              Ensure the logo is given ample space and is not crowded on the page
            </li>
            <li className="">Minimum logo size is 32pixels</li>
            <li className="">
              Do not use custom fonts for the Temporal brand name. Only use the official brand
              logo/name asset
            </li>
          </ul>
        </section>
        <section
          id="guidelines"
          className={`
        border-b border-spaceblack
        container mx-auto
      text-spaceblack bg-gray5
        flex flex-col p-8
        `}>
          <h2 className="sm:mb-8 mb-4 text-4xl sm:text-60 leading-48 sm:leading-72">
            Brand Assets (PNG)
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Asset url="/press/favicon.png" label="White logo icon on Black (Circle)" />
            <Asset url="/press/master-favicon.png" label="Black logo icon on White (Transparent)" />
            <Asset url="/press/logo-only-white-on-black.svg" label="White logo on Black (Square)" />
            <Asset
              url="/press/twitter-banner-logo-text-black-on-white.png"
              label="Black logo+text on White Banner"
            />
            <Asset
              url="/press/twitter-banner-logo-text-white-on-black.png"
              label="White logo+text on Black Banner"
            />
            <Asset
              url="/press/twitter-banner-black-on-white.png"
              label="Black logo on White Banner (no text)"
            />
            <Asset
              url="/press/twitter-banner-white-on-black.png"
              label="White logo on Black Banner (no text)"
            />
            <Asset
              url="/press/twitter-banner-text-white-on-black.png"
              label="White text on Black Banner (text)"
            />
            <Asset
              url="/press/twitter-banner-text-black-on-white.png"
              label="Black text on White Banner (text)"
            />
          </ul>

          <h2 className="mt-16 mb-4 sm:mb-8 text-4xl sm:text-60 leading-48 sm:leading-72">SVG</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Asset url="/press/twitter-card.svg" label="Dark logo+text on White" />
            <Asset url="/press/logo-only-black-on-white.svg" label="Dark logo on White" />
            <Asset url="/press/icon-dark.svg" label="Dark logo (Transparent)" />
            <Asset url="/press/icon-light.svg" label="Light logo (Transparent)" dark />
            <Asset
              url="/press/logo-with-text-white-nobg.svg"
              label="Light logo+text (Transparent)"
              dark
            />
            <Asset
              url="/press/logo-with-text-black-nobg.svg"
              label="Dark logo+text (Transparent)"
            />
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function Asset({ url, label, dark }) {
  const [open, setOpen] = React.useState(false);

  return (
    <li className="flex flex-col items-center text-center">
      <button onClick={() => setOpen(true)}>
        <img
          className={
            'presetTransition hover:scale-110 h-16 w-16 sm:h-32 sm:w-32 object-contain' +
            (dark ? ' bg-gray-800 bg-opacity-25' : '')
          }
          src={url}
          aria-label={label}
          alt={label}
        />
        {open && <Lightbox mainSrc={url} onCloseRequest={() => setOpen(false)} />}
      </button>
      {label}
    </li>
  );
}
