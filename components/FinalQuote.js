// import Link from 'next/link'

export default function FinalQuote() {
  return (
    <div className={`
    border-b border-white
  text-spaceblack
    min-h-screen
    flex flex-col bg-lightteal
    `}>
      <style jsx>{`
      blockquote {
        font-size: 64px;
        line-height: 72px;
        width: 1032px;
      }
      `}</style>
      <blockquote className="text-6xl flex-1 border-b border-spaceblack">
        
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
      </blockquote>
      <div className="flex p-8">
        <img className="inline mr-4 rounded-full border border-spaceblack" src="lksjd" alt="todo" />
        <span className="font-bold mr-1">Judith Black / </span>
        <span className="font-light">CEO, Monlskdjlks</span>
      </div>
    </div>
  )
}