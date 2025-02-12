import TitleDescription from './TitleDescription'
import TechnologyLinks from './TechnologyLinks'

function Home() {
  return (
    <div className="h-screen flex flex-col w-full">
      <section className="bg-white flex-grow">
        <div className="grid px-16 pt-20  mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12 ">
          <TitleDescription />
          <div className=" hidden mr-8 lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/public/home.png" alt="home image" />
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
