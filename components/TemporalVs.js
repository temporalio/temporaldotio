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
    <div className={`
    border-b border-white
    text-white
    min-h-screen
    `}>
      <style jsx>{`
      `}</style>

      <h1 className="bigH1 mb-4">Temporal Vs.</h1>
      <Accordion
        allowMultipleExpanded
        allowZeroExpanded
        preExpanded={['Handwritten']}
        className="accordion border-t border-l border-r border-white">
        <AccItem header="Handwritten">
          <h2 className="font-bold">Most developers hand-write async flows using queues and job processors.</h2>
          <p>This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.

          Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
        <AccItem header="Airflow/Prefect">
          <h2 className="font-bold mb-4">Most developers hand-write async flows using queues and job processors.</h2>
          <p className="mb-3">This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.</p>
          <p className="mb-3">Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
        <AccItem header="Camunda">
          <h2 className="font-bold mb-4">Most developers hand-write async flows using queues and job processors.</h2>
          <p className="mb-3">This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.</p>
          <p className="mb-3">Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
        <AccItem header="AWS Step Functions">
          <h2 className="font-bold mb-4">Most developers hand-write async flows using queues and job processors.</h2>
          <p className="mb-3">This often requires requisitioning new infrastructure, and hand-writing often buggy, not-well-distributed and hard-to-test code with a lot of ad hoc code to review that has nothing to do with the business logic.</p>
          <p className="mb-3">Temporal offers a battle tested framework to organize all async business logic, running it atop a single set of infrastructure at massive scale.</p>
        </AccItem>
      </Accordion>
    </div>
  )
}


function AccItem({ header, children }) {
  return (
    <AccordionItem uuid={header && header === 'Handwritten'} className="border-b border-white">

      <AccordionItemState>
        {({ expanded }) => (
          <>
            <AccordionItemHeading className={(expanded ? ' bg-gray5 text-spaceblack' : '') + ' p-4 border-b border-spaceblack'}>
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