// import Link from 'next/link'
import Nav from './nav'

// function Bold({children}) {
//   return <span className="font-bold">{children}</span>
// }

function Banner() {
  const [open, setOpen] = useLocalStorage('bannerOpen', true);
  if (!open) return null
  return <div className="relative bg-temporalblue text-spaceblack text-center py-2">
    <a className=" hover:text-blue-800" href="https://docs.temporal.io/blog/funding-announcement">
      <span className="hidden md:inline">🎉</span>
      Announcing our $18.75m Series A
      <span className="hidden md:inline"> led by Sequoia! 🎉</span>
    </a>
    <button onClick={() => setOpen(false)}>
      <svg className="absolute right-0 top-0 mr-2 mt-3 md:mt-2 w-5 sm:w-6 h-5 sm:h-6 text-spaceblack" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg></button>
  </div>
}

export default function Hero() {
  const [clicked, setClicked] = React.useState(false)
  return (<>
    <Banner />
    <section id="hero" className={`
    min-h-screen container mx-auto flex flex-col justify-between p-4 sm:p-4
    `}>
      <Nav />
      <div>
        <h1 className="text-60 leading-60 mb-8 sm:text-144 sm:leading-144 uppercase lg:w-800">
          Build Invincible Apps
          </h1>
        <p className="text-2xl md:w-700 mb-8">
          {/* Temporal is the <Bold>open source</Bold> runtime for running <Bold>mission critical</Bold> code atop <Bold>unreliable, distributed</Bold> services at any scale. */}
          {/* Highly reliable, globally scalable microservice orchestration for mission-critical applications */}
          Temporal is the open source microservices orchestration platform for running mission critical code at any scale.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-8 sm:mb-8 items-center">
        <div className="flex flex-col sm:flex-row mb-4 lg:text-xl">
          <a className="button w-300 h-60 md:w-200 mr-4 mb-4 lg:w-300 text-spaceblack bg-temporalblue  hover:bg-teal-200" href="#explain-temporal">2 Minute Intro</a>
          <a className="button w-300 h-60 md:w-200 lg:w-300 hover:text-temporalblue" href="#join-us">We're Hiring</a>
        </div>
        {clicked ? <div className="inline-flex md:-mt-8">
          <a className="mr-8" href="https://docs.temporal.io/docs/go-run-your-first-app">
            <img aria-label="go SDK" className="w-16 h-16 md:w-20 md:h-20 transition-transform transform duration-300 hover:scale-110  object-contain" src="/logos/logo-go.png" alt="logo" />
          </a>
          <a className="" href="https://docs.temporal.io/docs/java-run-your-first-app">
            <img aria-label="java SDK" className="w-16 h-16 md:w-20 md:h-20 transition-transform transform duration-300 hover:scale-110  object-contain" src="/logos/logo-java.png" alt="logo" />
          </a>
        </div>
          :
          <button className="lg:text-xl hover:text-temporalblue" onClick={() => setClicked(true)}>I'm a developer, take me to code! →</button>
        }
      </div>
    </section>
  </>
  )
}


/**
 * utils
 * 
 */

// https://usehooks.com/useLocalStorage/
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      // Get from local storage by key
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage. 
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}