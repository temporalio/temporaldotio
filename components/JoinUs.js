// import Link from 'next/link'

export default function JoinUs() {
  return (
    <div id="join-us" className={`
    border-b border-lightgray
    flex flex-col sm:flex-row 
    `}>
      <div className="flex-1 flex flex-col justify-between sm:border-r border-lightgray px-8 py-16">
        <h2 className="text-4xl leading-48 sm:text-60 sm:leading-60 mb-8">
          Experience at the largest scale. Backing by the greatest Investors.
        </h2>
        <div>
          <div className="inline-flex flex-col items-center">
            <a className="text-2xl button  w-300 h-60 mb-4" style={{
              background: "#B2E7EA",
              color: "#141414"
            }} href="/careers">Join us</a>
            <p className="text-lg inline">Seriously, we're hiring</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 border-t border-lightgray">
        <div className="px-4 sm:px-8 py-4 sm:py-16 flex-1 border-b border-lightgray flex items-center">
          <img className="rounded-full w-16 my-4 mr-8 border border-lightgray" src="/logos/logo-samar.png" alt="samar abbas"></img>
          <div>
            <div className="mb-2 sm:mb-4 font-bold text-lg">Samar Abbas (CTO)</div>
            <div>AWS, Microsoft, Uber engineering leadership veteran, created Durable Task Framework which was the basis of Azure Durable Functions. Co-created Cadence which is the predecessor to Temporal</div>
          </div>
        </div>
        <div className="px-4 sm:px-8 py-4 sm:py-16  flex-1 border-b border-lightgray flex items-center">
          <img className="rounded-full w-16 my-4 mr-8 border border-lightgray" src="/logos/logo-maxim.png" alt="Maxim Fateev"></img>
          <div>
            <div className="mb-2 sm:mb-4 font-bold text-lg">Maxim Fateev (CEO)</div>
            <div>AWS, Google, Uber, engineering leadership veteran, led development of SQS replicated message store and the SWF project at AWS. Co-created Cadence which is the predecessor to Temporal.</div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center border-lightgray border-r">
            <img className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain" src="/logos/logo-amplify.png" alt="vc"></img>
          </div>
          <div className="flex-1 flex items-center justify-center border-lightgray border-r">
            <img className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain" src="/logos/logo-sequoia.png" alt="vc"></img>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img style={{ filter: "brightness(1.5)" }} className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain" src="/logos/logo-madrona.png" alt="vc"></img>
          </div>

        </div>
      </div>
    </div>
  )
}