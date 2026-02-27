import { Navbar } from './components/nav'
import Footer from './components/footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">404</h1>
        <p>
          You seem lost. Consider getting a{' '}
          <Link
            href="https://www.amazon.com/Compasses/b?ie=UTF8&node=219431011"
            target="_blank"
            className="inline-link"
          >
            compass
          </Link>
          .
        </p>
      </section>
      <Footer />
    </>
  )
}
