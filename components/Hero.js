// import Link from 'next/link'
import Nav from './nav'

function Bold({children}) {
  return <span className="font-bold">{children}</span>
}

export default function Hero() {
  return (
    <div id="hero" className={`
    min-h-screen container mx-auto flex flex-col justify-between p-4 sm:p-4
    `}>
      <style jsx>{`
      `}</style>
      <Nav />
      <div>
        <h1 className="text-60 leading-60 mb-8 sm:text-144 sm:leading-144 uppercase sm:w-800">
          Build Invincible Apps
          </h1>
        <p className="text-2xl md:w-700 mb-8">
          Temporal is the <Bold>open source</Bold> platform for <Bold>mission critical</Bold> code that interacts with <Bold>unreliable, distributed</Bold> services.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-8 sm:mb-8 items-center">
        <div className="flex flex-col sm:flex-row mb-4 gap-4 lg:text-xl">
          <a className="button w-300 h-60 md:w-200 lg:w-300" style={{
            background: "#B2E7EA",
            color: "#141414"
          }} href="#explain-temporal">2 Minute Intro</a>
          <a className="button  w-300 h-60 md:w-200 lg:w-300" href="#join-us">We're Hiring</a>
        </div>
        <a className="lg:text-xl" href="https://docs.temporal.io/docs/go-run-your-first-app" target="_blank" rel="noopener">I'm a developer, take me to code! →</a>
      </div>
    </div>
  )
}