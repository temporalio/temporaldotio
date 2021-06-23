import { useEffect, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import DirectionalControl from './DirectionalControl';

const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;
  return (value) => outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
};

const QUOTES = [
  {
    url: 'https://docs.temporal.io/blog/temporal-a-central-brain-for-box/',
    img: 'https://temporal.io/logos/photo-steven.png',
    quote:
      "One thing that the API does really well is give you this illusion of single threaded or at least local execution without having to get into the details of trying to orchestrate multiple things. It's pretty amazing.",
    name: 'Steven Cipolla',
    title: 'Senior Staff Software Engineer, Box',
    logo: 'https://temporal.io/logos/logo-Box2.png',
    logoAlt: 'Box Logo'
  },
  {
    url: 'https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows/',
    img: 'https://avatars1.githubusercontent.com/u/114386',
    quote:
      'Developer happiness has increased. Thinking about our problems in terms of workflows and activities has clarified our product and now allow us to share workflow components with different teams.',
    name: 'Ben Jacobson',
    title: 'Staff Software Engineer, Checkr',
    logo: 'https://temporal.io/logos/logo-Checkr.png',
    logoAlt: 'Checkr Logo'
  },
  {
    url: 'https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase',
    img: 'https://pbs.twimg.com/profile_images/943640175/new_photo_400x400.jpg',
    quote:
      "Trying to model complex SAGAS using a plain execution graph such as Zeebe and Step Functions provide will make things unnecessarily more complex, plus we want a solution which we could explore for more use cases that don't necessarily use SAGAS. So I think this is where Temporal really shined.",
    name: 'Anthony Dmitriyev',
    title: 'Software Engineer, Coinbase',
    logo: 'https://temporal.io/logos/logo-Coinbase.svg',
    logoAlt: 'Coinbase Logo'
  },
  {
    url: 'https://docs.temporal.io/blog/descript-case-study',
    img: 'https://avatars.githubusercontent.com/u/2502591?v=4',
    quote:
      'It was a game changing revelation - Temporal gave us the ability to test our workflows with unit tests, basically just writing code instead of writing JSON or YAML, which are completely untestable.',
    name: 'Nicolas Gere',
    title: 'Software Engineer, Descript',
    logo: 'https://temporal.io/logos/logo-Descript.png',
    logoAlt: 'Descript Logo'
  }
];

const CaseStudies = () => {
  const tabsRef = useRef(null);
  useEffect(() => {
    const update = ({ x, y }) => {
      const newX = mapRange(0, window.innerWidth, -10, 10)(x);
      const newY = mapRange(0, window.innerHeight, -10, 10)(y);
      tabsRef.current.style.setProperty('--x', newX);
      tabsRef.current.style.setProperty('--y', newY);
    };

    if (tabsRef.current) {
      document.addEventListener('pointermove', update);
    }

    return () => {
      document.removeEventListener('pointermove', update);
    };
  }, []);
  return (
    <section id="case-studies" className={`container my-16 mx-auto px-8 py-16 text-center`}>
      <Tabs className="case-study transform-3d perspective">
        <div ref={tabsRef} className="case-study__tabs transform-3d">
          {QUOTES.map((quote) => (
            <TabPanel key={quote.url} className="" selectedClassName="">
              <Quote
                url={quote.url}
                img={quote.img}
                quote={quote.quote}
                name={quote.name}
                title={quote.title}
              />
            </TabPanel>
          ))}
        </div>
        <TabList className="flex gap-2 justify-center">
          {QUOTES.map((quote) => (
            <Tab
              key={quote.img}
              selectedClassName="case-study--active"
              className="transform hover:scale-125 scale-75 transition-all cursor-pointer filter grayscale p-2 grid place-items-center border-spaceblack">
              <img
                className="h-12 w-12 object-cover"
                src={quote.logo}
                aria-label={quote.logoAlt}
                alt={quote.logoAlt}
              />
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <div className="mt-12 flex justify-center">
        <DirectionalControl href="https://docs.temporal.io/blog/tags/case-study">
          See Case Studies
        </DirectionalControl>
      </div>
    </section>
  );
};

const Quote = ({ quote, name, title }) => (
  <div className="">
    <blockquote className="mb-8 relative mx-auto text-xl leading-xl sm:text-4xl sm:leading-48 lg:w-800 flex-1 text-white">
      <svg
        viewBox="0 0 512 512"
        className="absolute w-24 h-24 fill-current text-temporalblue opacity-30 -z-1 transform -translate-x-1/3 -translate-y-1/3 case-study__quote"
        title="quote-left">
        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
      </svg>
      {quote}
    </blockquote>
    <div className="flex items-center justify-center mb-12">
      <div className="flex flex-col text-white text-center">
        <span className="font-bold text-lg uppercase">{name}</span>
        <span className="font-light">{title}</span>
      </div>
    </div>
  </div>
);

export default CaseStudies;
