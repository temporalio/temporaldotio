import Link from 'next/link';

const links = [
  { href: 'https://docs.temporal.io/blog', label: 'Blog' },
  { href: '/usecases', label: 'Usecases' },
  { href: 'https://docs.temporal.io/', label: 'Docs' },
  { href: '/careers', label: 'Jobs' },
  { href: 'https://community.temporal.io/', label: 'Community' }
];

export function Nav() {
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
      <ul className="flex items-center justify-between py-4">
        <li>
          <Link href="/">
            <a href="/" className="text-blue-500 no-underline">
              <img src="/logo-with-text-white-nobg.svg" alt="Temporal logo"></img>
            </a>
          </Link>
        </li>
        <ul className="items-center justify-between hidden md:flex md:text-xl lg:text-2xl space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
