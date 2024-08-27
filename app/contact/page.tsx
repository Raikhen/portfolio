import StyledLink from 'app/components/styled-link'
import ContactForm from 'app/components/contact-form'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact
      </h1>
      <ContactForm />
      <p className="mt-8">
        {`Equivalently, you can reach out to me at `}
        <StyledLink inParagraph href="mailto:dylan.fridman.gr@dartmouth.edu">
          dylan.fridman.gr@dartmouth.edu
        </StyledLink>.
      </p>
    </section>
  )
}
