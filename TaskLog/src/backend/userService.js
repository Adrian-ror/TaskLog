import {
  appFetch,
  config,
  getServiceToken,
  removeServiceToken,
  setReauthenticationCallback,
  setServiceToken
} from './appFetch'

/**
 * Handles user authentication by setting the service token and reauthentication callback.
 */
const handleAuthentication = (
  authenticatedUser,
  reauthenticationCallback,
  onSuccess
) => {
  setServiceToken(authenticatedUser.serviceToken)
  setReauthenticationCallback(reauthenticationCallback)
  onSuccess(authenticatedUser)
}

/**
 * Registers a new user.
 */
export const signUp = async (
  userName,
  password,
  firstName,
  lastName,
  email,
  phoneNumber,
  image,
  dateOfBirth,
  gender,
  onSuccess,
  onErrors,
  reauthenticationCallback
) => {
  try {
    let mainImageUrl
    if (image) {
      mainImageUrl = 'imageUrl'
    } else {
      mainImageUrl = null
    }

    const formData = {
      userName: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      image: mainImageUrl,
      dateOfBirth: dateOfBirth,
      gender: gender
    }
    await appFetch(
      '/users/signUp',
      config('POST', formData),
      (authenticatedUser) =>
        handleAuthentication(
          authenticatedUser,
          reauthenticationCallback,
          onSuccess
        ),
      onErrors
    )
  } catch (error) {
    onErrors(error)
  }
}

/**
 * Logs in a user.
 */
export const login = (
  userName,
  password,
  onSuccess,
  onErrors,
  reauthenticationCallback
) => {
  console.log(userName, password)
  appFetch(
    '/users/login',
    config('POST', { loginCredential: userName, password }),
    (authenticatedUser) =>
      handleAuthentication(
        authenticatedUser,
        reauthenticationCallback,
        onSuccess
      ),
    onErrors
  )
}

/**
 * Attempts to log in using the service token.
 */
export const tryLoginFromServiceToken = (
  onSuccess,
  reauthenticationCallback
) => {
  const serviceToken = getServiceToken()

  if (!serviceToken) {
    onSuccess()
    return
  }

  setReauthenticationCallback(reauthenticationCallback)

  appFetch(
    '/users/loginFromServiceToken',
    config('POST'),
    (authenticatedUser) => onSuccess(authenticatedUser),
    () => removeServiceToken()
  )
}

/**
 * Logs out the user by removing the service token.
 */
export const logout = () => removeServiceToken()


/**
 * Fetches all available genders from the server.
 */
export const getAllGenders = async (onSuccess, onErrors) => {
  try {
    await appFetch(
        '/users/genres',
        config('GET'),
        (genders) => onSuccess(genders),
        onErrors
    )
  } catch (error) {
    onErrors(error)
  }
}
