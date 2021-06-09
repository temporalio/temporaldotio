import { Fragment } from 'react';

const CASES = [
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

const OrbitalCases = () => (
  <Fragment>
    <style jsx>{`
      .logos {
        --seg: calc(360 / var(--logo-count));
        --speed: 10s;
        transform: translate(0, 25%);
      }
      .logos:hover .logos__logos {
        animation-play-state: paused;
      }
      .logos__ring {
        transform: translate(0, -50%) rotateY(calc(var(--angle) * 1deg));
      }
      .logos__logos {
        animation: rotate var(--speed) infinite linear;
      }
      .logo {
        transform: translate(-50%, -50%) rotate(calc((var(--logo-idx) * var(--seg)) * 1deg))
          translate(-150%, 0) rotateY(calc(var(--angle) * -1deg));
      }
      @keyframes rotate {
        to {
          transform: rotate(-360deg);
        }
      }
    `}</style>
    <span
      className="logos lg:inline-block hidden h-12 w-12 bg-red relative transform-3d perspective mx-2"
      style={{ '--logo-count': CASES.length }}>
      <span
        className="logos__ring h-3/1 w-3/1 rounded-full border-2 border-temporal-blue border-opacity-25 inline-block absolute transform-3d origin-left top-2/4 left-2/4"
        style={{ '--angle': 38 }}>
        <span className="logos__logos h-full w-full inline-block transform-3d">
          {CASES.map((logo, index) => (
            <a
              href={logo.url}
              className="logos__logo logo h-12 w-12 top-2/4 left-2/4 absolute transform-3d"
              key={logo.url}
              style={{ '--logo-idx': index }}>
              <img src={logo.src} alt={logo.label} />
            </a>
          ))}
        </span>
      </span>
    </span>
  </Fragment>
);

export default OrbitalCases;
