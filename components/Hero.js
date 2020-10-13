// import Link from 'next/link'
import Nav from './nav'

export default function Hero() {
  return (
    <div className={`
    min-h-screen
    flex flex-col justify-evenly
    `}>
      <style jsx>{`
        .button {
          width: 300px;
          height: 58px;
          left: 50px;
          top: 857px;
          border: 1px solid #F2F2F2;
          box-sizing: border-box;
          border-radius: 46px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      <div className="container mx-auto">
      <Nav />
        <h1 className="bigH1 uppercase">
          Build Invincible Apps
        </h1>
        <p>
        Temporal is the open source runtime for mission critical code atop unreliable, distributed services.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <a className="button" style={{
              background: "#B2E7EA",
              color: "#141414"
            }} href="#intro">Watch 2 minute Intro</a>
            <a className="button" href="#jobs">We're Hiring</a>
          </div>
          <a href="https://github.com/temporalio/temporal/">I'm a developer, take me to code!</a>
        </div>
      </div>
    </div>
  )
}