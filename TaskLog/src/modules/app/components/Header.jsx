import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { LogoLink } from '../../common/index.js'
export default function Header() {
  const [, setMobileMenuOpen] = useState(false)

  {
    /*
    const { getUser } = useUsersStore()
  const user = getUser()
  const userName = user?.firstName || 'Usuario'
  const title =
    user?.gender === 'FEMALE'
      ? 'Bienvenida, Señora'
      : user?.gender === 'MALE'
      ? 'Bienvenido, Señor'
      : 'Mis saludos, distinguido usuario'

  const welcomeMessage = `${title} ${userName}. Un placer recibirle. ¿En qué puedo asistirle en esta ocasión?`
  */
  }

  return (
    <header className="bg-red-300 text-white">
      <nav
        className="mx-auto flex items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex p-2 justify-start lg:flex-1 rounded-lg shadow-xl hover:brightness-90 hover:scale-110 transition-all duration-100 ease-in-out">
          <LogoLink />
        </div>

        {/* Welcome Message */}
        {/*
                {user && (
          <p className="text-gray-800 text-2xl italic font-bold">
            {welcomeMessage}
          </p>
        )}
        */}

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* User Options */}

        {/*
                {show && (
          <div className="lg:flex lg:flex-1 lg:justify-end items-center">
            {user ? (
              <button className="flex items-center space-x-3 font-bold text-xl bg-red-500 text-white border-2 border-gray-800 px-6 py-3 rounded-xl shadow-lg hover:bg-red-700 hover:scale-95 transition-all duration-200">
                <FontAwesomeIcon icon={faSignOutAlt} className="w-6 h-6" />
                <span>Log Out</span>
              </button>
            ) : (
              <div className="flex space-x-6">
                <a
                  href="/"
                  className="flex items-center space-x-3 font-bold text-xl bg-indigo-500 text-gray-800 border-2 border-gray-800 px-8 py-4 rounded-xl shadow-2xl hover:from-cyan-400 hover:to-blue-400 hover:scale-95 transition-all duration-200"
                >
                  <FontAwesomeIcon
                    icon={faDoorOpen}
                    className="w-6 h-6 text-gray-900"
                  />
                  <span>Sign In</span>
                </a>
                <a
                  href="/create-account"
                  className="flex items-center space-x-3 font-bold text-xl bg-indigo-800 text-gray-200 border-2 border-gray-800 px-8 py-4 rounded-xl shadow-2xl hover:from-pink-400 hover:to-red-400 hover:scale-95 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="w-6 h-6" />
                  <span>Sign Up</span>
                </a>
              </div>
            )}
          </div>
        )}
        */}
      </nav>
    </header>
  )
}
