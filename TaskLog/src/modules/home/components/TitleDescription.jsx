import { Link } from 'react-router-dom'
import ActionButtons from './ActionButtons.jsx'
const TitleDescription = () => {
  return (
    <div className="mr-8 place-self-center lg:col-span-7">
      <h1 className="max-w-5xl mb-10 text-9xl font-extrabold leading-none tracking-tight">
        Managing your tasks <br /> with grace.
      </h1>
      <p className="leading-relaxed text-gray-600 font-bold max-w-7xl mb-6 lg:mb-8 md:text-lg lg:text-2xl">
        This refined task management assistant is crafted with precision using{' '}
        <Link to="https://tailwindcss.com" className="hover:underline">
          Tailwind CSS
        </Link>{' '}
        and elegantly structured with components from the{' '}
        <Link
          to="https://flowbite.com/docs/getting-started/introduction/"
          className="hover:underline"
        >
          Flowbite Library
        </Link>{' '}
        and the{' '}
        <Link to="https://flowbite.com/blocks/" className="hover:underline">
          Blocks System
        </Link>
        , ensuring a seamless and distinguished experience.
      </p>

      <ActionButtons />
    </div>
  )
}

export default TitleDescription
