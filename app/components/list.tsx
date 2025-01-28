import StyledLink from './styled-link'

interface Element {
  name: string
  url: string
  from: string
}

interface ListProps {
  name: String;
  elements: Element[];
  className?: string;
}

export default function List({ name, elements, className }: ListProps) {
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
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-400 w-[160px]">
                {e.from}
              </p>
              <p className="text-neutral-100 tracking-tight">
                <StyledLink href={e.url}>
                    {e.name}
                </StyledLink>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}