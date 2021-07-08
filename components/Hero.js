import { Nav } from './Nav';
// import { Banner } from './Banner'; // company announcements - not needed for now
import DirectionalControl from './DirectionalControl';
// import OrbitalCases from './OrbitalCases';
import HeroLogos from './HeroLogos';
import React from 'react';
import * as HeroSamples from './HeroSamples';

export default function Hero() {
  const [lang, setLang] = useLocalStorage('langpref', 'Go');
  const isMobile = useMediaQuery('(max-width: 768px)', true, false);
  const dynamicCodeSample = {
    Go: HeroSamples.Go,
    Java: HeroSamples.Java,
    PHP: HeroSamples.PHP,
    Node: HeroSamples.Node
  }[lang] || (
    <div className="text-lg">
      Python, Ruby, dotNet, and other SDKs are planned for next year.{' '}
      <a className="text-blue-300 no-underline hover:underline" href="/careers">
        Join us!
      </a>
    </div>
  );
  const helloWorldURL =
    {
      Go: 'https://docs.temporal.io/docs/go/hello-world-tutorial',
      Java: 'https://docs.temporal.io/docs/java/hello-world-tutorial',
      PHP: 'https://docs.temporal.io/docs/samples-library/#beginner-samples',
      Node: 'https://docs.temporal.io/docs/node/hello-world'
    }[lang] || 'https://docs.temporal.io/application-development/';
  return (
    <div className=" border-b border-white">
      {/* <Banner /> */}
      <section
        id="hero"
        className={`
    min-h-screen max-h-[1080px] container mx-auto flex flex-col justify-between p-4 sm:p-4
    `}>
        <Nav />
        <div className="flex flex-col">
          <div className="flex-auto">
            <h1 className="text-60 leading-60 mb-8 lg:text-8xl lg:leading-8xl uppercase">
              Build Invincible Apps
            </h1>
            <p className="text-2xl mb-8">
              {/* Temporal is the <Bold>open source</Bold> runtime for running <Bold>mission critical</Bold> code atop <Bold>unreliable, distributed</Bold> services at any scale. */}
              {/* Highly reliable, globally scalable microservice orchestration for mission-critical applications */}
              <span className="mr-2">The Open Source Runtime for</span>
              <select
                className="md:border md:border-temporalblue text-md md:text-2xl bg-gray-800 active:bg-gray-500 mr-2"
                value={lang}
                onChange={(e) => setLang(e.target.value)}>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="PHP">PHP</option>
                <option value="Node">Node.js</option>
                <option value="Other">any</option>
              </select>
              service orchestration at&nbsp;
              <HeroLogos />
              {/* <OrbitalCases /> temporailly disabled until we can figure out where to put this */}
              scale.
            </p>
          </div>
          <div className="block mb-4">{dynamicCodeSample}</div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mb-8 sm:mb-8 items-center">
          <div className="flex flex-col gap-4 lg:flex-row lg:text-xl">
            <DirectionalControl href="#explain-temporal">2 Minute Intro</DirectionalControl>
            <DirectionalControl secondary href={helloWorldURL}>
              Run Hello World
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

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = React.useState(initialValue);
  React.useEffect(() => {
    // Get from local storage by key
    const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : false;
    // Parse stored json or if none return initialValue
    if (item) setStoredValue(JSON.parse(item));
  }, [setStoredValue]);
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}

// https://www.30secondsofcode.org/react/s/use-media-query
function useMediaQuery(query, whenTrue, whenFalse) {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = React.useState(!!mediaQuery.matches);

  React.useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return match ? whenTrue : whenFalse;
}
