import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const LoginView = ({
                       userName,
                       password,
                       userNameError,
                       passwordError,
                       handleUserNameChange,
                       handlePasswordChange,
                       handleSubmit,
                   }) => {
    return (
        <div className="h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="m-0 sm:m-10 bg-white shadow-lg sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faRightToBracket} className="mx-auto h-16" />
                    </div>
                    <div className="mt-8 flex flex-col items-center">
                        <h1 className="text-4xl font-sans font-extrabold">Sign In</h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-screen-xl">
                                {/* Input para el nombre de usuario */}
                                <input
                                    className="w-full px-12 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text"
                                    value={userName}
                                    onChange={handleUserNameChange}
                                    placeholder="User Name"
                                />
                                {userNameError && (
                                    <p className="text-red-500 text-lg mt-1">{userNameError}</p>
                                )}

                                {/* Input para la contraseña */}
                                <input
                                    className="w-full px-12 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-lg focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                />
                                {passwordError && (
                                    <p className="text-red-500 text-lg mt-1">{passwordError}</p>
                                )}

                                {/* Botón de envío */}
                                <button
                                    onClick={handleSubmit}
                                    className="mt-5 border-2 border-gray-800 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <FontAwesomeIcon icon={faDoorOpen} className="h-6" />
                                    <span className="ml-3 text-lg font-bold">Sign In</span>
                                </button>

                                <p className="mt-4 text-lg text-center font-medium text-gray-800">
                                    Not registered?{" "}
                                    <a
                                        href="/create-account"
                                        className="font-medium text-indigo-800 hover:text-indigo-900 transition-colors duration-300"
                                    >
                                        Create an account
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 bg-indigo-100 text-center lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url('/login.svg')",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

LoginView.propTypes = {
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    userNameError: PropTypes.string,
    passwordError: PropTypes.string,
    handleUserNameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default LoginView;
