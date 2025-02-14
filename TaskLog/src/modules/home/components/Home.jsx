import TitleDescription from './TitleDescription'
import TechnologyLinks from './TechnologyLinks'

function Home() {
  return (
    <div className="h-screen flex flex-col w-full">
      <section className="bg-white flex-grow">
        <div className="grid px-16 pt-10  mx-auto lg:gap-8   lg:grid-cols-12 ">
          <TitleDescription />
          <div className="mr-8 lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/home.png" alt="home image" />
          </div>
        </div>
      </section>

      <section className="bg-white w-full flex h-screen items-center justify-center">
        <TechnologyLinks />
      </section>
    </div>
  )
}

export default Home
