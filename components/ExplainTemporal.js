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
        border: '1px solid #f2f2f2'
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
    <div className={`
    min-h-screen 
    border-b border-white
    flex flex-col justify-evenly
    `}>
      <style jsx>{`
      .playerShadow {
        position: absolute;
        z-index: -1;
        margin-top: 10px;
        margin-left: 20px;
        width: 800px;
        height: 500px;
        border: 1px solid #f2f2f2;
      }
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

      .wrapper {
        display: flex;
        justify-items: center;
        position: relative;
        /* padding-top: 56.25%; */
        /* Player ratio: 100 / (1280 / 720) */
      }
      h1 {
        font-size: 64px;
        line-height: 72px;
        width: 700px
      }
      `}</style>
      <h1 className="mt-8">Watch us explain Temporal in 60 Seconds</h1>
      <div className="wrapper my-8 flex justify-center">
        <ResponsivePlayer url="https://www.youtube.com/watch?v=aUUhFAupUbk" />
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