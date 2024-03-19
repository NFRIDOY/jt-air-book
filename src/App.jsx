import './App.css'
import Banner from './components/Banner/Banner'
import FeaturedDestinations from './components/FeaturedDestinations/FeaturedDestinations'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Banner />
      <FeaturedDestinations />
      <Footer />
    </div>
  )
}

export default App
