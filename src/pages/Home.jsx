
import RootLayout from '../components/Layouts/RootLayout'

const Home = () => {
  return (
    <RootLayout>
      <div className="w-full h-screen bg-gray-700">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl text-center">Hi, my name is <span className="">John Doe</span></h1>
          <p className="text-lg text-center">Welcome to my website</p>
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