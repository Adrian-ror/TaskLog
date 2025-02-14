import { Link } from 'react-router-dom'

const LogoLink = () => {
  return (
    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
      <span className="sr-only">Your Company</span>
      <img
        className="h-12 w-auto rounded-lg mr-4"
        src="/magician.png"
        alt="Logo"
      />
      <span className="ml-4 text-4xl font-mono italic font-extrabold text-gray-700">
        Alfred
      </span>
    </Link>
  )
}

export default LogoLink
