import {Card} from "@material-tailwind/react";


const RegisterForm = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full h-full mb-8">
                <Card className="w-full max-w-screen-md justify-center items-center bg-red-50">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 font-bold text-center text-2xl leading-9 tracking-tight text-gray-900">
                            Create an account
                        </h2>
                    </div>

                    <div className="mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="nickname" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nickname
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="nickname"
                                        name="nickname"
                                        type="text"
                                        autoComplete="nickname"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confirmPassword"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="current-confirmPassword"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                                >
                                    Create an account
                                </button>
                            </div>


                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                Already have an account?
                                <a href="/"
                                   className="ml-2 font-bold text-primary-600 hover:underline dark:text-primary-500">
                                    Login here
                                </a>
                            </p>

                        </form>

                    </div>
                </Card>
            </div>
        </>
    )
}


export default RegisterForm;