import Image from 'next/image'
import StyledLink from './components/styled-link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dylan Fridman
      </h1>
      <div className="grid grid-cols-3 space-x-8">
        <div className="col-span-2 flex flex-col gap-6">
          <p>
            I'm a currently working as a software engineer at{' '}
            <StyledLink href="https://ivo.ai" inParagraph>
              Ivo
            </StyledLink>
            . Before that, I was studying Mathematics and Computer Science at
            Dartmouth College.
          </p>
          <p>
            Whenever I'm not working, you can find me out in the mountains or
            laying on the floor after unsuccessfully trying some calisthenics
            skill.
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src="/images/dylan.jpg"
            alt="Dylan Fridman"
            width={1000}
            height={300}
            className="rounded"
          />
        </div>
      </div>
    </section>
  )
}
