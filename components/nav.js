import Link from 'next/link'

const links = [
  { href: 'https://docs.temporal.io/blog', label: 'Blog' },
  { href: 'https://docs.temporal.io/docs/overview', label: 'Docs' },
  { href: 'https://github.com/temporalio/temporal/', label: 'GitHub' },
  { href: '/careers', label: 'Jobs' },
  { href: 'https://community.temporal.io/', label: 'Community' },
]

export default function Nav() {
  return (
    <nav>
      <style jsx>{`
      @media (min-width: 640px) {
        img {
          width: 225px !important;
          height: 56px !important;
        }
      }
      img {
        width: 180px;
        height: 45px;
        object-fit: contain;
      }
      `}</style>
      <ul className="flex justify-between items-center py-4">
        <li>
          <Link href="/">
            <a href="/" className="text-blue-500 no-underline">
              <img src="/logo-with-text-white-nobg.svg" alt="Temporal logo"></img>
            </a>
          </Link>
        </li>
        <ul className="hidden md:flex justify-between md:text-xl lg:text-2xl items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="hover:text-blue-300">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}