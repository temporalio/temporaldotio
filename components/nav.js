import Link from 'next/link'

const links = [
  { href: 'https://docs.temporal.io/docs/overview', label: 'Docs' },
  { href: 'https://github.com/temporalio/temporal/', label: 'GitHub' },
  { href: 'https://jobs.lever.co/temporal', label: 'Jobs' },
  { href: 'https://community.temporal.io/', label: 'Community' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center py-4">
        <li>
          <Link href="/">
            <a href="/" className="text-blue-500 no-underline">
              <img src="/logo-font-curve-dark.svg" alt="Temporal logo"
                style={{
                  width: 180,
                  height: 45,
                  marginLeft: '-15px',
                  objectFit: 'cover',
                  filter: "invert(1)",
                }}
              ></img>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
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