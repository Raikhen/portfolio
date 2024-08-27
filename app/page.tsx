import StyledLink from './components/styled-link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dylan Fridman
      </h1>
      <p className="mb-4">
        {`I'm currently a Masters student in Computer Science at Dartmouth College.
        I did my undergraduate in Mathematics.`}
      </p>
      <p className="mb-4">
        {`Take a look at my `}
        <StyledLink inParagraph href="/cv.pdf">CV</StyledLink>
        .
      </p>
      <p>
        {`Besides coding, I like to climb.`}
      </p>
    </section>
  )
}
