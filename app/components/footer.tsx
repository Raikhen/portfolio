import StyledLink from "./styled-link"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  let elements = [
    {
      name: 'github',
      href: 'https://github.com/raikhen',
    },
    {
      name: 'scholar',
      href: 'https://scholar.google.com/citations?hl=en&user=sjk8-F8AAAAJ',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/dylan-fridman',
    }
  ]

  return (
    <footer className="mb-16 mt-8">
      <ul className="-ml-1.5 font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0 text-neutral-100">
        {elements.map((e) => (
          <li key={e.name}>
            <StyledLink inParagraph href={e.href}>
              {e.name}
            </StyledLink>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-neutral-300">
        © {new Date().toLocaleString('en-us',{ month:'short', year:'numeric' })}
      </p>
    </footer>
  )
}
