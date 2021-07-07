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

export default function HeroLogos() {
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
    <a className="" href={site.url}>
      <img
        className="presetTransition animate-fade-in-down inline mx-2 hover:scale-110 object-contain h-10 w-10"
        src={site.src}
        key={site.src}
        aria-label={site.label}
        alt={site.label}
      />
    </a>
  );
}
