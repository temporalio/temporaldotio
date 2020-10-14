// import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function CaseStudies() {
  return (
    <div id="case-studies" className={`
    border-b border-spaceblack
     bg-purple
    flex flex-col
    min-h-screen text-spaceblack
    `}>
      <style jsx>{`

      `}</style>
      <div className="container ml-2 sm:ml-16">
        <h1 className="text-60 leading-60 sm:text-144 sm:leading-144 my-8 sm:mt-16 sm:mb-4">Case Studies</h1>
        <p className="text-xl sm:text-3xl font-light">Relied on by the companies other companies rely on.</p>
      </div>
      <Tabs className="border-b border-spaceblack flex flex-col flex-1">
        <div className="relative h-64 flex-1 flex flex-col justify-end  border-spaceblack border-b">
          <TabPanel className="absolute h-full w-full p-2 sm:p-8 sm:px-16" selectedClassName="">
            <Quote
            url="https://deploy-preview-129--mystifying-fermi-1bc096.netlify.app/blog/Temporal-a-central-brain-for-Box" 
            img="https://media-exp1.licdn.com/dms/image/C4D03AQG6rJUkchETHg/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=2j1QiqZ-N3eyYVS_9z24naXdxJrL5IAf20EgAZmk_U4" 
            quote="One thing that the API does really well is give you this illusion of single threaded or at least local execution without having to get into the details of trying to orchestrate multiple things. It's pretty amazing." 
            name="Steven Cipolla" title="Senior Staff Software Engineer, Box" />
          </TabPanel>
          <TabPanel className="absolute h-full w-full p-2 sm:p-8 sm:px-16" selectedClassName="">
            <Quote
            url="https://deploy-preview-129--mystifying-fermi-1bc096.netlify.app/blog/how-temporal-simplified-checkr-workflows" 
            img="https://media-exp1.licdn.com/dms/image/C5603AQE9ZYjH-So7zA/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=-6LtmUDo6Uh4Hgqd6qagQzlGNbxv-e55hHYEIs_GX8k" 
            quote="Developer happiness has increased. Thinking about our problems in terms of workflows and activities has clarified our product and now allow us to share workflow components with different teams."
            name="Ben Jacobson" title="Staff Software Engineer, Checkr" />
          </TabPanel>
          <TabPanel className="absolute h-full w-full p-2 sm:p-8 sm:px-16" selectedClassName="">
            <CoinbaseQuote
            url="https://deploy-preview-129--mystifying-fermi-1bc096.netlify.app/blog/reliable-crypto-transactions-at-coinbase" 
            img="https://pbs.twimg.com/profile_images/943640175/new_photo_400x400.jpg" 
            quote="Trying to model complex SAGAS using a plain execution graph such as Zeebe and Step Functions provide will make things unnecessarily more complex, plus we want a solution which we could explore for more use cases that don't necessarily use SAGAS. So I think this is where Temporal* really shined." 
            name="Anthony Dmitriyev" title="Software Engineer, Coinbase" />
          </TabPanel>
        </div>
        <TabList className="flex bg-gray5">
          <Tab selectedClassName="bg-purple2" className="p-2 flex-1 grid place-items-center border-r border-spaceblack">
            <img className="h-16 w-16 sm:h-32 sm:w-32 object-contain grayscale" src="/logos/logo-Box.png" aria-label="Box logo" alt="Box logo" />
          </Tab>
          <Tab selectedClassName="bg-purple2" className="p-2 flex-1 grid place-items-center border-r border-spaceblack">
            <img className="h-16 w-16 sm:h-32 sm:w-32 object-contain grayscale" src="/logos/logo-Checkr.png" aria-label="Checkr logo" alt="Checkr logo" />
          </Tab>
          <Tab selectedClassName="bg-purple2" className="p-2 flex-1 grid place-items-center ">
            <img className="h-16 w-16 sm:h-32 sm:w-32 object-contain grayscale" src="/logos/logo-Coinbase.png" aria-label="Coinbase logo" alt="Coinbase logo" />
          </Tab>
        </TabList>
      </Tabs>

    </div>
  )
}

function Quote({ quote, name, url, title, img }) {
  return (
    <div className="">
      <blockquote className="text-lg leading-lg sm:text-3xl sm:leading-3xl sm:w-800 flex-1">
        “{quote}”
      </blockquote>
      <a href={url} className="flex items-center p-8">
        <img className="inline mr-4 w-16 h-16 rounded-full border border-spaceblack" src={img} alt="todo" />
        <span className="font-bold mr-4">{name}</span>
        <span className="font-light">{title}</span>
      </a>
    </div>
  )
}


function CoinbaseQuote({ quote, name, url, title, img }) {
  return (
    <div className="relative">
      <blockquote className="text-lg leading-tight sm:text-3xl sm:leading-2xl sm:w-800 flex-1">
        “{quote}”
      </blockquote>
      <a href={url} className="flex items-center p-4 sm:p-8 text-blue-900 hover:text-blue-700">
        <img className="inline mr-4 w-12 h-12 rounded-full border border-spaceblack" src={img} alt="todo" />
        <span className="font-bold mr-4">{name}</span>
        <span className="font-light">{title}</span>
      </a>
      <aside className="text-yellow-900 italic text-md leading-tight sm:text-lg sm:absolute top-0 right-0 sm:w-48">
        *As of the time of writing, Coinbase is using Cadence (the Temporal predecessor) and is only evaluating a future migration to Temporal
      </aside>
    </div>
  )
}