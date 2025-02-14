import { LogoLink } from '../../common/index.js'
import WelcomeMessage from '../../common/components/WelcomeMessage.jsx'

import { useUsersStore } from '../../../store/useUsersStore.js'
import UserOptions from '../../common/components/UserOptions.jsx'

export default function Header() {
  const { getUser } = useUsersStore()
  const user = getUser()

  return (
    <header className="bg-red-300 text-white">
      <nav
        className="mx-auto flex items-center justify-between p-2 "
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex justify-start lg:flex-1 rounded-lg shadow-xl hover:brightness-90 hover:scale-110 transition-all duration-100 ease-in-out">
          <LogoLink />
        </div>

        {/* Welcome Message */}

        <WelcomeMessage user={user} />

        {/* User Options */}

        {/*<UserOptions /> */}
      </nav>
    </header>
  )
}
