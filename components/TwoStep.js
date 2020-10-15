// import Link from 'next/link'

export default function TwoStep() {
  return (
    <div id="two-step" className={`
    flex flex-col justify-evenly
    container mx-auto
    `}>
      <div className="flex flex-col md:flex-row border-t border-b border-white">
        <div className="flex flex-1 md:border-r border-b md:border-b-0 border-white p-16">
          <span className="text-3xl md:text-144 mr-16 hidden md:block">1</span>
          <div className="flex flex-col">
            <span className="mb-8"><span className="font-bold md:hidden">Step 1: </span>Write workflow functions in your favorite languages.</span>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              <img aria-label="go SDK" className="w-16 h-16 md:w-32 md:h-32  object-contain" src="/logos/logo-go.png" alt="logo" />
              <img aria-label="java SDK" className="w-16 h-16 md:w-32 md:h-32  object-contain" src="/logos/logo-java.png" alt="logo" />
              <img aria-label="python SDK" style={{ filter: 'grayscale(1)'}} className="w-16 h-16 object-contain" src="/logos/logo-python.png" alt="coming soon" />
              <img aria-label="ruby SDK" style={{ filter: 'grayscale(1) brightness(2)'}} className="w-16 h-16 object-contain" src="/logos/logo-ruby.png" alt="coming soon" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 p-16">
          <span className="text-3xl md:text-144  mr-16 hidden md:block">2</span>
          <div className="flex flex-col">
            <span className="mb-8"><span className="font-bold md:hidden">Step 2: </span>Temporal handles all the reliability boilerplate!</span>
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
      <div className="flex flex-col lg:flex-row border-b border-white p-8 lg:text-xl">
      <span className="flex-1 flex justify-center">No more Queues</span>
      <span  className="hidden xl:flex items-center"> <Star/> </span>
       <span className="flex-1 flex justify-center">No more Cronjobs</span>
      <span  className="hidden xl:flex items-center"> <Star/> </span>
       <span className="flex-1 flex justify-center">No more Ad-Hoc Retry Logic</span>
      <span  className="hidden xl:flex items-center"> <Star/> </span>
       <span className="flex-1 flex justify-center">No more JSON "Programming"</span>
      </div>
    </div>
  )
}

function LilIcons({name}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img alt={name} className="h-12 w-12" src={`/icons/icon-${name.toLowerCase()}.svg`} />
      <div className="w-12 text-xs">{name}</div>
    </div>
  )
}

function Star() {
  return <img className="w-4 h-4" src="/temporal-icon.png" alt="temporal logo" />
//   return (
//     <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
// </svg>
//   )
}