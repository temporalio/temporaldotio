// import Link from 'next/link'

import ReactPlayer from 'react-player';

// import styles from './ResponsivePlayer.module.css';

function ResponsivePlayer({ url,
  // loop, playing
}) {
  return (
    <ReactPlayer
      style={{
        // position: 'absolute',
        // top: '0',
        // left: '15%',
        border: '1px solid #E0E0E0',
      }}
      url={url}
      // loop={loop}
      // playing={playing}
      width="800px"
      height="500px"
    />
  );
}
export default function ExplainTemporal() {
  return (
    <div id="explain-temporal" className={`
    min-h-screen 
    border-b border-gray5
    flex flex-col justify-evenly
    px-8 py-16
    `}>
      <style jsx>{`

      @media (min-width: 640px) {
        .playerShadow {
          position: absolute;
          z-index: -1;
          margin-top: 10px;
          margin-left: 20px;
          width: 800px;
          height: 500px;
          border: 1px solid #E0E0E0;
        }
      }
      .wrapper {
        display: flex;
        justify-items: center;
        position: relative;
        /* padding-top: 56.25%; */
        /* Player ratio: 100 / (1280 / 720) */
      }
      `}</style>
      <h1 className="mt-8 text-2xl">Watch us explain Temporal in 2 Minutes</h1>
      <div className="wrapper my-8 flex justify-center">
        <ResponsivePlayer url="https://www.youtube.com/watch?v=bc0qUobRhsw" />
        <div className="playerShadow"></div>
      </div>
      <div className="flex gap-4 justify-center my-8">
        <a className="button" style={{
          background: "#B2E7EA",
          color: "#141414"
        }} href="#intro">Watch 2 minute Intro</a>
        <a className="button" href="#jobs">We're Hiring</a>
      </div>
    </div>
  )
}