import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dylan Fridman
      </h1>
      <div className="grid grid-cols-3 space-x-8">
        <div className="col-span-2 flex flex-col gap-6">
          <p>
            I'm currently a MS student in Computer Science at Dartmouth College.
          </p>
          <p>
            Although I dedicated most of my adult life to the pursuit of a career in
            Mathematics and Computer Science Theory, I'm now looking for more direct ways to
            have a positive impact than through academia. As of right now, I'm aiming towards
            earning to give as either a software developer or quantitative trader.
          </p>
          <p>
            Whenever I'm not working, you can find me climbing mountains or training to do so.
          </p>
          {/*`I'm currently a Masters student in Computer Science at Dartmouth College. In the past,
          I've worked on computational topology and on mathematical formalization in Lean.
          Although I did my undergraduate in Mathematics, I'm moving away from pure math and towards
          more applied areas of computer science since I believe that's how I can make the most impact.`*/}
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
