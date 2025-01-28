import Link from 'next/link'

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

export default function StyledLink({
  href,
  children,
  inParagraph = false,
  internal = false
}) {
  return (
    <Link
      href={href}
      target={internal ? '_self' : '_blank'}
      className={`inline-flex items-center transform duration-500 px-1.5
        ${inParagraph ? 'hover:text-yellow-500' : 'hover:text-yellow-500'}`}
    >
      {inParagraph ? <ArrowIcon /> : null}
      <span className="ml-2">
        {children}
      </span>
    </Link>
  )
}