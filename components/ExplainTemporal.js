import ReactPlayer from 'react-player';
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
      <div className="flex flex-col sm:flex-row justify-center items-center my-8">
        <a
          className="button w-300 h-60 sm:mr-4 mb-4 sm:mb-0  text-spaceblack bg-temporalblue  hover:bg-teal-200"
          href="https://www.youtube.com/channel/UCGovZyy8OfFPNlNV0i1fI1g">
          More on YouTube
        </a>
        <a
          className="button w-300 h-60 hover:text-temporalblue"
          href="https://docs.temporal.io/docs/external-resources">
          I Still Don't Get It
        </a>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center my-8">
        <a
          className="font-bold hover:underline text-blue-400 hover:text-blue-200"
          href="mailto:support@temporal.io?subject=[Temporal.io] Enquiry&body=Hi, I heard about Temporal via YOUR_SOURCE_HERE and I had some questions...">
          Email us — we answer all questions!
        </a>
      </div>
    </section>
  );
}
