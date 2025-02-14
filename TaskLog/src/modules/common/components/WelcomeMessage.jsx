import PropTypes from 'prop-types'

const WelcomeMessage = ({ user }) => {
  const userName = user?.firstName || 'User'
  const title =
    user?.gender === 'FEMALE'
      ? 'Welcome, Madam'
      : user?.gender === 'MALE'
      ? 'Welcome, Sir'
      : 'Greetings, esteemed user'

  return (
    user && (
      <p className="text-gray-800 text-3xl italic font-extrabold">
        {title} {userName}. It is a pleasure to have you here. How may I assist
        you today?
      </p>
    )
  )
}

WelcomeMessage.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    gender: PropTypes.string
  })
}

export default WelcomeMessage
