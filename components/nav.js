import Link from 'next/link'

const links = [
  { href: 'https://nextjs.org/docs', label: 'Docs' },
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://github.com/vercel/next.js', label: 'Jobs' },
  { href: 'https://github.com/vercel/next.js', label: 'Support' },
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