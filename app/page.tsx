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
            Software engineer with a pure math background based in San
            Francisco.
          </p>
          <p>
            I care about making AGI go well. I'm actively looking for
            interesting projects so reach out if you want to collaborate.
          </p>
          <p>Big fan of pointy chunks of granite.</p>
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
