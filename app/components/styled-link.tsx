import Link from 'next/link'
import { ReactNode } from 'react'

export default function StyledLink({
  href,
  children,
  inParagraph = false,
  internal = false,
}: {
  href: string
  children: ReactNode
  inParagraph?: boolean
  internal?: boolean
}) {
  return (
    <Link
      href={href}
      target={internal ? '_self' : '_blank'}
      className={`${inParagraph ? 'font-semibold' : ''}`}
    >
      <span className="highlight-link p-1 -m-1 group/link">{children}</span>
    </Link>
  )
}
