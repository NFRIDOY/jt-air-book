import './App.css'
import Banner from './components/Banner/Banner'
import FeaturedDestinations from './components/FeaturedDestinations/FeaturedDestinations'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Banner />
      <FeaturedDestinations />
    </div>
  )
}

export default App
