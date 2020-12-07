function ComingSoon({ children }) {
  // todo: figure out how to do "coming soon" overlay on hover
  return (
    <div className="relative w-16 h-16 ">
      {children}
      {/* <span className="text-xs leading-none">Coming soon</span> */}
      {/* <span className="invisible z-10 bg-gray-900 bg-opacity-25 absolute bottom-0 hover:visible focus:visible items-center">Coming soon</span> */}
    </div>
  );
}
export default function TwoStep() {
  return (
    <section
      id="two-step"
      className={`
    flex flex-col justify-evenly
    container mx-auto
    `}>
      <div className="flex flex-col md:flex-row border-t border-b border-white">
        <div className="flex flex-1 md:border-r border-b md:border-b-0 border-white p-16">
          <span className="text-3xl lg:text-144 mr-16 hidden md:block">1</span>
          <div className="flex flex-col">
            <span className="mb-8 text-lg sm:text-2xl">
              <span className="font-bold md:hidden">Step 1: </span>Write workflow functions in your
              favorite languages.
            </span>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              <a
                href="https://docs.temporal.io/docs/go-sdk-overview"
                className="presetTransition hover:scale-110">
                <img
                  aria-label="go SDK"
                  className="w-16 h-16 md:w-32 md:h-32  object-contain"
                  src="/logos/logo-go.png"
                  alt="logo"
                />
              </a>
              <a
                href="https://docs.temporal.io/docs/java-sdk-overview"
                className="presetTransition hover:scale-110">
                <img
                  aria-label="java SDK"
                  className="w-16 h-16 md:w-32 md:h-32  object-contain"
                  src="/logos/logo-java.png"
                  alt="logo"
                />
              </a>
              <ComingSoon>
                <img
                  aria-label="python SDK"
                  style={{ filter: 'grayscale(1)' }}
                  className="object-contain"
                  src="/logos/logo-python.png"
                  alt="coming soon"
                />
              </ComingSoon>
              <ComingSoon>
                <img
                  aria-label="ruby SDK"
                  style={{ filter: 'grayscale(1) brightness(2)' }}
                  className="w-16 h-16 object-contain"
                  src="/logos/logo-ruby.png"
                  alt="coming soon"
                />
              </ComingSoon>
            </div>
          </div>
        </div>
        <div className="flex flex-1 p-16">
          <span className="text-3xl lg:text-144  mr-16 hidden md:block">2</span>
          <div className="flex flex-col">
            <span className="mb-8 text-lg sm:text-2xl">
              <span className="font-bold md:hidden">Step 2: </span>Temporal handles all the
              reliability boilerplate!
            </span>
            <div className="grid grid-cols-3 gap-4">
              <LilIcons name="Routing" />
              <LilIcons name="Sharding" />
              <LilIcons name="Consensus" />
              <LilIcons name="Load Balancing" />
              <LilIcons name="Queueing" />
              <LilIcons name="Timers" />
              <LilIcons name="Storage" />
              <LilIcons name="Streaming" />
              <LilIcons name="Rate Limiting" />
            </div>
          </div>
        </div>
      </div>
      {/* TODO: figure out how to present this info in a nice way */}
      {/* <div className="flex-1 flex border-b border-white items-center p-8 lg:text-xl">
        <span className="flex-1 inline-flex justify-center text-2xl">No more:</span>
        <div className="flex-1 lg:flex-auto inline-flex flex-col lg:flex-row lg:space-x-8">
          <span className="flex justify-center">Queues</span>
          <span className="hidden xl:flex items-center"> <Star /> </span>
          <span className="flex justify-center">Cronjobs</span>
          <span className="hidden xl:flex items-center"> <Star /> </span>
          <span className="flex justify-center">Ad-Hoc Retry Logic</span>
          <span className="hidden xl:flex items-center"> <Star /> </span>
          <span className="flex justify-center">JSON "Programming"</span>
        </div>
      </div> */}
    </section>
  );
}

// revive if needed together with TODO above
// function Star() {
//   return <img className="w-4 h-4" src="/temporal-icon.png" alt="temporal logo" />
//   //   return (
//   //     <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//   //   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//   // </svg>
//   //   )
// }

// TODO - this doesnt look good in some viewports
function LilIcons({ name }) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img alt={name} className="h-12 w-12" src={`/icons/icon-${name.toLowerCase()}.svg`} />
      <div className="w-12 text-xs">{name}</div>
    </div>
  );
}
