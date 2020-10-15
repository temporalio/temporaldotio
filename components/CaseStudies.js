// import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function CaseStudies() {
  return (
    <section id="case-studies" className={`
    border-b border-spaceblack
     bg-purple
    flex flex-col
    min-h-screen text-spaceblack
    `}>
      <div className="container pl-2 sm:pl-8 lg:pl-16">
        <h1 className="text-60 leading-60 sm:text-144 sm:leading-144 mt-4 sm:mt-8 sm:mb-4">Case Studies</h1>
        <p className="text-xl sm:text-3xl font-light mb-4">Relied on by the companies <span className="italic">other companies</span> rely on.</p>
      </div>
      <Tabs className="border-b border-spaceblack flex flex-col flex-1">
        <div className="relative h-64 flex-1 flex flex-col justify-end  border-spaceblack border-b">
          <TabPanel className="absolute h-full w-full p-2 sm:p-8 lg:px-16" selectedClassName="">
            <Quote
              url="https://docs.temporal.io/blog/Temporal-a-central-brain-for-Box"
              img="https://media-exp1.licdn.com/dms/image/C4D03AQG6rJUkchETHg/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=2j1QiqZ-N3eyYVS_9z24naXdxJrL5IAf20EgAZmk_U4"
              quote="One thing that the API does really well is give you this illusion of single threaded or at least local execution without having to get into the details of trying to orchestrate multiple things. It's pretty amazing."
              name="Steven Cipolla" title="Senior Staff Software Engineer, Box" />
          </TabPanel>

          <TabPanel className="absolute h-full w-full p-2 sm:p-8 lg:px-16" selectedClassName="">
            <Quote
              url="https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows"
              img="https://media-exp1.licdn.com/dms/image/C5603AQE9ZYjH-So7zA/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=-6LtmUDo6Uh4Hgqd6qagQzlGNbxv-e55hHYEIs_GX8k"
              quote="Developer happiness has increased. Thinking about our problems in terms of workflows and activities has clarified our product and now allow us to share workflow components with different teams."
              name="Ben Jacobson" title="Staff Software Engineer, Checkr" />
          </TabPanel>
          <TabPanel className="absolute h-full w-full p-2 sm:p-8 lg:px-16" selectedClassName="">
            <CoinbaseQuote
              url="https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase"
              img="https://pbs.twimg.com/profile_images/943640175/new_photo_400x400.jpg"
              quote="Trying to model complex SAGAS using a plain execution graph such as Zeebe and Step Functions provide will make things unnecessarily more complex, plus we want a solution which we could explore for more use cases that don't necessarily use SAGAS. So I think this is where Temporal* really shined."
              name="Anthony Dmitriyev" title="Software Engineer, Coinbase" />
          </TabPanel>
        </div>
        <TabList className="flex bg-gray5">
          <Tab selectedClassName="nograyscale" className=" grayscale p-2 flex-1 grid place-items-center border-r border-spaceblack">
            <img className="h-16 w-16 sm:h-32 sm:w-32 object-cover" src="/logos/logo-Box2.png" aria-label="Box logo" alt="Box logo" />
          </Tab>
          <Tab selectedClassName="nograyscale" className=" grayscale p-2 flex-1 grid place-items-center border-r border-spaceblack">
            <img className="h-16 w-16 sm:h-32 sm:w-32 object-contain" src="/logos/logo-Checkr.png" aria-label="Checkr logo" alt="Checkr logo" />
          </Tab>
          <Tab selectedClassName="nograyscale" className=" grayscale p-2 flex-1 grid place-items-center ">
            <img className="h-16 w-16 sm:h-32 sm:w-32 object-contain" src="/logos/logo-Coinbase.png" aria-label="Coinbase logo" alt="Coinbase logo" />
          </Tab>
        </TabList>
      </Tabs>
    </section>
  )
}

function Quote({ quote, name, url, title, img }) {
  return (
    <div className="">
      <blockquote className="mb-8 text-2xl leading-tight sm:text-3xl sm:leading-3xl lg:w-800 flex-1">
        “{quote}”
        <ExternalLink url={url} />
      </blockquote>
      <div className="flex items-center">
        <img className="inline mr-4 w-16 h-16 rounded-full border border-spaceblack" src={img} alt={name} />
        <div className="inline-flex flex-col sm:flex-row">
          <span className="font-bold mr-4">{name}</span>
          <span className="font-light">{title}</span>
        </div>
      </div>
    </div>
  )
}


function CoinbaseQuote({ quote, name, url, title, img }) {
  return (
    <div className="relative">
      <blockquote className="text-xl leading-tight sm:text-3xl sm:leading-2xl lg:w-800 flex-1">
        “{quote}”
        <ExternalLink url={url} />
      </blockquote>
      <div className="flex items-center p-4 sm:p-8">
        <img className="inline mr-4 w-12 h-12 rounded-full border border-spaceblack" src={img} alt={name} />
        <span className="font-bold mr-4">{name}</span>
        <span className="font-light">{title}</span>
      </div>
      <aside className="text-yellow-900 italic text-md leading-tight sm:text-lg">
        *As of the time of writing, Coinbase is using Cadence (the Temporal predecessor) and is only evaluating a future migration to Temporal
      </aside>
    </div>
  )
}



function ExternalLink({ url }) {

  return (
    <a href={url} className="text-blue-800 hover:text-blue-500">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 inline ml-1 sm:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>

  )
}