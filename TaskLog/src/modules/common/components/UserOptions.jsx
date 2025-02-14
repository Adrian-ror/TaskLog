import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const UserOptions = () => {
  return (
    <div className="lg:flex lg:flex-1 lg:justify-end items-center">
      <div className="flex space-x-6">
        <a
          href="/sign-in"
          className="flex items-center space-x-3 font-bold text-2xl bg-indigo-500 text-gray-800 border-2 border-gray-800 px-8 py-4 rounded-xl shadow-2xl hover:from-cyan-400 hover:to-blue-400 hover:scale-95 transition-all duration-200"
        >
          <FontAwesomeIcon
            icon={faDoorOpen}
            className="w-8 h-8 text-gray-900"
          />
          <span>Sign In</span>
        </a>
        <a
          href="/create-account"
          className="flex items-center space-x-3 font-bold text-2xl bg-indigo-800 text-gray-200 border-2 border-gray-800 px-8 py-4 rounded-xl shadow-2xl hover:from-pink-400 hover:to-red-400 hover:scale-95 transition-all duration-200"
        >
          <FontAwesomeIcon icon={faUserPlus} className="w-8 h-8" />
          <span>Sign Up</span>
        </a>
      </div>
    </div>
  )
}

export default UserOptions
