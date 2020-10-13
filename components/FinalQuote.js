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
    font-size: 64px;
    line-height: 72px;
    width: 1032px;
  }
}
      `}</style>
      <blockquote className="text-6xl flex-1 px-8 pt-16 pb-64">
        
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
      </blockquote>
      <div className="flex p-8 border-t border-spaceblack">
        <img className="inline mr-4 rounded-full border border-spaceblack" src="lksjd" alt="todo" />
        <span className="font-bold mr-1">Judith Black / </span>
        <span className="font-light">CEO, Monlskdjlks</span>
      </div>
    </div>
  )
}