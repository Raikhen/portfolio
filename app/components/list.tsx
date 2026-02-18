import StyledLink from './styled-link'

interface Element {
  name: string
  author?: string
  url: string
  from: string
}

interface ListProps {
  name: String;
  elements: Element[];
  className?: string;
  internalLinks?: boolean;
}

export default function List({
  name,
  elements,
  className,
  internalLinks = false
}: ListProps) {
  return (
     <section className={className ? className : ''}>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {name}
      </h1>
      <div>
        {elements.map((e) => (
          <div
            key={e.url}
            className="flex flex-col space-y-1 mb-4"
          >
            <div className="w-full grid grid-cols-3 gap-x-2">
              <p className="text-neutral-400 col-span-1">
                {e.from}
              </p>
              <p className="text-neutral-100 tracking-tight col-span-2">
                <StyledLink href={e.url} internal={internalLinks}>
                    {e.name}{e.author && <span className="text-neutral-400 group-hover/link:text-inherit"> by {e.author}</span>}
                </StyledLink>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}