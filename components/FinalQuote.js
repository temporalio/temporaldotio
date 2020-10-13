// import Link from 'next/link'

export default function FinalQuote() {
  return (
    <div id="final-quote" className={`
    border-b border-white
  text-spaceblack
    flex flex-col bg-lightteal
    `}>
      <style jsx>{`

@media (min-width: 640px) { 
  blockquote {
    /*
    font-size: 64px;
    line-height: 72px;
    width: 1032px;
    */
  }
}
      `}</style>
      <blockquote className="text-4xl flex-1 px-8 pt-16 pb-16">

        <p className="mb-4">“HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the HashiCorp Cloud Platform. </p>

        <p className="mb-4">Temporal’s technology satisfied all of these requirements out of the box and allowed our developers to focus on business logic. </p>

        <p className="mb-4">Without Temporal’s technology, we would’ve spent a significant amount of time rebuilding Temporal and would’ve very likely done a worse job.”</p>
      </blockquote>
      <div className="flex items-center p-8 border-t border-spaceblack">
        <img className="inline mr-4 w-16 h-16 rounded-full border border-spaceblack" src="/logos/photo-Mitchell.png" alt="Mitchell Hashimoto" />
        <span className="font-bold mr-1">Mitchell Hashimoto / </span>
        <span className="font-light">Co-founder, Hashicorp</span>
      </div>
    </div>
  )
}