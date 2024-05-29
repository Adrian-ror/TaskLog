import {useState} from 'react'
import {
    Bars3Icon
} from '@heroicons/react/24/outline'



export default function Header() {
    const [, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-red-300 text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">

                {/* App Logo */}
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="/task.png" alt=""/>
                    </a>
                </div>

                {/* Mobile Options */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>


                {/* App Phrase  */}
                <div className="lg:flex lg:flex-1 lg:justify-end ">
                    <p className=" flex text-green-800 text-2xl italic font-medium justify-items items-center">
                        {'{'} I wish you have an tidy day {'}'}
                    </p>
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Flow</span>
                            <img className="h-8 w-auto" src="/wave.png" alt=""/>
                        </a>
                    </div>
                </div>


            </nav>
        </header>
    )
}