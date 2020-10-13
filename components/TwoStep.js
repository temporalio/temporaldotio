// import Link from 'next/link'

export default function TwoStep() {
  return (
    <div className={`
    border-b border-white
    flex flex-col justify-evenly
    `}>
      <style jsx>{`
      img {
        mix-blend-mode: luminosity;
        opacity: 0.5;
      }
      .step {
        font-size: 288px;
        line-height: 160px;
        letter-spacing: 4px;
        text-transform: uppercase;
      }
      `}</style>
      <div className="flex border-t border-b border-white">
        <div className="flex flex-1 border-r border-white p-16">
          <span className="step mr-16">1</span>
          <div className="flex flex-col">
            <span className="mb-8">Write workflow functions in your favorite languages.</span>
            <div className="grid grid-cols-2 gap-4">
              <img className="w-16" src="/logos/logo-go.png" alt="logo" />
              <img className="w-16" src="/logos/logo-java.png" alt="logo" />
              <img className="w-16" src="/logos/logo-python.png" alt="logo" />
              <img className="w-16" src="/logos/logo-ruby.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 p-16">
          <span className="step mr-16">2</span>
          <div className="flex flex-col">
            <span className="mb-8">Temporal handles all the reliability boilerplate!</span>
            <div className="grid grid-cols-2 gap-4">
              <img className="w-16" src="/logos/logo-go.png" alt="logo" />
              <img className="w-16" src="/logos/logo-java.png" alt="logo" />
              <img className="w-16" src="/logos/logo-python.png" alt="logo" />
              <img className="w-16" src="/logos/logo-ruby.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-b border-white p-8">No More Queues</div>
    </div>
  )
}