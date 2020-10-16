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
      light
      controls
      // loop={loop}
      // playing={playing}
      width="800px"
      height="500px"
    />
  );
}
export default function ExplainTemporal() {
  const [clicked, setClicked] = React.useState(false)
  return (
    <section id="explain-temporal" className={`
    min-h-screen 
    container mx-auto
    flex flex-col justify-evenly
    px-8 py-16
    `}>
      <style jsx>{`

      @media (min-width: 1024px) {
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
      <h1 className="sm:mb-4 text-4xl sm:text-60 leading-48 sm:leading-72">Temporal in 2 Minutes</h1>
      <div className="wrapper my-8 flex justify-center">
        <ResponsivePlayer url="https://www.youtube.com/watch?v=f-18XztyN6c&feature=youtu.be" />
        <div className="playerShadow"></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center my-8">
        <a className="button w-300 h-60 sm:mr-4 mb-4 sm:mb-0  text-spaceblack bg-temporalblue  hover:bg-teal-200" href="https://www.youtube.com/channel/UCGovZyy8OfFPNlNV0i1fI1g">More on YouTube</a>
        {clicked ?
          <div className="button w-300 h-60 bg-gray5">
            <div className=" flex justify-around w-full">
              <a className="" href="https://docs.temporal.io/docs/go-run-your-first-app">
                <img aria-label="go SDK" className="w-16 h-16 md:w-16 md:h-16 transition-transform transform duration-300 hover:scale-110  object-contain" src="/logos/logo-go.png" alt="logo" />
              </a>
              <a className="" href="https://docs.temporal.io/docs/java-run-your-first-app">
                <img aria-label="java SDK" className="w-16 h-16 md:w-16 md:h-16 transition-transform transform duration-300 hover:scale-110  object-contain" src="/logos/logo-java.png" alt="logo" />
              </a>
            </div>
          </div>
          : <button className="button hover:text-temporalblue w-300 h-60" onClick={() => setClicked(true)}>Run Your First App</button>}
      </div>
    </section>
  )
}