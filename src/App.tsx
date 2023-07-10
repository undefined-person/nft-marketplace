import { Header } from 'components/Header'

import { Hero } from 'sections/Hero'
import { Unique } from 'sections/Unique'
import { Explore } from 'sections/Explore'
import { Artists } from 'sections/Artists'
import { Subscribe } from 'sections/Subscribe'
import { Footer } from 'sections/Footer'

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Unique />
      <Explore />
      <Artists />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
