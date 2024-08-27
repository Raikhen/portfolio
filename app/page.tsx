import StyledLink from './components/styled-link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dylan Fridman
      </h1>
      <p className="mb-4">
        {`I'm currently a Masters student in Computer Science at Dartmouth College. In the past,
        I've worked on computational topology and on mathematical formalization in Lean.
        Although I did my undergraduate in Mathematics, I'm moving away from pure math and towards
        more applied areas of computer science since I believe that's how I can make the most impact.`}
      </p>
      <p>
        {`Take a look at my `}
        <StyledLink inParagraph href="/cv.pdf">CV</StyledLink>
        .
      </p>
    </section>
  )
}
