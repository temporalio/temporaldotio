import { Nav } from './Nav';
import { Banner } from './Banner';
import DirectionalControl from './DirectionalControl';
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
  return (
    <div>
      <Banner />
      <section
        id="hero"
        className={`
    min-h-screen max-h-[1080px] container mx-auto flex flex-col justify-between p-4 sm:p-4
    `}>
        <Nav />
        <div>
          <h1 className="text-60 leading-60 mb-8 lg:text-144 lg:leading-144 uppercase lg:w-800">
            Build Invincible Apps
          </h1>
          <p className="text-2xl lg:w-700 mb-8">
            {/* Temporal is the <Bold>open source</Bold> runtime for running <Bold>mission critical</Bold> code atop <Bold>unreliable, distributed</Bold> services at any scale. */}
            {/* Highly reliable, globally scalable microservice orchestration for mission-critical applications */}
            The platform for running mission critical code at&nbsp;
            <OrbitalCases />
            scale.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mb-8 sm:mb-8 items-center">
          <div className="flex flex-col gap-4 lg:flex-row lg:text-xl">
            <DirectionalControl href="#explain-temporal">2 Minute Intro</DirectionalControl>
            <DirectionalControl secondary href="https://docs.temporal.io/application-development">
              Get Started
            </DirectionalControl>
          </div>
          <iframe
            className="mt-4"
            src="https://ghbtns.com/github-btn.html?user=temporalio&repo=temporal&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="150"
            height="30"
            title="GitHub"></iframe>
        </div>
      </section>
    </div>
  );
}
