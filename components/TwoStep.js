// import Link from 'next/link'

export default function TwoStep() {
  return (
    <div id="two-step" className={`
    border-b border-white
    flex flex-col justify-evenly
    `}>
      <style jsx>{`
      @media (min-width: 640px) {
        .step {
          font-size: 288px;
          line-height: 160px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }
      }
      `}</style>
      <div className="flex flex-col sm:flex-row border-t border-b border-white">
        <div className="flex flex-1 sm:border-r border-b sm:border-b-0 border-white p-16">
          <span className="text-3xl md:text-60 mr-16 hidden sm:block">1</span>
          <div className="flex flex-col">
            <span className="mb-8"><span className="font-bold sm:hidden">Step 1: </span>Write workflow functions in your favorite languages.</span>
            <div className="grid grid-cols-2 gap-4">
              <img aria-label="go SDK" className="w-16 h-16 object-contain" src="/logos/logo-go.png" alt="logo" />
              <img aria-label="java SDK" className="w-16 h-16 object-contain" src="/logos/logo-java.png" alt="logo" />
              <img aria-label="python SDK" className="grayscale w-16 h-16 object-contain" src="/logos/logo-python.png" alt="coming soon" />
              <img aria-label="ruby SDK" className="grayscale w-16 h-16 object-contain" src="/logos/logo-ruby.png" alt="coming soon" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 p-16">
          <span className="text-3xl md:text-60  mr-16 hidden sm:block">2</span>
          <div className="flex flex-col">
            <span className="mb-8"><span className="font-bold sm:hidden">Step 2: </span>Temporal handles all the reliability boilerplate!</span>
            <div className="grid grid-cols-3 gap-4">
              <div>Routing</div>
              <div>Sharding</div>
              <div>Consensus</div>
              <div>Routing</div>
              <div>Sharding</div>
              <div>Consensus</div>
              <div>Routing</div>
              <div>Sharding</div>
              <div>Consensus</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row border-b border-white p-8 lg:text-xl">
      <span className="flex-1 flex justify-center">No More Queues</span>
      <span  className="hidden lg:block"> • </span>
       <span className="flex-1 flex justify-center">No More Cronjobs</span>
      <span  className="hidden lg:block"> • </span>
       <span className="flex-1 flex justify-center">No More Ad-Hoc Retry Logic</span>
      <span  className="hidden lg:block"> • </span>
       <span className="flex-1 flex justify-center">No More JSON "Programming"</span>
      </div>
    </div>
  )
}