import Link from 'next/link'

const WrappedButton = ({ children }) => {
  return (
    <button
      className={`flex items-center justify-center cursor-pointer rounded transform transition
                  py-3 px-8 font-semibold border border-gray-300 duration-500 hover:bg-white
                  hover:text-black`}
    >
      {children}
    </button>
  )
}

export default function Button({ children, link, target }) {
  if (link) {
    return (
      <Link href={link} target={target}>
        <WrappedButton>
          {children}
        </WrappedButton>
      </Link>
    )
  }

  return <WrappedButton>{children}</WrappedButton>
}