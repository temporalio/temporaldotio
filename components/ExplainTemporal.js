import ReactPlayer from 'react-player';
import DirectionalControl from './DirectionalControl';

function ResponsivePlayer({ url }) {
  return (
    <ReactPlayer
      style={{
        border: '1px solid #E0E0E0'
      }}
      url={url}
      light
      controls
      width="800px"
      height="500px"
    />
  );
}
export default function ExplainTemporal() {
  // const [clicked, setClicked] = React.useState(false);
  return (
    <section
      id="explain-temporal"
      className={`
    min-h-screen max-h-[1080px]
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
            border: 1px solid #e0e0e0;
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
      <h1 className="sm:mb-4 text-4xl sm:text-60 leading-48 sm:leading-72">
        Temporal in 2 Minutes
      </h1>
      <div className="wrapper my-8 flex justify-center">
        <ResponsivePlayer url="https://www.youtube.com/watch?v=f-18XztyN6c&feature=youtu.be" />
        <div className="playerShadow"></div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row justify-center items-center my-8">
        <DirectionalControl href="https://www.youtube.com/channel/UCGovZyy8OfFPNlNV0i1fI1g">
          More on YouTube
          <svg
            className="w-4 inline ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </DirectionalControl>
        <DirectionalControl secondary href="https://docs.temporal.io/docs/external-resources">
          Why Temporal?
        </DirectionalControl>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center my-4">
        <a
          className="font-bold hover:underline text-blue-400 hover:text-blue-200"
          href="mailto:support@temporal.io?subject=[Temporal.io] Enquiry&body=Hi, I heard about Temporal via YOUR_SOURCE_HERE and I had some questions...">
          More questions? Email us!
        </a>
      </div>
    </section>
  );
}
