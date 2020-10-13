// import Link from 'next/link'

export default function JoinUs() {
  return (
    <div className={`
    border-b border-white
    min-h-screen
    flex
    `}>
      <style jsx>{`
      h2 {
        font-size: 48px;
        line-height: 56px;
      }
      `}</style>
      <div className="flex-1 border-r border-white p-8">
        <h2>
        Experience at the largest scale. Backing by the greatest Investors.
        </h2>  
        
      </div>
      <div className="flex flex-col flex-1 border-white">
        <div className="p-8 flex-1 border-b border-white flex items-center">
          <div><img className="rounded-full w-16 my-4 mr-8 border border-white" src="/logos/logo-samar.png" alt="samar abbas"></img></div>
          <div>
            <div className="mb-4">Samar Abbas (CTO)</div>
            <div>15 years at AWS and Microsoft working on Durable Task Functions</div>
          </div>
        </div>
        <div className="p-8 flex-1 border-b border-white flex items-center">
          <div><img className="rounded-full w-16 my-4 mr-8 border border-white" src="/logos/logo-maxim.png" alt="Maxim Fateev"></img></div>
          <div>
            <div className="mb-4">Maxim Fateev (CEO)</div>
            <div>15 years at AWS and Uber working on AWS SWF and Uber Cadence</div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center border-white border-r">
            <img className="grayscale h-16 w-32 object-contain" src="/logos/logo-amplify.png" alt="vc"></img>
          </div>
          <div className="flex-1 flex items-center justify-center border-white border-r">
            <img className="grayscale h-16 w-32 object-contain" src="/logos/logo-sequoia.png" alt="vc"></img>
          </div>
          <div className="flex-1 flex items-center justify-center border-white border-r">
            <img style={{filter: "grayscale(1)"}} className="h-16 w-32 object-contain" src="/logos/logo-madrona.png" alt="vc"></img>
          </div>

        </div>
      </div>
    </div>
  )
}