// import Link from 'next/link'


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';

export default function TemporalVs() {
  return (
    <div id="temporal-vs" className={`
    border-b border-white
    text-white
    min-h-screen
    px-2 sm:px-8 py-16
    `}>
      <style jsx>{`
      `}</style>

      <h1 className=" text-60 leading-60 sm:text-144 sm:leading-144 uppercase mb-4 sm:mb-16">Temporal Vs.</h1>
      <h2 className="font-light italic text-md sm:text-2xl mb-4">What's the difference between Temporal and...</h2>
      <Accordion
        allowMultipleExpanded={false}
        allowZeroExpanded
        preExpanded={['Handwritten']}
        className="accordion border-t border-l border-r border-white mb-32 container">
        <AccItem uuid="Handwritten" header="Handwritten">
          <h2 className="font-bold">Most developers hand-write async flows using queues and job processors.</h2>
          <p>This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.

          Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
        <AccItem uuid="Airflow" header="Airflow/Prefect">
          <h2 className="font-bold mb-4">Most developers hand-write async flows using queues and job processors.</h2>
          <p className="mb-3">This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.</p>
          <p className="mb-3">Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
        <AccItem uuid="Camunda" header="Camunda">
          <h2 className="font-bold mb-4">Most developers hand-write async flows using queues and job processors.</h2>
          <p className="mb-3">This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.</p>
          <p className="mb-3">Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
        <AccItem uuid="AWS" header="AWS Step Functions">
          <h2 className="font-bold mb-4">Most developers hand-write async flows using queues and job processors.</h2>
          <p className="mb-3">This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.</p>
          <p className="mb-3">Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
      </Accordion>
    </div>
  )
}


function AccItem({ header, children, uuid}) {
  return (
    <AccordionItem uuid={uuid} className="border-b border-white">

      <AccordionItemState>
        {({ expanded }) => (
          <>
            <AccordionItemHeading className={(expanded ? ' bg-gray5 text-spaceblack' : '') + ' p-4 border-b border-spaceblack text-2xl'}>
              <AccordionItemButton className="flex justify-between">
                <span>{header}</span>
                <span>{expanded ? "❌" : "➕"}</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={(expanded ? 'bg-white text-spaceblack' : '') + ' p-4'}>
              {children}
            </AccordionItemPanel>
          </>
        )}
      </AccordionItemState>
    </AccordionItem>

  )
}