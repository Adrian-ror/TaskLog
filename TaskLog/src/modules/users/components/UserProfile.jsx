import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleUser,
  faFloppyDisk,
  faUserPen
} from '@fortawesome/free-solid-svg-icons'

const UserProfile = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe Roe',
    email: 'johndoe@example.com',
    username: 'johndoe',
    bio: 'Web developer & tech enthusiast.'
  })

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="flex-1 p-4 ">
      <div className="flex flex-row lg:flex-row gap-2 mb-6">
        <div className="shadow-lg border-2 flex-1 bg-red-100 border-red-200 rounded-xl px-6 py-3 animate-fade-in">
          <h2 className="text-3xl md:text-3xl font-bold text-red-900">
            <strong>Profile</strong> Picture
          </h2>
          <div className="flex-1 bg-red-100 border-b-2 border-gray-500 p-6 flex items-center">
            <span className="flex px-8 py-2 rounded-full text-xl font-bold items-center">
              <FontAwesomeIcon icon={faCircleUser} className="w-24 h-24 mr-8" />
              <div>
                <h2 className="text-3xl md:text-3xl ml-6 font-bold text-red-900">
                  <strong>{formData.firstName}</strong>
                </h2>
                <h3 className="text-2xl md:text-2xl ml-6 font-bold text-red-900">
                  <strong>{formData.lastName}</strong>
                </h3>
              </div>
            </span>
          </div>

          <div className="flex justify-start mt-4">
            <button className="bg-blue-900 font-bold text-xl text-white px-8 py-4 rounded-md hover:bg-blue-600 transition duration-300">
              <FontAwesomeIcon icon={faUserPen} className="mr-2 h-6" />
              Edit
            </button>
          </div>
        </div>

        <div className="shadow-lg border-2 flex-1 bg-red-100 border-red-200 rounded-xl p-6 animate-fade-in">
          <div className="border-b-2 border-gray-500 p-6 ">
            <div className="flex justify-between ">
              <form className="w-full">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-xl font-bold text-gray-700"
                >
                  Language
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>

              <form className="w-full ml-6">
                <label
                  htmlFor="genders"
                  className="block mb-2 text-xl font-bold text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="genders"
                  className="bg-gray-50 border font-bold  border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefer_not_to_say">Prefer not to say</option>
                </select>
              </form>
            </div>

            <form className="max-w-sm mx-auto mt-6">
              <label
                htmlFor="date"
                className="block mb-2 text-xl font-bold text-gray-700"
              >
                Date of birth
              </label>
              <input
                id="date"
                type="date"
                value={today}
                max={today}
                className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="Select date of birth"
              />
            </form>
          </div>

          <div className="flex justify-start items-center mt-6">
            <button className="bg-blue-900 font-bold text-xl text-white px-8 py-4 rounded-md hover:bg-blue-600 transition duration-300">
              <FontAwesomeIcon icon={faFloppyDisk} className="mr-2 h-6" />
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row lg:flex-row gap-2 mb-6 w-full">
        <div className="shadow-lg lg:w-full border-2 flex-1 bg-red-100 border-red-200 rounded-xl p-6 animate-fade-in">
          <h2 className="text-3xl md:text-3xl font-bold text-red-900 border-b-2 border-gray-500 py-4">
            Personal<strong className="ml-2">Information</strong>
          </h2>
          <div className="flex-1 bg-red-100  w-full  flex items-center">
            <span className="flex px-4 rounded-full w-full text-xl font-bold items-center">
              <form className="p-6 w-full">
                <div className="grid gap-6 mb-6 md:grid-cols-2 w-full">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-xl font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-xl font-medium text-gray-900 "
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="userName"
                      className="block mb-2 text-xl font-medium text-gray-900"
                    >
                      User Name{' '}
                    </label>
                    <input
                      type="text"
                      id="userName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="User Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-xl font-medium text-gray-900 "
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xl font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xl font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirm_password"
                    className="block mb-2 text-xl font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <button className="bg-blue-900 font-bold text-xl text-white px-8 py-4 rounded-md hover:bg-blue-600 transition duration-300">
                  <FontAwesomeIcon icon={faUserPen} className="mr-2 h-6" />
                  Edit
                </button>
              </form>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
