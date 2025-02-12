import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const TechnologyLinks = () => {
  return (
    <div className="max-w-screen-2xl px-4">
      <div className="grid grid-cols-6 gap-2 text-gray-500 text-center">
        <Link
          to="https://es.react.dev/"
          className="flex items-center justify-center hover:text-gray-900 hover:scale-110 transition-transform duration-200"
        >
          <img src="./React.png" className="mr-2 h-24" />
          <span className="text-6xl text-center font-extrabold">React</span>
        </Link>

        <Link
          to="https://es.javascript.info/"
          className="flex items-center justify-center hover:text-gray-900 hover:scale-110 transition-transform duration-200"
        >
          <img src="./JavaScript.png" className="mr-2 h-16" />
          <span className="text-6xl text-center font-extrabold">
            JavaScript
          </span>
        </Link>

        <Link
          to="https://zustand-demo.pmnd.rs/"
          className="flex items-center justify-center hover:text-gray-900 hover:scale-110 transition-transform duration-200"
        >
          <img src="./zustand.svg" className="mr-2 h-20" />
          <span className="text-6xl text-center font-extrabold">Zustand</span>
        </Link>

        <Link
          to="https://tailwindcss.com/"
          className="flex items-center justify-center hover:text-gray-900 hover:scale-110 transition-transform duration-200"
        >
          <img src="./tailwindcss.svg" className="mr-2 h-12" />
          <span className="text-6xl text-center font-extrabold">
            TailwindCSS
          </span>
        </Link>

        <Link
          to="https://vite.dev/"
          className="flex items-center justify-center hover:text-gray-900 hover:scale-110 transition-transform duration-200"
        >
          <img src="./Vite.js.png" className="mr-2 h-12" />
          <span className="text-6xl text-center font-extrabold">Vite</span>
        </Link>

        <Link
          to="https://fontawesome.com/"
          className="flex items-center justify-center hover:text-gray-900 hover:scale-110 transition-transform duration-200"
        >
          <FontAwesomeIcon
            icon={faFontAwesome}
            className="mr-2 h-12 text-blue-500"
          />
          <span className="text-6xl text-center font-extrabold">
            FontAwesome
          </span>
        </Link>
      </div>
    </div>
  )
}

export default TechnologyLinks
