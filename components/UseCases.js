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

      <Tabs className="container sm:ml-16 border-t border-b sm:border border-spaceblack bg-gray5 text-spaceblack flex flex-col sm:flex-row "
        onSelect={idx => setIndex(idx)}
      >
        <TabList className="sm:border-r border-spaceblack sm:w-64">
          <Tab className="px-4 py-8 flex items-center border-b border-spaceblack" selectedClassName="bg-white"><Circle selected={index === 0}/>
            Microservice Orchestration
          </Tab>
          <Tab className="px-4 py-8 flex items-center border-b border-spaceblack" selectedClassName="bg-white"><Circle selected={index === 2} /> 
          Financial Transactions</Tab>
          <Tab className="px-4 py-8 flex items-center border-b border-spaceblack" selectedClassName="bg-white"><Circle selected={index === 1} /> 
          Resource Provisioning</Tab>
          <Tab className="px-4 py-8 flex items-center " selectedClassName="bg-white"><Circle selected={index === 3} /> 
          Monitoring</Tab>
        </TabList>
        <div className="relative flex-1">
          <TabPanel className="p-4 sm:absolute w-full h-full" selectedClassName="bg-white">
            <h2>
            Temporal is a perfect fit for microservice orchestration scenarios. It guarantees that workflow code eventually completes, has built-in support for exponential activity retries, and simplifies the coding of the compensation logic with native Saga pattern support.

You can define retries, rollbacks, or even a human intervention step in the case of failure. Workflows are defined in general-purpose programming languages that bring the ultimate flexibility especially when compared to text-based DSL engines.

Temporal provides full visibility into each workflow's state. Contrast this with ad-hoc orchestration based on queues where getting a current status of each request is virtually impossible.

            </h2>
          </TabPanel>
          <TabPanel className="p-4 sm:absolute w-full h-full" selectedClassName="bg-white">
            <h2>TODO: COPY FOR FINANCIAL TRANSACTIONS</h2>
          </TabPanel>
          <TabPanel className="p-4 sm:absolute w-full h-full" selectedClassName="bg-white">
            <h2>
              
Provisioning resources depends on a series of potentially long-running operations with many possibilities for intermittent failures. While existing deployment tools support simple operations, many scenarios may still require a custom provisioning flow:
    - Automatic infrastructure provisioning for a new customer in multi-tenant environments.
    - Particularly large deployments when tens or even hundreds of thousands of resources should be configured.
    - Provisioning of custom resources that are not supported by off-the-shelf tools.
    - Complex configuration logic that is determined at deployment time.

    It's beneficial to have a single workflow engine to manage all the various tasks: spinning up the cluster, long term monitoring, managing upgrades, database schema migrations, automated staged rollout of new features.

    Some provisioning operations may take dozens of minutes or even hours to complete. Ad-hoc solutions may fail in the middle and leave the system in an undefined state.

Temporal workflows can express complex decision trees using a general-purpose programming language. Support for long-running operations, polling, responding to events, automatic retries are excellent building blocks for a robust provisioning flow. If a lengthy provisioning workflow fails in the middle, Temporal would handle the error and restart the flow at the right spot.

    Temporal can route activity execution to a specific process or host, which is useful for many provisioning scenarios.

    Many resource management operations require locking to ensure that only one mutation is executed on any given resource at a time. Temporal provides a strong guarantee of uniqueness via the operation identifier. This primitive enables the implementation of locking behavior in a fault-tolerant and scalable manner.


            </h2>
          </TabPanel>
          <TabPanel className="p-4 sm:absolute w-full h-full" selectedClassName="bg-white">
            <h2>
            Temporal provides guaranteed execution with exactly-once semantics with automatic retries.

Polling configuration can be as straightforward or sophisticated as needed:

- Workflows can run on a cron schedule with a single configuration setting.
- Alternatively, you can manually control the delays between intervals with `sleep` commands. For example, you can switch to more frequent executions in case of detected downtime.

The history service provides visibility into history for periodic workflow executions.

Scalability is another crucial advantage of using Temporal for periodic execution. Many use cases require periodic execution for a large number of entities. At Uber, some applications run recurring workflows for each customer. Imagine 100s of millions parallel cron jobs that don't require a separate batch processing framework.

Temporal support for long-running activities and unlimited retries also makes it a great fit for monitoring use cases.

            </h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  )
}