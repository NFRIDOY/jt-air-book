import './App.css'
import Banner from './components/Banner/Banner'
import FeaturedDestinations from './components/FeaturedDestinations/FeaturedDestinations'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Newslatter from './components/Newslatter/Newslatter'
import PopularAirlines from './components/PopularAirlines/PopularAirlines'

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Banner />
      <FeaturedDestinations />
      <PopularAirlines />
      <Newslatter />
      <Footer />
    </div>
  )
}

export default App
