import { Nav } from './Nav';
import { Banner } from './Banner';
import OrbitalCases from './OrbitalCases';
import React from 'react';

const allSites = [
  {
    src: '/logos/logo-Box2.png',
    label: 'Box logo',
    url: 'https://docs.temporal.io/blog/Temporal-a-central-brain-for-Box'
  },
  {
    src: '/logos/logo-Checkr.png',
    label: 'Checkr logo',
    url: 'https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows'
  },
  {
    src: '/logos/logo-Coinbase.svg',
    label: 'Coinbase logo',
    url: 'https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase'
  },
  {
    src: '/logos/logo-Descript.png',
    label: 'Descript logo',
    url: 'https://docs.temporal.io/blog/descript-case-study'
  }
];

export default function Hero() {
  const [clicked, setClicked] = React.useState(false);
  const [site, setSite] = React.useState(allSites[0]);

  React.useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === allSites.length) i = 0;

      setSite(allSites[i]);
      i += 1;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-white">
      <Banner />
      <section
        id="hero"
        className={`
    min-h-screen max-h-[1080px] container mx-auto flex flex-col justify-between p-4 sm:p-4
    `}>
        <Nav />
        <div>
          <h1 className="text-60 leading-60 mb-8 sm:text-144 sm:leading-144 uppercase lg:w-800">
            Build Invincible Apps
          </h1>
          <p className="text-2xl md:w-700 mb-8">
            {/* Temporal is the <Bold>open source</Bold> runtime for running <Bold>mission critical</Bold> code atop <Bold>unreliable, distributed</Bold> services at any scale. */}
            {/* Highly reliable, globally scalable microservice orchestration for mission-critical applications */}
            The platform for running mission critical code at&nbsp;
            <OrbitalCases />
            scale.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-8 sm:mb-8 items-center">
          <div className="flex flex-col gap-4 sm:flex-row lg:text-xl">
            <a className="btn-primary" href="#explain-temporal">
              2 Minute Intro
            </a>
            <a className="btn-secondary" href="https://docs.temporal.io/application-development">
              Get Started
            </a>
          </div>
          <iframe
            className="mt-4"
            src="https://ghbtns.com/github-btn.html?user=temporalio&repo=temporal&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="148"
            height="30"
            title="GitHub"></iframe>
        </div>
      </section>
    </div>
  );
}
