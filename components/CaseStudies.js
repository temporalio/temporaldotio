// import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function CaseStudies() {
  return (
    <div className={`
    border-b border-spaceblack
     bg-purple
    flex flex-col justify-evenly
    min-h-screen text-spaceblack
    `}>
      <style jsx>{`
      `}</style>
      <h1 className="bigH1">Case Studies</h1>
      <p>Relied on by the companies other companies rely on.</p>
      <Tabs className="border border-spaceblack flex flex-col">
        <div className="relative h-64 border-spaceblack border-b">
          <TabPanel className="absolute" selectedClassName="bg-white">
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel className="absolute" selectedClassName="bg-white">
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel className="absolute" selectedClassName="bg-white">
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel className="absolute" selectedClassName="bg-white">
            <h2>Any content 4</h2>
          </TabPanel>
        </div>
        <TabList className="flex">
          <Tab selectedClassName="bg-purple" className="p-4 bg-gray5 flex-1 border-r border-spaceblack">Distributed Cron</Tab>
          <Tab selectedClassName="bg-purple" className="p-4 bg-gray5 flex-1 border-r border-spaceblack">Human Approval Flows</Tab>
          <Tab selectedClassName="bg-purple" className="p-4 bg-gray5 flex-1 border-r border-spaceblack">Financial Transactions</Tab>
          <Tab selectedClassName="bg-purple" className="p-4 bg-gray5 flex-1 ">Microservice Orchestration</Tab>
        </TabList>
      </Tabs>
    </div>
  )
}