import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ExternalLinkWithSVGIcon } from './shared';

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className={`
    border-b border-spaceblack
     bg-purple
     container mx-auto
    flex flex-col
 text-spaceblack
    `}>
      <div className="container pl-2 sm:pl-8 lg:pl-16">
        <h1 className="text-60 leading-60 sm:text-144 sm:leading-144 mt-4 sm:mt-8 sm:mb-4">
          Case Studies
        </h1>
        <p className="text-xl sm:text-3xl font-light mb-4">
          Relied on by the companies <span className="italic">other companies</span> rely on.
        </p>
      </div>
      <Tabs className="relative border-b border-spaceblack">
        <div className="relative h-400 sm:h-400 border-spaceblack border-b">
          <TabPanel className="absolute h-full w-full p-2 sm:p-8 lg:px-16" selectedClassName="z-10">
            <Quote
              url="https://docs.temporal.io/blog/temporal-a-central-brain-for-box/"
              img="/logos/photo-steven.png"
              quote="One thing that the API does really well is give you this illusion of single threaded or at least local execution without having to get into the details of trying to orchestrate multiple things. It's pretty amazing."
              name="Steven Cipolla"
              title="Senior Staff Software Engineer, Box"
            />
          </TabPanel>

          <TabPanel className="absolute h-full w-full p-2 sm:p-8 lg:px-16" selectedClassName="z-10">
            <Quote
              url="https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows/"
              img="https://avatars1.githubusercontent.com/u/114386"
              quote="Developer happiness has increased. Thinking about our problems in terms of workflows and activities has clarified our product and now allow us to share workflow components with different teams."
              name="Ben Jacobson"
              title="Staff Software Engineer, Checkr"
            />
          </TabPanel>
          <TabPanel className="absolute h-full w-full p-2 sm:p-8 lg:px-16" selectedClassName="z-10">
            <CoinbaseQuote
              url="https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase"
              img="https://pbs.twimg.com/profile_images/943640175/new_photo_400x400.jpg"
              quote="Trying to model complex SAGAS using a plain execution graph such as Zeebe and Step Functions provide will make things unnecessarily more complex, plus we want a solution which we could explore for more use cases that don't necessarily use SAGAS. So I think this is where Temporal* really shined."
              name="Anthony Dmitriyev"
              title="Software Engineer, Coinbase"
            />
          </TabPanel>
        </div>
        <TabList className="flex bg-gray5">
          <Tab
            selectedClassName="nograyscale"
            className="cursor-pointer grayscale p-2 flex-1 grid place-items-center border-r border-spaceblack">
            <img
              className="presetTransition hover:scale-110 h-16 w-16 sm:h-32 sm:w-32 object-cover"
              src="/logos/logo-Box2.png"
              aria-label="Box logo"
              alt="Box logo"
            />
          </Tab>
          <Tab
            selectedClassName="nograyscale"
            className="cursor-pointer grayscale p-2 flex-1 grid place-items-center border-r border-spaceblack">
            <img
              className="presetTransition hover:scale-110 h-16 w-16 sm:h-32 sm:w-32 object-contain"
              src="/logos/logo-Checkr.png"
              aria-label="Checkr logo"
              alt="Checkr logo"
            />
          </Tab>
          <Tab
            selectedClassName="nograyscale"
            className="cursor-pointer grayscale p-2 flex-1 grid place-items-center ">
            <img
              className="presetTransition hover:scale-110 h-16 w-16 sm:h-32 sm:w-32 object-contain"
              src="/logos/logo-Coinbase.svg"
              aria-label="Coinbase logo"
              alt="Coinbase logo"
            />
          </Tab>
        </TabList>
      </Tabs>
    </section>
  );
}

function Quote({ quote, name, url, title, img }) {
  return (
    <div className="">
      <blockquote className="mb-8 text-2xl leading-tight sm:text-3xl sm:leading-3xl lg:w-800 flex-1">
        “{quote}”
        <ExternalLinkWithSVGIcon url={url} />
      </blockquote>
      <div className="flex items-center">
        <img
          className="inline mr-4 w-16 h-16 rounded-full border border-spaceblack"
          src={img}
          alt={name}
        />
        <div className="inline-flex flex-col sm:flex-row">
          <span className="font-bold mr-4">{name}</span>
          <span className="font-light">{title}</span>
        </div>
      </div>
    </div>
  );
}

function CoinbaseQuote({ quote, name, url, title, img }) {
  return (
    <div className="relative">
      <blockquote className="text-xl leading-tight sm:text-3xl sm:leading-2xl lg:w-800 flex-1">
        “{quote}”
        <ExternalLinkWithSVGIcon url={url} />
      </blockquote>
      <div className="flex justify-between items-center">
        <div className="flex items-center p-4 sm:p-8">
          <img
            className="inline mr-4 w-12 h-12 rounded-full border border-spaceblack"
            src={img}
            alt={name}
          />
          <span className="flex flex-col">
            <span className="font-bold mr-4">{name}</span>
            <span className="font-light">{title}</span>
          </span>
        </div>
        <aside className="w-300 text-yellow-900 italic text-md leading-tight sm:text-lg">
          *Coinbase is using Cadence (the Temporal predecessor) and is only evaluating a future
          migration to Temporal
        </aside>
      </div>
    </div>
  );
}
