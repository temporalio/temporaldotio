// import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function UseCases() {
  return (
    <div className={`
    border-b border-spaceblack
     bg-gray5
    flex flex-col justify-evenly
    min-h-screen
    `}>
      <style jsx>{`
      `}</style>
      <h1 className="bigH1 text-spaceblack">Use Cases</h1>
      {/* <div>
      <div>

      <button>Distributed Cron</button>
      </div>
      </div> */}

      <Tabs className="border border-spaceblack bg-gray5 text-spaceblack flex">
        <TabList className="border-r border-spaceblack w-56">
          <Tab className="p-4 border-b border-spaceblack">Distributed Cron</Tab>
          <Tab className="p-4 border-b border-spaceblack">Human Approval Flows</Tab>
          <Tab className="p-4 border-b border-spaceblack">Financial Transactions</Tab>
          <Tab className="p-4 ">Microservice Orchestration</Tab>
        </TabList>
        <div className="relative flex-1">
          <TabPanel className="absolute" selectedClassName="bg-white">
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel className="absolute"  selectedClassName="bg-white">
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel className="absolute"  selectedClassName="bg-white">
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel className="absolute"  selectedClassName="bg-white">
            <h2>Any content 4</h2>
          </TabPanel>
          </div>
      </Tabs>
    </div>
  )
}