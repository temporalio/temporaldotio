// import Link from 'next/link'

export default function JoinUs() {
  return (
    <div id="join-us" className={`
    border-b border-lightgray
    flex flex-col sm:flex-row 
    `}>
      <style jsx>{`
      `}</style>
      <div className="flex-1 flex flex-col justify-between sm:border-r border-lightgray px-8 py-16">
        <h2 className="text-4xl leading-48 sm:text-60 sm:leading-60 mb-8">
          Experience at the largest scale. Backing by the greatest Investors.
        </h2>

        <div className=" text-center sm:text-left">
          <a className="button mb-4" style={{
            background: "#B2E7EA",
            color: "#141414"
          }} href="/careers">Join us</a>
          <p>Seriously, we're hiring</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 border-t border-lightgray">
        <div className="px-4 sm:px-8 py-4 sm:py-16 flex-1 border-b border-lightgray flex items-center">
          <img className="rounded-full w-16 my-4 mr-8 border border-lightgray" src="/logos/logo-samar.png" alt="samar abbas"></img>
          <div>
            <div className="mb-4">Samar Abbas (CTO)</div>
            <div>15 years at AWS and Microsoft working on Durable Task Functions</div>
          </div>
        </div>
        <div className="px-4 sm:px-8 py-4 sm:py-16  flex-1 border-b border-lightgray flex items-center">
          <img className="rounded-full w-16 my-4 mr-8 border border-lightgray" src="/logos/logo-maxim.png" alt="Maxim Fateev"></img>
          <div>
            <div className="mb-4">Maxim Fateev (CEO)</div>
            <div>15 years at AWS and Uber working on AWS SWF and Uber Cadence</div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center border-lightgray border-r">
            <img  style={{ filter: "grayscale(1) brightness(2)" }}  className="my-2 sm:my-8 h-24 w-24 sm:h-32 sm:w-32 object-contain" src="/logos/logo-amplify.png" alt="vc"></img>
          </div>
          <div className="flex-1 flex items-center justify-center border-lightgray border-r">
            <img  style={{ filter: "grayscale(1) brightness(2)" }}  className="my-2 sm:my-8 h-24 w-24 sm:h-32 sm:w-32 object-contain" src="/logos/logo-sequoia.png" alt="vc"></img>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img style={{ filter: "grayscale(1) brightness(4)" }} className="my-2 sm:my-8 h-24 w-24 sm:h-32 sm:w-32 object-contain" src="/logos/logo-madrona.png" alt="vc"></img>
          </div>

        </div>
      </div>
    </div>
  )
}