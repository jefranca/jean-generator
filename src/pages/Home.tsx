import Header from '../components/Header'
import ImageGenerator from '../components/ImageGerator'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center mt-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Jean Generator</h1>
        <p className="text-lg text-gray-600 text-center max-w-xl">
        <ImageGenerator />
        </p>
      </main>
    </>
  )
}

export default Home