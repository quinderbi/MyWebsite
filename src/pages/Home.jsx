
import RootLayout from '../components/Layouts/RootLayout'

const Home = () => {
  return (
    <RootLayout>
      <div className="w-full h-screen">
        <div className="flex flex-col items-start justify-center h-full p-5">
          <h1 className="text-2xl font-semibold ">Hi, I'm <span className="text-blue-600 whitespace-nowrap">Quin Derbi</span>.</h1>
          <h2 className='text-2xl font-medium '><span className=' hover:line-through'>Not anyone</span>, just making what can be made.</h2>
          <a href="/about" className='border-2 border-black px-4'>
            <p className="text-lg text-center">
              Know More
            </p>
          </a>
        </div>
      </div>
    </RootLayout>
  )
}

export default Home