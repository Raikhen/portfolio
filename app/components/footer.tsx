import Link from 'next/link'

export default function Footer() {
  let elements = [
    {
      name: 'github',
      href: 'https://github.com/raikhen',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/dylan-fridman',
    },
    {
      name: 'scholar',
      href: 'https://scholar.google.com/citations?hl=en&user=sjk8-F8AAAAJ',
    },
    {
      name: 'cv',
      href: '/cv.pdf',
    },
    {
      name: 'email',
      href: 'mailto:dylanfridman@gmail.com',
    },
  ]

  return (
    <footer className="mb-16 mt-8">
      <ul className="-ml-[8px] font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-100">
        {elements.map((e) => (
          <Link
            target="_blank"
            key={e.href}
            href={e.href}
            className="highlight-link flex align-middle relative py-0.5 px-1.5 m-1"
          >
            {e.name}
          </Link>
        ))}
      </ul>
      <p className="mt-8 text-neutral-300">
        ©{' '}
        {new Date().toLocaleString('en-us', {
          month: 'short',
          year: 'numeric',
        })}
      </p>
    </footer>
  )
}
