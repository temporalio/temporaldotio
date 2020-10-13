// import Link from 'next/link'
import Nav from './nav'

export default function Hero() {
  return (
    <div id="hero" className={`
    min-h-screen container mx-auto flex flex-col justify-between
    `}>
      <style jsx>{`
      `}</style>
      <Nav />
      <h1 className="bigH1 uppercase">
        Build Invincible Apps
        </h1>
      <p className="text-2xl md:w-700">
        Temporal is the open source runtime for mission critical code atop unreliable, distributed services.
      </p>
      <div className="flex flex-col sm:flex-row justify-between mb-24 items-center">
        <div className="flex flex-col sm:flex-row  gap-4">
          <a className="button" style={{
            background: "#B2E7EA",
            color: "#141414"
          }} href="#explain-temporal">2 Minute Intro</a>
          <a className="button" href="#join-us">We're Hiring</a>
        </div>
        <a href="https://github.com/temporalio/temporal/" target="_blank" rel="noopener">I'm a developer, take me to code! →</a>
      </div>
    </div>
  )
}