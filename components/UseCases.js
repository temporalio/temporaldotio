// import Link from 'next/link'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Circle({selected}) {
  return <div className={"rounded-full w-4 h-4 border border-spaceblack inline-block mr-2 " + (selected ? "bg-spaceblack" : "")}></div>
}

export default function UseCases() {
  const [index, setIndex] = React.useState(0)
  return (
    <div id="use-cases" className={`
    border-b border-spaceblack
     bg-gray5
    flex flex-col pt-16 pb-32
    `}>
      <style jsx>{`
      `}</style>
      <h1 className="container mb-16 sm:ml-16 bigH1 text-spaceblack">Use Cases</h1>
      {/* <div>
      <div>

      <button>Distributed Cron</button>
      </div>
      </div> */}

      <Tabs className="container sm:ml-16 border border-spaceblack bg-gray5 text-spaceblack flex flex-col sm:flex-row "
        onSelect={idx => setIndex(idx)}
      >
        <TabList className="border-r border-spaceblack sm:w-64">
          <Tab className="px-4 py-8 flex items-center border-b border-spaceblack" selectedClassName="bg-white"><Circle selected={index === 0}/>
            Distributed Cron
          </Tab>
          <Tab className="px-4 py-8 flex items-center border-b border-spaceblack" selectedClassName="bg-white"><Circle selected={index === 1} /> Human Approval Flows</Tab>
          <Tab className="px-4 py-8 flex items-center border-b border-spaceblack" selectedClassName="bg-white"><Circle selected={index === 2} /> Financial Transactions</Tab>
          <Tab className="px-4 py-8 flex items-center " selectedClassName="bg-white"><Circle selected={index === 3} /> Microservice Orchestration</Tab>
        </TabList>
        <div className="relative flex-1">
          <TabPanel className="absolute w-full h-full" selectedClassName="bg-white">
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel className="absolute w-full h-full" selectedClassName="bg-white">
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel className="absolute w-full h-full" selectedClassName="bg-white">
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel className="absolute w-full h-full" selectedClassName="bg-white">
            <h2>Any content 4</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  )
}