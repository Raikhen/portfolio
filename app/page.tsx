import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dylan Fridman
      </h1>
      <div className="grid grid-cols-3 space-x-8">
        <p className="mb-4 col-span-2">
          {`I'm currently a Masters student in Computer Science at Dartmouth College. In the past,
          I've worked on computational topology and on mathematical formalization in Lean.
          Although I did my undergraduate in Mathematics, I'm moving away from pure math and towards
          more applied areas of computer science since I believe that's how I can make the most impact.`}
        </p>
        <div className="col-span-1">
          <Image
            src="/images/dylan.jpg"
            alt="Dylan Fridman"
            width={1000}
            height={10000}
            className="rounded"
          />
        </div>
      </div>
    </section>
  )
}
